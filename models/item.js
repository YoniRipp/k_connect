const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class Item extends Model {
    static associate(models) {
      // define association here
      Item.belongsTo(models.Category, {
        foreignKey: 'category_id'
      });
      Item.hasMany(models.ItemVolume, {
        foreignKey: 'item_id'
      });
    }
  }
  Item.init({
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'category_id'
      }
    }
  }, {
    sequelize,
    modelName: 'Item',
    tableName: 'items',
    timestamps: false
  });
  return Item;
};
