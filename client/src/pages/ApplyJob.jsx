import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets'
import kconvert from 'k-convert'
import moment from 'moment'
import Jobcard from '../components/Jobcard'
import Footer from '../components/Footer'

function ApplyJob() {
  const {id} = useParams()
  const [jobData,setJobData] = useState(null)
  const {jobs}= useContext(AppContext)
  //function to Fetch Job Data
  const fetchJob = async ()=>{
 const data = jobs.filter(job=>job._id === id)
if(data.length !== 0){
setJobData(data[0])
console.log(data[0])
}
  }

  useEffect(()=>{
    if(jobs.length >0){
      fetchJob()
    }
 
  },[id,jobs])
    
  return jobData ?(
    <>
<Navbar/>
<div className='min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto'>
  <div  className='bg-white text-black rounded-lg w-full '>
    <div className='flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-400 rounded-xl'>
      <div className='flex flex-col md:flex-row items-center '>
        <img className='h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border border-gray-300' src={jobData.companyId.image} alt="" />
        <div className='text-center md:text-left text-neutral-700'>
          <h1 className='text-2xl sm:text-4xl font-medium'>{jobData.title}</h1>
          <div className='flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2'>
            <span className='flex items-center gap-2'>
              <img src={assets.suitcase_icon} alt="" />
              {jobData.companyId.name}
            </span>
            <span className='flex items-center gap-2'>
              <img src={assets.location_icon} alt="" />
              {jobData.location}
            </span>
            <span className='flex items-center gap-2'>
              <img src={assets.person_icon} alt="" />
              {jobData.level}
            </span>
            <span className='flex items-center gap-2'>
              <img src={assets.money_icon} alt="" />
              CTC: ₹{kconvert.convertTo(jobData.salary)}
            </span>

          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center'>
        <button className='bg-blue-600 p-2.5 px-10 text-white rounded cursor-pointer'>Apply Now</button>
        <p className='mt-1 text-gray-600 text-center'>Posted {moment(jobData.date).fromNow()}</p>
      </div>
    </div>
    <div className='flex flex-col lg:flex-row justify-between items-start '>
      <div className='w-full lg:w-2/3'>
        <h2 className='font-bold text-2xl mb-4'>Job description</h2>
        <div className='rich-text' dangerouslySetInnerHTML={{__html:jobData.description}}></div>
         <button className='bg-blue-600 p-2.5 px-10 text-white rounded cursor-pointer mt-10' >Apply Now</button>
      </div>
        {/* Right Section of Apply Job page */}
      <div className='w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5'>
<h2>More Jobs From {jobData.companyId.name}</h2>
{
  jobs.filter(job=>job._id !== jobData._id && job.companyId._id===jobData.companyId._id).filter(
    job=>true
  ).slice(0,3).map(
    (job,index)=>(
<Jobcard key={index} job={job}/>
    )
  )
}
      </div>
    </div>
  </div>
</div>
<Footer/>
    </>
  ):(
 <Loading/>
  )
}

export default ApplyJob