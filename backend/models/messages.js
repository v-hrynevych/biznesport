import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Messages extends Model {
    static associate(models) {
      // define association here
    }
  }

  Messages.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Messages',
      timestamps: true,
    }
  );

  return Messages;
};
