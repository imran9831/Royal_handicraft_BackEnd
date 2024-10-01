import express from "express"
import { isAdmin , requireSignIn} from "./../middlewares/authMiddleware.js"
import { categoryControlller, createCategoryController ,updateCategoryController, singleCategoryController,deleteCategoryCOntroller} from "../controllers/categoryController.js"

const router = express.Router()

//router
//Create category
router.post('/create-category', requireSignIn, isAdmin , createCategoryController)

//update category
router.put('/update-category/:id', requireSignIn, isAdmin , updateCategoryController)

//getAll category
router.get('/get-category', categoryControlller)

//getAll category
router.get('/single-category/:slug', singleCategoryController)

//Delete category
router.delete('/delete-category/:id', requireSignIn, isAdmin , deleteCategoryCOntroller)


export default router