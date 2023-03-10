const GenreService = require('../service/genreService');
let genreService = new GenreService();

exports.create = async function (req, res, next) {

  try {

     const genreSaved = await genreService.create(req.body);
    res.status(genreSaved.statusCode).json(genreSaved)

  } catch (e) {
      return next(e);
  }
};

exports.update = async function (req, res, next) {

  try {

      let genre = {
          ...req.body
      };

      const genreSaved = await genreService.update(genre);
      return res.status(genreSaved.statusCode).json(genreSaved);

  } catch (e) {
      return next(e);
  }
};

exports.findById = async function (req, res, next) {

  try {

      const { genreId } = req.params;
      const genre = await genreService.findById(genreId);

      if (!genre) {
          return res.status(404).send({message: 'Genero não encontrado.'});
      }

      return res.status(200).json({genre: genre});

  } catch (e) {
      return next(e);
  }
};

exports.findByAll = async function (req, res, next) {

  try {

      const genre = await genreService.findAll();

      if (!genre || genre.length === 0) {
          return res.status(404).send({message: 'Generos não encontrados.'});
      }

      return res.status(200).json({genres: genre});

  } catch (e) {
      return next(e);   
  }
};

exports.deleteGenre = async function (req, res, next) {

    try {
        const { genreId } = req.params;
        const genre = await genreService.findByIdAndDelete(genreId);
  
        if (!genre) {
            return res.status(404).send({message: 'Genero não encontrado.'});
        }
  
        return res.status(200).send({message: 'Genero deletado.'});
  
    } catch (e) {
        return next(e);
    }
  };
