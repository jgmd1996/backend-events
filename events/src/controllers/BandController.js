
// import band from "../models/Band.js";

// class BandController {
  
//   static bandList= (req, res) => {
//     band.find()
//     .populate('genre')
//     .populate('event')
//     .exec((err, band) => {
//       res.status(200).json(band)
//   })
//   }
  
//   static listBandById = (req, res) => {
//     const id = req.params.id;

//     band.findById(id)
//     .populate('genre', 'name')
//     .populate('event', 'name')
//     .exec((err, band) => {
//       if(err) {
//         res.status(400).send({message: `${err.message} - Id da banda não localizado.`})
//       } else {
//         res.status(200).send(band);
//       }
//     })
//   }
  
//   static registerband = (req, res) => {
//     let bands = new band(req.body);

//     bands.save((err) => {

//       if(err) {
//         res.status(500).send({message: `${err.message} - falha ao cadastrar a banda.`})
//       } else {
//         res.status(201).send(bands.toJSON())
//       }
//     })
//   }
  
//   static updateBand = (req, res) => {
//     const id = req.params.id;

//     band.findByIdAndUpdate(id, {$set: req.body}, (err) => {
//       if(!err) {
//         res.status(200).send({message: 'Banda atualizado com sucesso'})
//       } else {
//         res.status(500).send({message: err.message})
//       }
//     })
//   }
  
//   static deleteband = (req, res) => {
//     const id = req.params.id;

//     band.findByIdAndDelete(id, (err) => {
//       if(!err){
//         res.status(200).send({message: 'Banda removida com sucesso'})
//       } else {
//         res.status(500).send({message: err.message})
//       }
//     })
//   }

// }

// export default BandController