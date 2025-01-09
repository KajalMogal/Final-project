const mongoose = require('mongoose');

const loyaltyTransactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['issued', 'redeemed'],
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const LoyaltyTransaction = mongoose.model('LoyaltyTransaction', loyaltyTransactionSchema);

module.exports = { LoyaltyTransaction };
