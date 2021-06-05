import mongoose from "mongoose";
const Schema = mongoose.Schema;
const paymentSchema = mongoose.Schema({
  id: {
    type: String,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  email: {
    type: String,
  },
  status: {
    type: String,
  },
  method: {
    type: String,
  },
  amount: {
    type: Number,
  },
  paided: {
    type: Boolean,
    default: false,
    // captured
  },
});

const PaymentFile = mongoose.model("PaymentFile", paymentSchema);

export default PaymentFile;
