const express = require("express");
const router = express.Router(); 
const users = require("../controllers/users.controller.js");
const verifyToken = require("../middleware/auth.js");

router.post('/signup', users.signup);
router.post('/login', users.login);
router.get('/profile', users.getUserProfile);

router.post("/", users.create);
router.get("/", users.findAll);
router.get("/:id", users.findOne);
router.put("/:id", users.update);
router.delete("/:id", users.delete);
router.delete("/", users.deleteAll);

module.exports = router;
