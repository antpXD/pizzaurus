const jsonServer = require("json-server");
const express = require("express");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const path = require("path");
require("dotenv").config();

const stripe = require("stripe")(process.env.SECRET_KEY);

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get("/payment", (req, res) => {
  res.send("Hi!");
  res.jsonp(req.query);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use(async (req, res) => {
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

if (process.env.NODE_ENV === "production") {
  // set static folder
  server.use(express.static("client/build"));

  server.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "build", "index.html"))
  );
}

// Use default router
server.use(router);
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
