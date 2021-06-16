import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import PayIMG from "../components/images/pay.png";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "operaonlineapplication.in";

const Payment = () => {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const [amount, setAmount] = useState(null);
  async function displayRazorpay(e) {
    e.preventDefault();
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online!?");
      return;
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount }),
    };

    const data = await fetch(
      "https://operaonlineapplication.in/razorpay",
      requestOptions
    ).then((t) => t.json());

    if (!data) {
      alert("Server error. Are you online?");
      return;
    }

    const options = {
      key: __DEV__ ? process.env.RAZORPAY_KEY : "PRODUCTION_KEY",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Opera International",
      description: "Thank you for paying to Opera International",
      image:
        "https://operainternational.in/public/frontend/opera/images/logo-opera.png",
      handler: function (response) {
        // console.log(response);
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        history.push("/");
      },
      prefill: {
        name: user.name,
        email: user.email,
      },
      notes: {
        user_id: user._id,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 payment__buttons">
          <form className="payment__form" onSubmit={displayRazorpay}>
            <input
              type="number"
              className="payment__amount"
              required
              placeholder="enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit" className="register__button  p-3">
              Contiune to Payment
            </button>
          </form>
          <Link to="/user">
            <button className="payLater__button  p-3 mb-4">Pay Later</button>
          </Link>
        </div>
        <div className="col-md-6 user__statusImg-container">
          <img src={PayIMG} alt="" className="user__statusImg" />
        </div>
      </div>
    </div>
  );
};

export default Payment;
