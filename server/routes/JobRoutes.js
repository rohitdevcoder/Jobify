import express from 'express'
import { getJobById, getJobs } from '../controllers/JobControllers.js'

const router = express.Router()

//Route To get All Jobs Data
router.get('/',getJobs)

//Routes To get Single Job By id
router.get('/:id',getJobById)

export default router