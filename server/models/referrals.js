module.exports = function(sequelize, DataTypes) {
  const referrals = sequelize.define('Referrals', {
    name: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    checkedin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  });
  return referrals;
}