const express = require("express")
const{
    createUsers,
    createUser,
    getAllUsers,
    getUser
} = require('../controllers/challenge-controlers')

const router = express.Router()



router.post("/", createUsers);
router.post("/:id", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUser)


module.exports = router;