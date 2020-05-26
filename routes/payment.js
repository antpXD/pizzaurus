const express = require("express");
const router = express.Router();
require("dotenv").config();

const stripe = require("stripe")(process.env.SECRET_KEY);

router.post("/", async (req, res) => {
  if (req.method === "POST") {
    try {
      const { amount } = req.body;

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
      });

      res.status(200).send(paymentIntent.client_secret);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
});

module.exports = router; //po prostu trzeba
