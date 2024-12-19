import {getAllUser, createUser, test, deleteUser} from "../Controllers/userController"
import {getAllPost, createPost} from "../Controllers/postController"
import express from "express"

const router = express.Router()

router.get("/allUsers", getAllUser)
router.post("/createUser", createUser)
router.delete('/deleteUser/:id', deleteUser)
router.get("/test", test)

router.get("/allPosts", getAllPost)
router.post("/createPost", createPost)

module.exports = router ;