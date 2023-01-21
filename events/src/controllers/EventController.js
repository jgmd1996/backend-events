
// import event from "../models/Event.js";

// class EventController {
  
//   static eventList= (req, res) => {
//     event.find()
//     .populate('genre')
//     .populate('band')
//     .exec((err, event) => {
//       res.status(200).json(event)
//   })
//   }
  
//   static listEventById = (req, res) => {
//     const id = req.params.id;

//     event.findById(id)
//     .populate('genre', 'name')
//     .populate('event', 'name')
//     .exec((err, event) => {
//       if(err) {
//         res.status(400).send({message: `${err.message} - Id do evento não localizado.`})
//       } else {
//         res.status(200).send(event);
//       }
//     })
//   }
  
//   static registerEvent = (req, res) => {
//     let events = new event(req.body);

//     events.save((err) => {

//       if(err) {
//         res.status(500).send({message: `${err.message} - falha ao cadastrar a evento.`})
//       } else {
//         res.status(201).send(events.toJSON())
//       }
//     })
//   }
  
//   static updateEvent = (req, res) => {
//     const id = req.params.id;

//     event.findByIdAndUpdate(id, {$set: req.body}, (err) => {
//       if(!err) {
//         res.status(200).send({message: 'Evento atualizado com sucesso'})
//       } else {
//         res.status(500).send({message: err.message})
//       }
//     })
//   }
  
//   static deleteEvent = (req, res) => {
//     const id = req.params.id;

//     event.findByIdAndDelete(id, (err) => {
//       if(!err){
//         res.status(200).send({message: 'Evento removida com sucesso'})
//       } else {
//         res.status(500).send({message: err.message})
//       }
//     })
//   }

// }

// export default EventController