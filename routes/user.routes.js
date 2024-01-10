const express = require('express');
const router = express.Router();
const {
  create,
  fetch,
  update,
  remove
} = require("../controller/user.controller")

router.post('/', create);
router.get('/', fetch);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;
