const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const verySchema = new Schema({
  risa: Number,
  word: String,
  desc: [String],
  mean: [String],
  ex: [{ verse: String, mins: String }],
  vi: [String],
});

const Very = model("Very", verySchema);

module.exports = Very;
