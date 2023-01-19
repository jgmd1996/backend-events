import genre from "../models/Genre.js";
const GenreService = require('../service/genreService');

let genreService = new GenreService();


exports.create = async function (req, res, next) {

  try {

     const genreSaved = genreService.create(req.body);
    
    res.status(genreSaved.statusCode).send(genreSaved.genre.toJSON())

  } catch (e) {
      return next(e);
  }
};

exports.update = async function (req, res, next) {

  try {


      let art = {
          ...req.body
      };

      const authUser = req.user;
      const isAdmin = await artService.checkOnlyAdminPermissions(authUser);

      if (!isAdmin) {
          art.status = art.isMonetized ? constants.STATUS_ART.inEvaluation.code : constants.STATUS_ART.active.code;
      }

      const artSaved = await artService.update(art, imageContent, imageExtension);

      return res.status(artSaved.statusCode).json(artSaved);

  } catch (e) {
      return next(e);
  }
};


exports.findById = async function (req, res, next) {

  try {

      const { artId } = req.params;

      const art = await artService.findById(artId);

      if (!art) {
          return res.status(404).send({message: 'Arte não encontrada.'});
      }

      return res.status(200).json({art: art ? art.toClient() : art});

  } catch (e) {
      return next(e);
  }
};



/////////////////////////////////////////////////////////////////////////////////////////////



class GenreController {

  static genreList = (req, res) => {
    genre.find()
      .populate('event')
      .populate('band')
      .exec((err, genre) => {
        res.status(200).json(genre)
      })
  }

  static listGenreById = (req, res) => {
    const id = req.params.id;

    genre.findById(id)
      .populate('event', 'name')
      .populate('band', 'name')

      .exec((err, genre) => {
        if (err) {
          res.status(400).send({ message: `${err.message} - Id do genero não localizado.` })
        } else {
          res.status(200).send(genre);
        }
      })
  }

  static registerGender = (req, res) => {
    // const genreSaved = genreService.create(req.body);
    
    // res.status(genreSaved.statusCode).send(genreSaved.genre.toJSON())
  }

  static updateGender = (req, res) => {
    const id = req.params.id;

    genre.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Genero atualizado com sucesso' })
      } else {
        res.status(500).send({ message: err.message })
      }
    })
  }

  static deleteGender = (req, res) => {
    const id = req.params.id;

    genre.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Genero removido com sucesso' })
      } else {
        res.status(500).send({ message: err.message })
      }
    })
  }
}

export default GenreController;