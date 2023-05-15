module.exports = (sequelize, DataTypes) => {
    const Actors = sequelize.define('Actors', {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nationality: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true
      },
      birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false
      }
    });
  
    Actors.associate = (models) => {
      models.Actors.belongsToMany(models.Movies, {
        through: 'MovieActors',
        foreignKey: 'actorId',
        otherKey: 'movieId'
      });
    };
  
    return Actors;
  };
  