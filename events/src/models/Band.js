import mongoose from "mongoose";

const bandSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        MusicalGenre: {type: String, required: true},
        numberMembers: {type: Number, required: true},
        contact: {type: Number, required: true},
        email: {type: String, required: true},
        logo: {type: String, required: true},
        BandPhoto: {type: String, required: true},
        targetAudience: {type: String, required: true},
        cache: {type: Number, required: true},
        genre: [{ type: mongoose.Schema.Types.ObjectId, ref: 'genre' }],
    },
    {
        versionKey: false
    }
)

const band = mongoose.model("band", bandSchema)

export default band;