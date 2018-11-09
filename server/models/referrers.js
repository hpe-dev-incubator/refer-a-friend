module.exports = function(sequelize, DataTypes) {
  const referrers = sequelize.define('Referrers', {
    name: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  return referrers;
}