const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Genre = require('./genre');
const Actor = require('./actor');
const Director = require('./director');

const Movie = sequelize.define('movie', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  synopsis: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  releaseYear: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

Movie.belongsToMany(Genre, { through: 'movie_genre' });
Movie.belongsToMany(Actor, { through: 'movie_actor' });
Movie.belongsToMany(Director, { through: 'movie_director' });


module.exports = Movie;

