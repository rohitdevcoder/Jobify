import express from 'express'
import { ChangeJobApplicationsStatus, changeJobVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyControllers.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middlewares/AuthMiddleware.js'

const router = express.Router()

//Register A Company
router.post('/register',upload.single('image'), registerCompany)

//company Login
router.post('/login',loginCompany)

//Get Company Data
router.get('/company',protectCompany,getCompanyData)

//post a job
router.post('/post-job',protectCompany,postJob)

//Get applicants Data of Company
router.get('/applicants',protectCompany,getCompanyJobApplicants)

//Get Company Job List
router.get('/list-jobs',protectCompany,getCompanyPostedJobs)

//Change Job Application Status
router.post('/change-status',protectCompany,ChangeJobApplicationsStatus)

//Change Applications visibility
router.post('/change-visibility',protectCompany,changeJobVisibility)

export default router
