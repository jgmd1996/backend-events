import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: { type: String, required: true },
        Address: { type: String, required: true },
        PresentationLocation: { type: String, required: true },
        targetAudience: { type: String, required: true },
        cache:  {type: Number, required: true},
        BandInstruments: { type: String, required: true },
        ExpectedAudience: {type: Number, required: true},
        genre: [{ type: mongoose.Schema.Types.ObjectId, ref: 'genre' }],
        band: [{ type: mongoose.Schema.Types.ObjectId, ref: 'band' }],
  }
);
const event = mongoose.model('event', eventSchema);

export default event;