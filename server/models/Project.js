const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a project title"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    longDescription: {
      type: String,
    },
    images: [
      {
        url: String,
        caption: String,
        isMain: {
          type: Boolean,
          default: false,
        },
      },
    ],
    technologies: [String],
    category: {
      type: String,
      required: [true, "Please add a category"],
      enum: [
        "web",
        "mobile",
        "desktop",
        "fullstack",
        "frontend",
        "backend",
        "devops",
        "other",
      ],
    },
    liveUrl: String,
    githubUrl: String,
    featured: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },
    completionDate: Date,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);