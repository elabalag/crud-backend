// models/Task.js
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,  // optional: for createdAt and updatedAt
});

const Task = mongoose.model("Task", taskSchema);
export default Task;
