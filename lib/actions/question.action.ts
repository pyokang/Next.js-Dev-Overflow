"use server";

import Tag from "@/models/Tag";
import Question from "@/models/Question";

import { connectToDatabase } from "../mongoose";
import { CreateQuestionParams, GetQuestionsParams } from "./shared.types";
import User from "@/models/User";
import { revalidatePath } from "next/cache";

export async function getQuestions(params: GetQuestionsParams) {
  try {
    await connectToDatabase();
    const questions = await Question.find({})
      .populate({ path: "tags", model: Tag })
      .populate({ path: "author", model: User })
      .sort({ createdAt: -1 });

    return { questions };
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
}

export async function createQuestion(params: CreateQuestionParams) {
  try {
    // Connect to DB
    await connectToDatabase();
    // Get author
    const { title, content, tags, author, path } = params;

    const newQuestion = await Question.create({
      title,
      content,
      author,
    });

    // Get or create tag Id
    const tagDocuments = [];
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        {
          name: { $regex: new RegExp(`^${tag}$`, "i") },
        },
        {
          $setOnInsert: { name: tag },
          $push: { question: newQuestion._id },
        },
        {
          upsert: true,
          new: true,
        }
      );
      tagDocuments.push(existingTag._id);
    }

    await Question.findByIdAndUpdate(newQuestion._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    // Create an interaction record for the user's ask_question action
    // Purge cache data on demand
    console.log("revalidating path", path);
    revalidatePath(path);

    // Increment author's reputation by +5 for creating a question
  } catch (error: unknown) {}
}
