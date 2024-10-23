import express from 'express'
import { getUserDetails, loginController, registerController, updateUserDetails } from '../controllers/authController.js';


const router = express.Router();

router.post('/register',registerController)
router.post('/login',loginController)
router.put('/account/update-name',updateUserDetails)
router.get('/account/:email',getUserDetails)

export default router