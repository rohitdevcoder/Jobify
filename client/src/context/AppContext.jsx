import { createContext, useEffect, useState } from "react";
// import { jobsData } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import {useAuth,useUser} from '@clerk/clerk-react'

export const AppContext = createContext();

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const { user } = useUser(null)
const {getToken} = useAuth()

export const AppContextProvider = (props) => {
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
  });

  const [isSearched, setIsSearched] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [showRecruterLogin, setShowRecruterLogin] = useState(false);
  const [companyToken, setCompanyToken] = useState(null);
  const [companyData, setCompanyData] = useState(null);
  const [userData,setUserData] = useState(null)
  const [userApplications,setUserApplications] = useState([])

  //function to Fetch Job Data
  const fetchJobs = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/jobs");
      if (data.success) {
        setJobs(data.jobs);
        console.log(data.jobs);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  //Function to fetch company data
  const fetchCompanyData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/company/company", {
        headers: { token: companyToken },
      });
      if (data.success) {
        setCompanyData(data.company);
        console.log(data);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

//Function To fetch User Data
const fetchUserData = async ()=>{
    try {
        const token = await getToken()
        const {data}= await axios.get(backendUrl+'/api/users/user',{
            headers:{Authorization:`Bearer ${token}`}
        })
        if (data.success) {
            setUserData(data.user)
        }else{
            toast.error(data.message)
        }
    } catch (error) {
        toast.error(error.message)
    }
}

// Function to fetch user's applied applications data
const fetchUserApplications = async ()=>{
    try {
        const token = await getToken()
        const {data} = await axios.get(backendUrl+'/api/users/applications',
            {headers:{Authorization:`Bearer ${token}`}}
        )
        if (data.success) {
            setUserApplications(data.applications)
        }else{
            toast.error(data.message)
        }

    } catch (error) {
        toast.error(error.message)
    }
}

  useEffect(() => {
    fetchJobs();

    const storedCompanyToken = localStorage.getItem("companyToken");
    if (storedCompanyToken) {
      setCompanyToken(storedCompanyToken);
    }
  }, []);

  useEffect(() => {
    if (companyToken) {
      fetchCompanyData();
    }
  }, [companyToken]);

  useEffect(()=>{

    if (user) {
       fetchUserData() 
       fetchCompanyData()
    }
  },[user])



  const value = {
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,
    jobs,
    setJobs,
    showRecruterLogin,
    setShowRecruterLogin,
    companyToken,
    setCompanyToken,
    companyData,
    setCompanyData,
    backendUrl,
    userData,setUserData,
    userApplications,setUserApplications,
    fetchUserData,
    fetchUserApplications,
    user
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
