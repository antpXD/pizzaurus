const express = require("express");
const router = express.Router();
const Order = require("../model/Order");

//@route    POST api/orders
//@desc     Add new orders
//@access   Private
router.post("/", async (req, res) => {
  //pulling out the data from the body
  const { id, customer, pizzaListInCart } = req.body;
  try {
    const newOrder = new Order({
      id: id,
      customer: customer,
      pizzaListInCart: pizzaListInCart,
    });
    const order = await newOrder.save();
    console.log(order);
    res.json(order);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// @route    GET api/orders/:id
// @desc     Get users orders
// @access   Private
router.get("/:id", async (req, res) => {
  try {
    let order = await Order.findOne({ id: req.params.id });

    if (!order) return res.status(404).json({ msg: "Order not found" });

    res.json(order);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router; //po prostu trzeba
