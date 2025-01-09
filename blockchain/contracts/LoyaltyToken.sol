// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LoyaltyToken {
    mapping(address => uint256) public balances;

    event PointsIssued(address indexed customer, uint256 points);

    function issuePoints(address customer, uint256 points) public {
        balances[customer] += points;
        emit PointsIssued(customer, points);
    }

    function getBalance(address customer) public view returns (uint256) {
        return balances[customer];
    }
}
