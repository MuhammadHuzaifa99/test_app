const express = require("express");
const router = express.Router();
const Cart = require("../model/cartModel")
const getAllCart = async (req, res) => {
  try {
    const cart = await Cart.create(req.body)
    console.log(cart)
    res.status(200).json({
      msg: "api testing",
      data: cart
    });
  } catch (error) {
    res.status(404).json({
      msg: "error",
      error: error.message,
    });
  }
};

router.get("/cart", getAllCart);

module.exports = router;
