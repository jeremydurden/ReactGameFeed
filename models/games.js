const mongoose = require("mongoose");

const wishListSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId },
});

const beatenListSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId },
});

const ownedListSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId },
});

const gameSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  wishList: [wishListSchema],
  beatenList: [beatenListSchema],
  ownedList: [ownedListSchema],
});

module.exports = mongoose.model("Game", gameSchema);
