const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  heading: {
    type: String,
    required: true,
    trim: true,
  },

  body: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Task", taskSchema);