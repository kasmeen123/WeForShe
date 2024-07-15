import express from 'express'
import { userSignup, userLogin } from '../controller/user-controller.js'
// import { getProducts, getProductById} from '../controller/product-controller.js'

const router = express.Router()

router.post('/signup', userSignup)
router.post('/login', userLogin)

export default router