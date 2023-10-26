import mongoose from "mongoose";

export interface ITag extends mongoose.Document {
  name: string;
  description: string;
  questions: mongoose.Schema.Types.ObjectId[];
  followers: mongoose.Schema.Types.ObjectId[];
  createdOn: Date;
}

const TagSchema = new mongoose.Schema<ITag>({
  name: {
    type: String,
    required: [true, "Tag name is required"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Tag description is required"],
  },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdOn: { type: Date, default: Date.now },
});

export default mongoose.models.Tag || mongoose.model<ITag>("Tag", TagSchema);
