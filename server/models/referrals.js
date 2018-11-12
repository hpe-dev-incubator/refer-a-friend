module.exports = function(sequelize, DataTypes) {
  const Referrals = sequelize.define('referrals', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    checkedin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
    Referrals.associate = (models) => {
      Referrals.belongsTo(models.referrers);
    }
  return Referrals;
}