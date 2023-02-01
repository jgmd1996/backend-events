const validate = require('validate.js');
const Genre = require('../models/Genre');
const BaseService = require("./baseService");

const schema = {

    name: {
        presence: { allowEmpty: false, message: '^Nome é obrigatório. ' },
        length: {
            maximum: 200,
            tooLong: '^Nome deve conter no máximo 200 caracteres. '
        }
    },

};

module.exports = class GenreService extends BaseService {

    constructor() {
        super(schema, Genre);
    };

    async validation(genre) {
        return super.validation(genre);
    };

    async create(genre) {
        const session = await super.getSession();

        try {
            let errors = await this.validation(genre);

            if (errors) {
                const errorMessage = await this.buildErrorMessage(errors);
                return { error: errors, statusCode: 400, message: errorMessage };
            }
            const genreDb = new Genre({ ...genre });
            await session.startTransaction();
            let genreSaved = await super.save(genreDb, session);
            await session.commitTransaction();

            return { genre: genreSaved, statusCode: 201 };

        } catch (e) {

            if (session.inTransaction()) {
                await session.abortTransaction();
            }

            throw e;
        } finally {
            session.endSession();
        }
    };

    async update(genre) {
        const session = await super.getSession();

        try {
            let errors = await this.validation(genre);

            const genreDb = await super.findById(genre.id);

            if (!genreDb) {
                return { error: errors, statusCode: 400, message: 'Genero não encontrado' };
            }

            let genreSaved = await super.save(genre, session);

            return { genre: genreSaved, statusCode: 200 };
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
        return await super.findAll();
    }
}
