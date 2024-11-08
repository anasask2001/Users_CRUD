import mongoose from "mongoose";

const user_schema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    isDelete: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", user_schema);
export { User };
