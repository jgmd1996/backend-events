const EventService = require('../service/eventService');
let eventService = new EventService();

exports.create = async function (req, res, next) {

  try {
     const eventSaved = await eventService.create(req.body);
    res.status(eventSaved.statusCode).json(eventSaved)
  } catch (e) {
      return next(e);
  }
};

exports.update = async function (req, res, next) {
   
  try {
      let event = {
          ...req.body
      };
      
      const eventSaved = await eventService.update(event);
      return res.status(eventSaved.statusCode).json(eventSaved);
  } catch (e) {
      return next(e);
  }
};

exports.findById = async function (req, res, next) {

  try {
      const { eventId } = req.params;
      const event = await eventService.findById(eventId);
      if (!event) {
          return res.status(404).send({message: 'Evento não encontrado.'});
      }
      return res.status(200).json({event: event});
  } catch (e) {
      return next(e);
  }
};

exports.findByAll = async function (req, res, next) {
     
  try {
      const event = await eventService.findAll();
      if (!event || event.length === 0) {
          return res.status(404).send({message: 'Evento não encontradas.'});
      }
      return res.status(200).json({events: event});
  } catch (e) {
      return next(e);   
  }
};

exports.deleteEvent = async function (req, res, next) {

    try {
        const { eventId } = req.params;
        const event = await eventService.findByIdAndDelete(eventId);
        if (!event) {
            return res.status(404).send({message: 'Evento não encontrado.'});
        }
        return res.status(200).send({message: 'Evento deletado.'});
    } catch (e) {
        return next(e);
    }
  };
