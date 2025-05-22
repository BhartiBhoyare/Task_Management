const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema(
  {
    deadline: {
      type: Date,
    },
    createdOn: {
      type: Date,
    },
    title: {
      type: String,
      unique: true,
    },
    desc: {
      type: String,
      default: false,
    },
    important: {
      type: Boolean,
      default: false,
    },
    complete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("task", taskSchema);
