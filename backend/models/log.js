const mongoose = require("mongoose");

const logSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      unique: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
      minLength: 20,
    },
    mood: {
      type: String,
      default: "neutral",
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Log = mongoose.model("Log", logSchema);

module.exports = Log;
