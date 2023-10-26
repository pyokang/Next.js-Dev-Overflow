import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  picture: string;
  location?: string;
  portfolioWebsite?: string;
  reputation?: number;
  saved: mongoose.Types.ObjectId[];
  joinedAt: Date;
}

const UserSchema = new mongoose.Schema<IUser>({
  clerkId: {
    type: String,
    required: [true, "ClerkID is required"],
  },
  name: {
    type: String,
    required: [true, "Name of the user is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
  },
  bio: {
    type: String,
  },
  picture: {
    type: String,
    required: [true, "Picture is required"],
  },
  location: {
    type: String,
  },
  portfolioWebsite: {
    type: String,
  },
  reputation: {
    type: Number,
    default: 0,
  },
  saved: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  joinedAt: { type: Date, default: Date.now },
});

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
