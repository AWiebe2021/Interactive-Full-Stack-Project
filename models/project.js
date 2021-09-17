const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Project model
class Project extends Model {}

// create fields/columns for Project model
Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateTimeStamp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'customer',
        key: 'id'
      }
    },
    process_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'process',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'project'
  }
);

module.exports = Project;
