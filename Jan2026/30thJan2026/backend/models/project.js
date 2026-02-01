const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    timestamps: true,
  },
);

//Indexing
ProjectSchema.index({ ownerId: 1 });
ProjectSchema.index({ members: 1 });

module.exports = mongoose.model("project", projectSchema);
