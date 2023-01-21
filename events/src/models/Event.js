// import mongoose from "mongoose";

// const eventSchema = new mongoose.Schema(
//     {
//         id: { type: String },
//         name: { type: String, required: true },
//         address: { type: String, required: true },
//         presentationLocation: { type: String, required: true },
//         targetAudience: { type: String, required: true },
//         cache:  {type: Number, required: true},
//         bandInstruments: { type: String, required: true },
//         expectedAudience: {type: Number, required: true},
//         genre: [{ type: mongoose.Schema.Types.ObjectId, ref: 'genre' }],
//         band: [{ type: mongoose.Schema.Types.ObjectId, ref: 'band' }],
//   }
// );
// const event = mongoose.model('event', eventSchema);

// export default event;