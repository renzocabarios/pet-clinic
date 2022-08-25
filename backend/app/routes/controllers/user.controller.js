import service from "../services/user.service.js";
import bcrypt from "bcrypt";
import ENV from "../../env/index.js";

const getAll = async (req, res) => {
  const data = await service.getAll();
  res.send({ data });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const data = await service.getById(id);
  res.send({ data: [data] });
};

const add = async (req, res) => {
  const { password, ...rest } = req.body;
  const encrypted = await bcrypt.hash(password, ENV.HASH_SALT);
  const data = await service.add({ password: encrypted, ...rest });
  res.send({ data });
};

const update = async (req, res) => {
  const { id } = req.params;
  const { password, ...rest } = req.body;
  const data = await service.update(id, rest);
  res.send({ data: [data] });
};

const changePassword = async (req, res) => {
  const { id } = req.params;
  const { password, ...rest } = req.body;
  const encrypted = await bcrypt.hash(password, ENV.HASH_SALT);

  const data = await service.update(id, { password: encrypted });
  res.send({ data: [data] });
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const data = await service.deleteById(id);
  res.send({ data: [data] });
};

export { getAll, getById, add, update, deleteById, changePassword };
