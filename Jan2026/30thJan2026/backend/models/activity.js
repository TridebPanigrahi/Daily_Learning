const mongoose = require("mongoose");

const Schema = mongoose.Schema();

const ActivityLogSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    taskId: {
      type: Schema.Types.ObjectId,
      ref: "task",
      required: true,
    },

    action: {
      type: String,
      enum: ["created", "updated", "deleted", "status_changed"],
      required: true,
    },

    metadata: Schema.Types.Mixed,
  },
  { timestamps: true },
);

ActivityLogSchema.index({ taskId: 1, createdAt: -1 });
ActivityLogSchema.index({ userId: 1, createdAt: -1 });

module.exports = mongoose.model("activityLog", ActivityLogSchema);
