const express = require("express");

const {
    registerUser,
    getAllUsers,
    loginUser,
    deleteUser,
} = require("../controller/user.controller");

const router = express.Router();



router.post("/register", registerUser);


router.get("/register", getAllUsers);


router.post("/login", loginUser);


router.delete("/register/:id", deleteUser);


module.exports = router;