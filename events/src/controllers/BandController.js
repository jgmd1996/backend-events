const BandService = require('../service/bandService');
let bandService = new BandService();

exports.create = async function (req, res, next) {

  try {

     const bandSaved = await bandService.create(req.body);
    res.status(bandSaved.statusCode).json(bandSaved)

  } catch (e) {
      return next(e);
  }
};

exports.update = async function (req, res, next) {
   
  try {

      let band = {
          ...req.body
      };
      

      const bandSaved = await bandService.update(band);
      return res.status(bandSaved.statusCode).json(bandSaved);

  } catch (e) {
      return next(e);
  }
};

exports.findById = async function (req, res, next) {

  try {

      const { bandId } = req.params;
      const band = await bandService.findById(bandId);
      if (!band) {
          return res.status(404).send({message: 'Banda não encontrado.'});
      }

      return res.status(200).json({band: band});

  } catch (e) {
      return next(e);
  }
};

exports.findByAll = async function (req, res, next) {
    
    
  try {
     
      const band = await bandService.findAll();
      
      if (!band || band.length === 0) {
          return res.status(404).send({message: 'Bandas não encontradas.'});
      }

      return res.status(200).json({bands: band});

  } catch (e) {
      return next(e);   
  }
};

exports.deleteBand = async function (req, res, next) {

    try {
        const { bandId } = req.params;
        const band = await bandService.findByIdAndDelete(bandId);
  
        if (!band) {
            return res.status(404).send({message: 'Banda não encontrado.'});
        }
  
        return res.status(200).send({message: 'Banda deletado.'});
  
    } catch (e) {
        return next(e);
    }
  };
