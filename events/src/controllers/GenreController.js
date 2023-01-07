import genre from "../models/Genre.js";

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
    let genres = new genre(req.body);

    genres.save((err) => {

      if (err) {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar genero.` })
      } else {
        res.status(201).send(genres.toJSON())
      }
    })
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