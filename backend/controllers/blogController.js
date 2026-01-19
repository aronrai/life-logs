const Log = require("../models/log");

const postLog = async (req, res, next) => {
  try {
    const { title, content, mood, image } = req.body;
    const log = await Log.create({ title, content, mood, image });
    res.status(201).json(log);
  } catch (err) {
    next(err);
  }
};
const getLogs = async (req, res, next) => {
  try {
    const logs = await Log.find();
    if (logs.length === 0) {
      return res.json(logs);
    }
    res.json(logs);
  } catch (err) {
    next(err);
  }
};
const getLog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const log = await Log.findById(id);
    if (!log) {
      return res.status(404).json({ message: "no log found" });
    }
    res.json(log);
  } catch (err) {
    next(err);
  }
};
const updateLog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content, mood, image } = req.body;
    const log = await Log.findByIdAndUpdate(
      id,
      { title, content, mood, image },
      { new: true, runValidators: true },
    );
    if (!log) {
      return res.status(404).json({ message: "no log found" });
    }
    res.json(log);
  } catch (err) {
    next(err);
  }
};
const deleteLog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const log = await Log.findByIdAndDelete(id);
    if (!log) {
      return res.status(404).json({ message: "no log found" });
    }
    res.json({ message: "log deleted successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  postLog,
  getLogs,
  getLog,
  updateLog,
  deleteLog,
};
