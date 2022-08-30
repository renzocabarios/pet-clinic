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
    name: {
      trim: true,
      type: String,
      required: [true, "Position Name is required."],
    },
    description: {
      trim: true,
      type: String,
      required: [true, "Position Description is required."],
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  options
);

schema.plugin(paginate);

export default mongoose.model(CONST.MODEL.POSITION, schema);