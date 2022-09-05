import mongoose from "mongoose";
import paginate from "mongoose-paginate";
import CONST from "../../../constants/index.js";
import model from "./user.model.js";

const schema = mongoose.Schema({
  position: {
    type: mongoose.Schema.Types.ObjectId,
    ref: CONST.MODEL.POSITION,
    required: [true, "Personnel Position is required."],
  },
});

schema.plugin(paginate);

export default model.discriminator(CONST.MODEL.USER.PERSONNEL, schema);
