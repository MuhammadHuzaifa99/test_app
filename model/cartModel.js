const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize('sqlite::memory:');

const Cart = sequelize.define("cart", {
  idCarts: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  cartItem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cash: DataTypes.INTEGER,

  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});

Cart.sync();

module.exports = Cart;
