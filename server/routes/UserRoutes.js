import express from 'express'
import { applyForJob, getUserData, getUserJobApplications, updateUserResume } from '../controllers/UserController.js'
import upload from '../config/multer.js'


const router = express.Router()

//get user data
router.get('/user',getUserData)

//Apply for a job
router.post('/apply',applyForJob)

//Get applied Jobs data
router.get('/applications',getUserJobApplications)

//Update User Profile (resume)
router.post('/update-resume',upload.single('resume'),updateUserResume)

export default router