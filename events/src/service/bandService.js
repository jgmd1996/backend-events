const validate = require('validate.js');
const Band = require('../models/Band');
const BaseService = require("./baseService");

const schema = {

    name: {
        presence: { allowEmpty: false, message: '^Nome é obrigatório. ' },
        length: {
            maximum: 200,
            tooLong: '^Nome deve conter no máximo 200 caracteres. '
        }
    },
    numberMembers: {
        presence: { allowEmpty: false, message: '^Numero de menbros é obrigatório. ' },
        length: {
            maximum: 200,
            tooLong: '^Numero de menbros deve conter no máximo 200 caracteres. '
        }
    },
    contact: {
        presence: { allowEmpty: false, message: '^Contato é obrigatório. ' },
        length: {
            maximum: 200,
            tooLong: '^Contato de menbros deve conter no máximo 200 caracteres. '
        }
    },
    email: {
        presence: { allowEmpty: false, message: '^email é obrigatório. ' },
        length: {
            maximum: 200,
            tooLong: '^email deve conter no máximo 200 caracteres. '
        }
    },
    logo: {
        presence: { allowEmpty: false, message: '^Logo é obrigatório. ' },
        length: {
            maximum: 200,
            tooLong: '^Logo deve conter no máximo 200 caracteres. '
        }
    },
    bandPhoto: {
        presence: { allowEmpty: false, message: '^Foto da banda é obrigatório. ' },
        length: {
            maximum: 200,
            tooLong: '^Foto deve conter no máximo 200 caracteres. '
        }
    },
    targetAudience: {
        presence: { allowEmpty: false, message: '^Publico alvo é obrigatório. ' },
        length: {
            maximum: 200,
            tooLong: '^Publico alvo deve conter no máximo 200 caracteres. '
        }
    },
    cache: {
        presence: { allowEmpty: false, message: '^Cache é obrigatório. ' },
        length: {
            maximum: 200,
            tooLong: '^Cache deve conter no máximo 200 caracteres. '
        }
    }

};

module.exports = class BandService extends BaseService {

    constructor() {
        super(schema, Band);
    };

    async validation(band) {//
        return super.validation(band);
    };

    async create(band) {
        const session = await super.getSession();

        try {
            let errors = await this.validation(band);//

            if (errors) {
                const errorMessage = await this.buildErrorMessage(errors);
                return { error: errors, statusCode: 400, message: errorMessage };
            }
            const bandDb = new Band({ ...band });
            await session.startTransaction();
            let bandSaved = await super.save(bandDb, session);
            await session.commitTransaction();

            return { band: bandSaved, statusCode: 201 };

        } catch (e) {

            if (session.inTransaction()) {
                await session.abortTransaction();
            }

            throw e;
        } finally {
            session.endSession();
        }
    };

    async update(band) {
        const session = await super.getSession();
        
        try {
            let errors = await this.validation(band);

            const bandDb = await super.findById(band.id);

            if (!bandDb) {
                return { error: errors, statusCode: 400, message: 'Banda não encontrado' };
            }

            let bandSaved = await super.save(band, session);

            return { band: bandSaved, statusCode: 200 };
        } catch (e) {

            if (session.inTransaction()) {
                await session.abortTransaction();
            }

            throw e;
        } finally {
            session.endSession();
        }
    };

    async findAll() {
        const pathsValues = [
            {
                path: 'genre'  
            } 
        ];

        return await super.findPopulate({}, pathsValues);
    }
}
