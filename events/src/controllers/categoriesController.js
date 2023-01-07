import categories from "../models/Category.js";

class CategoryController {

  static listarCategories= (req, res) => {
    categories.find()
    .populate('produto')
    .exec((err, categories) => {
      res.status(200).json(categories)
  })
  }

  static listarCategoryPorId = (req, res) => {
    const id = req.params.id;

    categories.findById(id)
    .populate('produto', 'nome')
    .exec((err, categories) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do category não localizado.`})
      } else {
        res.status(200).send(categories);
      }
    })
  }

  static cadastrarCategory = (req, res) => {
    let category = new categories(req.body);

    category.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar category.`})
      } else {
        res.status(201).send(category.toJSON())
      }
    })
  }

  static atualizarCategory = (req, res) => {
    const id = req.params.id;

    categories.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Category atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirCategory = (req, res) => {
    const id = req.params.id;

    categories.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Category removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

}

export default CategoryController