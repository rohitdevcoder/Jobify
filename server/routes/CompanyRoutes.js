import express from 'express'
import { ChangeJobApplicationsStatus, changeJobVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyControllers.js'
import upload from '../config/multer.js'

const router = express.Router()

//Register A Company
router.post('/register',upload.single('image'), registerCompany)

//company Login
router.post('/login',loginCompany)

//Get Company Data
router.get('/company',getCompanyData)

//post a job
router.post('/post-job',postJob)

//Get applicants Data of Company
router.get('/applicants',getCompanyJobApplicants)

//Get Company Job List
router.get('/list-jobs',getCompanyPostedJobs)

//Change Job Application Status
router.post('/change-status',ChangeJobApplicationsStatus)

//Change Applications visibility
router.post('/change-visibility',changeJobVisibility)

export default router
