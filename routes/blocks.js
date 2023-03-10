var express = require('express');
var router = express.Router();
var blocksCtrl = require('../controllers/blocks');
const ensureLoggedIn = require('../config/ensureLoggedIn')


router.get('/', blocksCtrl.index);
router.get('/new', ensureLoggedIn, blocksCtrl.new);
router.get('/:id', blocksCtrl.show);
router.post('/', ensureLoggedIn, blocksCtrl.create);
router.get('/:id/edit', ensureLoggedIn, blocksCtrl.edit)
router.put('/:id', ensureLoggedIn, blocksCtrl.update);

module.exports = router;
