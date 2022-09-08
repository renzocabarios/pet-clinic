import mongoose from "mongoose";
import paginate from "mongoose-paginate";
import CONST from "../../constants/index.js";

const options = {
  timestamps: {
    createdAt: "DateCreated",
    updatedAt: "DateUpdated",
  },
};

const schema = mongoose.Schema(
  {
    adopter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: CONST.MODEL.USER.ADOPTER,
      required: [true, "Adopter is required."],
    },
    animal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: CONST.MODEL.ANIMAL,
      required: [true, "Animal is required."],
    },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  options
);

schema.plugin(paginate);

export default mongoose.model(CONST.MODEL.ADOPTION, schema);
