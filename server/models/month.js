import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const monthSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
  },
  income: {
    type: mongoose.Types.Decimal128,
  },
});

export default mongoose.model("Month", monthSchema);
