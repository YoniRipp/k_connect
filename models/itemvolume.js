const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class ItemVolume extends Model {
    static associate(models) {
      // define association here
      ItemVolume.belongsTo(models.Item, {
        foreignKey: 'item_id'
      });
    }
  }
  ItemVolume.init({
    volume_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'items',
        key: 'item_id'
      }
    },
    volume_description: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    duration_months: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ItemVolume',
    tableName: 'items_volumes',
    timestamps: false
  });
  return ItemVolume;
};
