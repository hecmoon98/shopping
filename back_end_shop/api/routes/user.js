const express = require("express");
const routes = express.Router();
const userController = require('../controller/user')
const checkAuth = require('../middleware/check-auth')
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

routes.post("/signup", userController.user_signup_post);

routes.get('/', userController.user_get)

routes.get('/:userId', userController.user_get_one)

routes.post("/login", userController.user_login_post);

routes.put("/:userId",userController.user_put);

routes.delete("/:userId" ,userController.user_delete);

routes.patch("/:userId",userController.user_patch);

module.exports = routes;
