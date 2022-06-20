const Sequelize = require("sequelize");
const sequelize = new Sequelize("test_app", "root", "Simple.37754", {
  host: "localhost",
  dialect: "mysql",
});
const Cart = require('./model/cartModel')
const express = require("express");
const app = express();
const getAllCart = require("./route/cartRoute");

// middlewears
app.use(express.json());

// routes
// app.use("/api/v1", getAllCart);

sequelize
  .sync({ force: true })
  .then((result) => {
    console.log("mysql connected");
    return Cart.create({cartItem: "brush", cash: "150"});
  })
  .then((Cart) => {
    console.log("cart created");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(8000, () => {
  console.log("server started on port 8000");
});

module.exports = sequelize;
