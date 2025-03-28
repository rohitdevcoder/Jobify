import React, { useContext } from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ApplyJob from './pages/ApplyJob.jsx'
import Applications from './pages/Applications.jsx'
import RecruterLogin from './components/RecruterLogin.jsx'
import { AppContext } from './context/AppContext'
import DashBoard from './pages/DashBoard.jsx'
import AddJobs from './pages/AddJobs.jsx'
import ManageJobs from './pages/ManageJobs.jsx'
import ViewApplications from './pages/ViewApplications.jsx'
import 'quill/dist/quill.snow.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const {showRecruterLogin,companyToken} = useContext(AppContext)
  return (
    <>
   {showRecruterLogin && <RecruterLogin/>} 
   <ToastContainer/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/apply-job/:id" element={<ApplyJob/>} />
  <Route path="/applications" element={<Applications/>} />
  <Route path="/dashboard" element={<DashBoard/>} >
  {companyToken ? <>
    <Route path='add-job' element={<AddJobs/>}/>
  <Route path='manage-job' element={<ManageJobs/>}/>
  <Route path='view-applications' element={<ViewApplications/>}/>
  </>:null}
  
  </Route>

</Routes>
    </>
  )
}

export default App