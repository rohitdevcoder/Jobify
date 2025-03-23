import Company from "../models/company.js"
import bcrypt from  'bcrypt'

//Register a New Company
export const registerCompany = async (req,res)=>{
const {name,email,password}=req.body

const imageFile = req.file
if (!name || !email || !password || !imageFile) {
    return res.json({success:false,message:"Missing Details"})
}

try {
    const companyExist = await Company.findOne({email})
    if (companyExist) {
        return res.json({success:false,message:"Company Already Registered"})
    }
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,salt)

} catch (error) {
    
}
}

//Company Login
export const loginCompany = async (req,res)=>{

}

//Get Company Data
export const getCompanyData = async (req,res)=>{

}

//Post a New Job
export const postJob = async (req,res)=>{

}

//Get Company Job Applicants
export const getCompanyJobApplicants= async (req,res)=>{

}

//Get Company Posted Jobs
export const getCompanyPostedJobs = async (req,res)=>{

}

//Change Job Applicants Status
export  const ChangeJobApplicationsStatus = async (req,res)=>{

}

//Change Job Visibility
export const changeJobVisibility = async (req,res)=>{

}