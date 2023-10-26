import mongoose from "mongoose";

export interface IQuestion extends mongoose.Document {
  title: string;
  content: string;
  views: number;

  // Reference to other collection
  tags: mongoose.Schema.Types.ObjectId[];
  upvotes: mongoose.Schema.Types.ObjectId[];
  downvotes: mongoose.Schema.Types.ObjectId[];
  author: mongoose.Schema.Types.ObjectId;
  answers: mongoose.Schema.Types.ObjectId[];
}

const QuestionSchema = new mongoose.Schema<IQuestion>(
  {
    title: {
      type: String,
      required: [true, "Title of the question is requred."],
    },
    content: {
      type: String,
      required: [true, "Content of the question is requred."],
    },
    views: {
      type: Number,
      default: 0,
    },

    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
    upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    downvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    answers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Answer" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Question ||
  mongoose.model<IQuestion>("Question", QuestionSchema);
