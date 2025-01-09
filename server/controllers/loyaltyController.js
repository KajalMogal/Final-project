const LoyaltyTransaction = require('../models/LoyaltyTransaction');
const axios = require('axios');

exports.issuePoints = async (req, res) => {
  const { amount, customerId } = req.body;
  const pointsIssued = calculatePoints(amount);

  try {
    // A function to issue points via blockchain
    const transactionHash = await issuePointsOnBlockchain(customerId, pointsIssued);

    const loyaltyTransaction = new LoyaltyTransaction({
      customerId,
      amount,
      pointsIssued,
      transactionHash,
    });

    await loyaltyTransaction.save();
    res.json({ points: pointsIssued });
  } catch (error) {
    console.error('Error issuing points', error);
    res.status(500).json({ error: 'Point issuance failed !!' });
  }
};
const calculatePoints = (amount) => {
  const pointsPerDollar = 1; //
  return amount * pointsPerDollar;
};
e
const issuePointsOnBlockchain = async (customerId, points) => {
  const response = await axios.post('http://localhost:8545/issue-points', {
    customerId,
    points,
  });

  return response.data.transactionHash;
};
