const express = require("express");



const router = express.Router()

router.post("/", createUser);
router.post("/:id", loginUser);
router.get("/", getAllUsers);
router.get("/:id", getUser)