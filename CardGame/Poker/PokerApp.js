console.log('PokerApp');
const modExpress = require('express');
const router = modExpress.Router();

router.get('/', (request, response, next) => {
  response.status(200).json({
    cards:{
        card1:{card:'A', suite:'Spade'},
        card2:{card:'K', suite:'Diamond'},
        card3:{card:'3', suite:'Heart'}
      },
    player:'Kunal',
    gameID:1
  });
});

router.post('/', (request, response, next) => {
  response.status(201).json({
      card:'A',
      suite:'Diamond',
      player:'Sagar',
      gameID:1
  });
});


router.get('/:gameId', (request, response, next) => {
  const gameID = request.params.gameId;
  if (gameID == 1) {
    response.status(200).json({
      cards:{
          card1:{card:'A', suite:'Spade'},
          card2:{card:'K', suite:'Diamond'},
          card3:{card:'3', suite:'Heart'}
        },
      player:'Kunal',
      gameID:gameID
    });
  }else {
    response.status(200).json({
      status: 'error',
      message:'Wrong Game ID'
    });
  }
});

module.exports = router;
