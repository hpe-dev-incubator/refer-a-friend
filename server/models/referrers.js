module.exports = function(sequelize, DataTypes) {
  const Referrers = sequelize.define('referrers', {
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
    },
    prizeWinner : {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  Referrers.associate = (models) => {
    Referrers.hasMany(models.referrals, {
      as: 'referredBy'
    });
  };
  return Referrers;
};