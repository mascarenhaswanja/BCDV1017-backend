const router = require('express').Router();

const adminController = require('../controllers/adminController');
const adminMiddleware = require('../middlewares/adminAuth');


router.post('/', adminController.newLogin);

router.get('/', adminMiddleware.checkLogin, adminController.index);

router.get('/partialHistory', adminMiddleware.checkLogin, adminController.partialHistory);

router.get('/socketEvents', adminMiddleware.checkLogin, adminController.socketEvents);

/*
//router.get('/admin', adminMiddleware.checkLogin, adminController.index);

router.post('/admin', adminController.newLogin);

router.get('/admin',  adminController.index);

router.get('/partialHistory',  adminController.partialHistory);

router.get('/socketEvents',  adminController.socketEvents); */

module.exports = router;
