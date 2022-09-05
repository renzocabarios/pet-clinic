import mongoose from "mongoose";
import paginate from "mongoose-paginate";
import CONST from "../constants/index.js";

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
      required: [true, "Animal Name is required."],
    },
    breed: {
      trim: true,
      type: String,
      required: [true, "Animal Breed is required."],
    },
    age: {
      trim: true,
      type: Number,
      default: 0,
    },
    sex: {
      trim: true,
      type: String,
      enum: ["Male", "Female"],
    },
    animalType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: CONST.MODEL.ANIMAL_TYPE,
      required: [true, "Animal Type is required."],
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  options
);

schema.plugin(paginate);

export default mongoose.model(CONST.MODEL.ANIMAL, schema);
