import { Router } from "express";
import {
  getAll,
  getById,
  add,
  approve,
  deleteById,
} from "./controllers/adoption.controller.js";

const router = Router();
router.route("/").get(getAll).post(add);
router.route("/:id").get(getById).patch(approve).delete(deleteById);

export default router;
