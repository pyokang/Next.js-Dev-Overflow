"use server";

import User from "@/models/User";
import { connectToDatabase } from "../mongoose";
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/models/Question";

export async function getUserById(params: any) {
  try {
    await connectToDatabase();

    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (error: unknown) {
    console.error(error);
  }
}

export async function createUser(params: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create(params);
    return newUser;
  } catch (error: unknown) {
    console.error(error);
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    await connectToDatabase();
    const { clerkId, updateData, path } = params;
    const updatedUser = await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });

    revalidatePath(path);
    return updatedUser;
  } catch (error: unknown) {
    console.error(error);
  }
}

export async function deleteUser(params: DeleteUserParams) {
  try {
    await connectToDatabase();
    const { clerkId } = params;

    const user = await User.findOneAndDelete({ clerkId });
    if (!user) {
      throw new Error("user not found");
    }

    // Delete user from database
    // and questions, answers, comments, etc.

    // get user question ids
    // const userQuestionIds = await Question.find({ author: user._id }).distinct(
    //   "_id"
    // );

    // delete user questions
    await Question.deleteMany({ author: user._id });

    // TODO: delete user answers, comments, etc.

    const deletedUser = await User.findByIdAndDelete(user._id);

    return deletedUser;
  } catch (error: unknown) {
    console.error(error);
  }
}
