import mongoose from "mongoose";

// exits model inventory
const exitsSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Entry",
      required: true,
    },

    typeExits: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TypeExits",
      required: true,
    },

    quantity: {
      type: Number,
    },
    date: {
      type: Date,
      default: Date.now,
    },

    status: {
      type: String,
      required: true,
      enum: ["active", "inactive", "pending", "blocked", "deleted"],
      default: "pending",
    },

    price: {
      type: Number,
    },

    total: {
      type: Number,
      default: 0,
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Exits", exitsSchema);
