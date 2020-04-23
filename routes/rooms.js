const router = require('express').Router();

const auth = require('../middlewares/auth');
const roomsController = require('../controllers/roomsController');

router.get('/', roomsController.index);
//router.get('/', auth, roomsController.index);

module.exports = router;
