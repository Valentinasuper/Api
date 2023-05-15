module.exports = (sequelize, DataTypes) => {
    const Genres = sequelize.define('Genres', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    Genres.associate = (models) => {
      models.Genres.belongsToMany(models.Movies, {
        through: 'MovieGenres',
        foreignKey: 'genreId',
        otherKey: 'movieId'
      });
    };
  
    return Genres;
  };
  