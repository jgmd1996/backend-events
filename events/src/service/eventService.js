const validate = require('validate.js');
const Event = require('../models/Event');
const BaseService = require("./baseService");

const schema = {

    name: {
        presence: { allowEmpty: false, message: '^Nome é obrigatório. ' },
        length: {
            maximum: 200,
            tooLong: '^Nome deve conter no máximo 200 caracteres. '
        }
    },
    address: {
        presence: { allowEmpty: false, message: '^Endereço é obrigatório. ' },
        length: {
            maximum: 200,
            tooLong: '^Endereço deve conter no máximo 200 caracteres. '
        }
    },
    presentationLocation: {
        presence: { allowEmpty: false, message: '^Local de apresentação é obrigatório. ' },
        length: {
            maximum: 200,
            tooLong: '^Local de apresentação deve conter no máximo 200 caracteres. '
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
    },
    bandInstruments: {
        presence: { allowEmpty: false, message: '^Intrumentos da banda é obrigatório. ' },
        length: {
            maximum: 200,
            tooLong: '^Intrumentos da banda deve conter no máximo 200 caracteres. '
        }
    },
    expectedAudience: {
        presence: { allowEmpty: false, message: '^Publico esperado é obrigatório. ' },
        length: {
            maximum: 200,
            tooLong: '^Publico esperado deve conter no máximo 200 caracteres. '
        }
    }
    

};

module.exports = class EventService extends BaseService {

    constructor() {
        super(schema, Event);
    };

    async validation(event) {//
        return super.validation(event);
    };

    async create(event) {
        const session = await super.getSession();

        try {
            let errors = await this.validation(event);

            if (errors) {
                const errorMessage = await this.buildErrorMessage(errors);
                return { error: errors, statusCode: 400, message: errorMessage };
            }
            const eventDb = new Event({ ...event });
            await session.startTransaction();
            let eventSaved = await super.save(eventDb, session);
            await session.commitTransaction();

            return { event: eventSaved, statusCode: 201 };

        } catch (e) {

            if (session.inTransaction()) {
                await session.abortTransaction();
            }

            throw e;
        } finally {
            session.endSession();
        }
    };

    async update(event) {
        const session = await super.getSession();
        
        try {
            let errors = await this.validation(event);

            const eventDb = await super.findById(event.id);

            if (!eventDb) {
                return { error: errors, statusCode: 400, message: 'Evento não encontrado' };
            }

            let eventSaved = await super.save(event, session);

            return { event: eventSaved, statusCode: 200 };
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
            },
            {
                path: 'band'  
            }
        ];

        return await super.findPopulate({}, pathsValues);
    }
}
