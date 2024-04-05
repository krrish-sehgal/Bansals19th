const path = require('path');

const express = require('express');

const controllers = require('../controllers/admin');

const router = express.Router();

router.get('/',controllers.getIndex);
router.get('/eight-bansal-puzzle',controllers.getEightBansalPuzzle);
router.get('/bansal-rex',controllers.getBansalRex);
router.get('/birthday-card',controllers.getBirthdayCard);

module.exports= router;
