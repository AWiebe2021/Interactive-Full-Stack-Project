const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Project model
class Project extends Model {}
//   static advance(body, _models) {
//       return Project.findOne({
//         where: {
//           id: body.project_id
//         },
//         attributes: [
//           'id',
//           'title',
//           'created_at',
//           'shipping_address',
//           'shipping_city',
//           'shipping_state',
//           'shipping_zip',
//           'customer_id',
//           'process_id'
//         ]
//       });
//     };
//   }


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
    shipping_address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    shipping_city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    shipping_state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    shipping_zip: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
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
      allowNull: true,
      // references: {
      //   model: 'process',
      //   key: 'id'
      // }
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'project'
  }
);

module.exports = Project;
