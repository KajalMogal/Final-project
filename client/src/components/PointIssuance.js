import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PointIssuance = () => {
  const [transaction, setTransaction] = useState({ amount: '', customerId: '' });
  const [issuedPoints, setIssuedPoints] = useState(null);

  const handleTransaction = async () => {
    try {
      const response = await axios.post('/api/loyalty/issue-points', transaction);
      setIssuedPoints(response.data.points);
    } catch (error) {
      console.error('point issuance failed', error);
    }
  };

  return (
    <div>
      <h2>issue loyalty points</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleTransaction(); }}>
        <input
          type="text"
          placeholder="Customer ID"
          value={transaction.customerId}
          onChange={(e) => setTransaction({ ...transaction, customerId: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Transaction Amount"
          value={transaction.amount}
          onChange={(e) => setTransaction({ ...transaction, amount: e.target.value })}
          required
        />
        <button type="submit">issue points</button>
      </form>
      {issuedPoints !== null && <p>issued ppoints: {issuedPoints}</p>}
    </div>
  );
};

export default PointIssuance;
