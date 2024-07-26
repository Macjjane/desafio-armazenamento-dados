const express = require("express")
const{
    createUsers,
    createuser,
    getAllUsers,
    getUser
} = require('../controllers/challenge-controlers')

const router = express.Router()

router.use(express.json())

router.post("/", createUsers);
router.post("/:id", createuser);
router.get("/", getAllUsers);
router.get("/:id", getUser)


module.exports = router;