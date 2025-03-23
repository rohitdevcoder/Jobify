import { createContext,useEffect,useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext()

export const AppContextProvider = (props)=>{
    const [searchFilter,setSearchFilter] = useState({
        title:'',
        location:''
    })

    const [isSearched,setIsSearched] = useState(false)
    const [jobs,setJobs] = useState([])
 const [showRecruterLogin,setShowRecruterLogin] = useState(false)

//function to Fetch Job Data
const fetchJobs = async ()=>{
setJobs(jobsData)
}

useEffect(()=>{
fetchJobs()
},[])

    const value = {
        searchFilter,
        setSearchFilter,
        isSearched,
        setIsSearched,
        jobs,
        setJobs,
        showRecruterLogin,
        setShowRecruterLogin
    }

    return (
        <AppContext.Provider value={value}>
{props.children}
        </AppContext.Provider>
    )
}