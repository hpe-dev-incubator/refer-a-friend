module.exports = function(sequelize, DataTypes) {
  const referrers = sequelize.define('Referrers', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    name: {
    type: DataTypes.STRING,
    allowNull: false
    },
    checkinCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  });
  return referrers;
}