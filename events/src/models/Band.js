const mongoose = require('mongoose');

const bandSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true, maxLength: 200, minLength: 2},
        numberMembers: {type: Number, required: true, max: 200, min: 2},
        contact: {type: Number, required: true},
        email: {type: String, required: true},
        logo: {type: String, required: true},
        bandPhoto: {type: String, required: true},
        targetAudience: {type: String, required: true},
        cache: {type: Number, required: true},
        genre: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre',required: true }],
        event: [{ type: mongoose.Schema.Types.ObjectId, ref: 'event' }],
    },
    {
        versionKey: false
    }
)
module.exports= mongoose.model("band", bandSchema);