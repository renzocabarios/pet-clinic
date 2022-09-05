import mongoose from "mongoose";
import paginate from "mongoose-paginate";
import CONST from "../../constants/index.js";
import model from "./user.model.js";

const schema = mongoose.Schema({
  animals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: CONST.MODEL.ANIMAL,
    },
  ],
});

schema.plugin(paginate);

export default model.discriminator(CONST.MODEL.USER.ADOPTER, schema);
