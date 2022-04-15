const Very = require("../models");

const allVery = async (req, res) => {
  const data = await Very.find();
  res.send(data);
};

const newVery = (req, res) => {
  const very = new Very({
    risa: req.body.risa,
    word: req.body.word,
    desc: [...req.body.desc],
    mean: [...req.body.mean],
    ex: [
      {
        verse: req.body.ex[0].verse,
        mins: req.body.ex[0].mins,
      },
      {
        verse: req.body.ex[1].verse,
        mins: req.body.ex[1].mins,
      },
      {
        verse: req.body.ex[2].verse,
        mins: req.body.ex[2].mins,
      },
    ],
    vi: [...req.body.vi],
  });
  very.save((err) => {
    if (err) console.log(err);
    res.send(very);
  });
};

module.exports = { allVery, newVery };
