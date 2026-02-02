const mongoose = require("mongoose");

const Schema = mongoose.Schema();

const NotificationSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },

    type: String,

    payload: Object,

    isRead: { type: Boolean, default: false },
  },
  { timestamps: true },
);

module.exports = mongoose.model("notification", NotificationSchema);
