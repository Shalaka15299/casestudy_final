'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    userid: DataTypes.NUMERIC,
    userName: DataTypes.STRING,
    paymentMode: DataTypes.STRING,
    grandTotal: DataTypes.NUMERIC,
    orderStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};