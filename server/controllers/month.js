import mongoose from "mongoose";
import Month from "../models/month";

export function createMonth(req, res) {
  const month = new Month({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    income: req.body.income,
    year: req.body.year,
  });
  return month
    .save()
    .then((newMonth) => {
      res.status(201).json(newMonth);
    })
    .catch((e) => {
      res.status(500).json({
        error: e.message,
      });
    });
}

export function getAllMonth(req, res) {
  Month.find()
    .select("_id name year income")
    .then((allMonth) => {
      res.status(200).json(allMonth);
    })
    .catch((e) => {
      res.status(500).json({
        error: e.message,
      });
    });
}

export function getSingleMonth(req, res) {
  const id = req.params.monthId;
  Month.findById(id)
    .then((month) => {
      res.status(200).json(month);
    })
    .catch((e) => {
      res.status(500).json({
        error: e.message,
      });
    });
}

export function updateMonth(req, res) {
  const id = req.params.monthId;
  const updateObj = req.body;
  Month.updateOne({ _id: id }, { $set: updateObj })
    .exec()
    .then(() => {
      res.status(200).json(updateObj);
    })
    .catch((e) => {
      res.status(500).json({
        error: e.message,
      });
    });
}

export function deleteMonth(req, res) {
  const id = req.params.monthId;
  Month.findByIdAndRemove(id)
    .exec()
    .then(() => {
      res.status(204).json({});
    })
    .catch((e) => {
      res.status(500).json({
        error: e.message,
      });
    });
}
