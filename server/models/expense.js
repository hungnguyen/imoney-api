import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const expenseSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  monthId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

export default mongoose.model("Expense", expenseSchema);
