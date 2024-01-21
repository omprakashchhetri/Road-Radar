const mongoose = require("mongoose");

//Bus-Detail Schema
const DetailSchema = new mongoose.Schema({
  busno: {
    type: String,
    required: [true, "Bus number is required"],
    unique: true,
    match: [
      /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/,
      "Please provide a valid bus number (e.g., WB75AV5644)",
    ],
  },
  source: {
    type: String,
    required: [true, "Source is required"],
  },
  destination: {
    type: String,
    required: [true, "Destination is required"],
  },
  via: {
    type: String,
    required: [true, "Via is required"],
  },
  sta: {
    type: String,
    required: [true, "STA is required"],
  },
  // eta: {
  //   type: String,
  //   required: [true, "ETA is required"],
  // },
  stc: {
    type: String,
    required: [true, "STC is required"],
  },
  // etc: {
  //   type: String,
  //   required: [true, "ETC is required"],
  // },
});

const Details = mongoose.model("Details", DetailSchema);

module.exports = Details;
