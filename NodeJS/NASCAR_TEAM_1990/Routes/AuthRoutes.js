const expres = require('express');
const router = express.Router();
const AuthController = require('../Controllers/AuthController');

router.get('/getUserInfo', AuthController.getUserInfo);
router.post('/createUser', AuthController.createUser);

module.exports = router;