import mongoose from "mongoose";
import Expense from "../models/expense";

export function createExpense(req, res) {
  const expense = new Expense({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    amount: req.body.amount,
    monthId: req.body.monthId,
  });
  return expense
    .save()
    .then((newExpense) => {
      res.status(201).json(newExpense);
    })
    .catch((e) => {
      res.status(500).json({
        error: e.message,
      });
    });
}

export function getAllExpense(req, res) {
  Expense.find()
    .select("_id name amount monthId")
    .then((allExpense) => {
      res.status(200).json(allExpense);
    })
    .catch((e) => {
      res.status(500).json({
        error: e.message,
      });
    });
}

export function getSingleExpense(req, res) {
  const id = req.params.expenseId;
  Expense.findById(id)
    .then((expense) => {
      res.status(200).json(expense);
    })
    .catch((e) => {
      res.status(500).json({
        error: e.message,
      });
    });
}

export function updateExpense(req, res) {
  const id = req.params.expenseId;
  const updateObj = req.body;
  Expense.updateOne({ _id: id }, { $set: updateObj })
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

export function deleteExpense(req, res) {
  const id = req.params.expenseId;
  Expense.findByIdAndRemove(id)
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
