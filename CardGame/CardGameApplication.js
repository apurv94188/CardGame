console.log('CardGameApplication');
const express = require('express');
const gameApplication = express();

const modPoker = require('./Poker/PokerApp.js');
gameApplication.use('/poker', modPoker);

module.exports = gameApplication;
