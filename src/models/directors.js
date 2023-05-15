models.Directors.belongsToMany(models.Movies, {
    through: 'MovieDirectors',
    foreignKey: 'directorId',
    otherKey: 'movieId',
    as: 'movies'
  });
  const movie = await Movie.findByPk(movieId, {
    include: [
      {
        model: Director,
        as: 'directors',
        through: {
          attributes: []
        },
        include: [
          {
            model: Movie,
            as: 'movies',
            attributes: ['id', 'name']
          }
        ]
      }
    ]
  });
  