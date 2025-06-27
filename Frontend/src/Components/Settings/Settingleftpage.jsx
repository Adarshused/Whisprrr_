import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ChangeLogIn, ChangeSettingStatus, ChangeStatus } from "../../Features/DashboardSlice";
import { useSelector } from "react-redux";
import Profile from "./Profile";
function Settingleftpage(){

    const Dispatch=useDispatch();

    const [profile,setprofile] = useState(true);
    const [notification,setnotification]=useState(false);
    const [privacy,setprivacy]=useState(false);
    const [security,setsecurity]=useState(false);
    const [preference,setpreference]=useState(false);
    const [password,setpassword]=useState(false);
    const [islogout,setislogout]=useState(false);
    const curractive= useSelector((state)=>state.CurrActive)
    
    const changeFeature=(currFeature)=>{
      Dispatch(ChangeSettingStatus(currFeature));
      if(currFeature ==="Profile"){
        setprofile(true);
        setnotification(false);
        setprivacy(false);
        setpreference(false);
        setpassword(false);
        setsecurity(false);
      }
      else if(currFeature === "Notifications"){
        setprofile(false);
        setnotification(true);
        setprivacy(false);
        setpreference(false);
        setpassword(false);
        setsecurity(false);
      }
      else if(currFeature === "Privacy"){
        setprofile(false);
        setnotification(false);
        setprivacy(true);
        setpreference(false);
        setpassword(false);
        setsecurity(false);
      }
      else if(currFeature === "Password"){
       setprofile(false);
        setnotification(false);
        setprivacy(false);
        setpreference(false);
        setpassword(true);
        setsecurity(false);
      }
      else if(currFeature === "Preference"){
       setprofile(false);
        setnotification(false);
        setprivacy(false);
        setpreference(true);
        setpassword(false);
        setsecurity(false);
      }
      else if(currFeature === "Security"){
        setprofile(false);
        setnotification(false);
        setprivacy(false);
        setpreference(false);
        setpassword(false);
        setsecurity(true);
      }
    }
    const GoBack=()=>{
      Dispatch(ChangeStatus("Dashboard"));
    }
    const Logout = async () => {
      try{
         const res = await fetch ('http://localhost:8000/api/v1/users/logout',{
        method: 'POST',
         headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include'
      })
      if(res.ok) {
         Dispatch(ChangeLogIn(false));
         console.log("User logged out successfully")
      }
      else {
         const err= await res.json();
         throw new Error(err.message || "Login failed");
      }
      }
      catch (err) {
        console.log(err.message)
      }
     
    }
     return (
        <>
        {islogout && (
          <div className="fixed top-60 left-1/2 transform -translate-x-1/2 bg-white rounded-lg  bg-opacity-50 flex flex-col items-center justify-center z-50 w-120 h-90 border border-gray-300 shadow-[0_0_8px_rgba(82,53,232,0.5)]">
                          <svg
                            className="w-30 h-30 mb-4"
                            viewBox="0 0 60 60"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <linearGradient
                                id="fade-purple"
                                gradientUnits="userSpaceOnUse"
                                x1="0" y1="0"
                                x2="0" y2="250"
                              >
                                <stop offset="0%" stopColor="#11CF8B" stopOpacity="1" />
                                <stop offset="100%" stopColor="#30EEA9" stopOpacity="1" />
                              </linearGradient>
                              <linearGradient
                                id="fade-stroke"
                                gradientUnits="userSpaceOnUse"
                                x1="0" y1="0"
                                x2="0" y2="250"
                              >
                                <stop offset="0%" stopColor="#7BF4C8" stopOpacity="1" />
                                <stop offset="100%" stopColor="#56F1B9" stopOpacity="1" />
                              </linearGradient>
                            </defs>
                            
                            <circle
                              cx={32}
                              cy={30}
                              r={24}
                              fill="url(#fade-purple)"
                              stroke="url(#fade-stroke)"
                              strokeWidth="1.5"
                            />
                            <g transform="scale(1) translate(20,18)">
                              <path
                                stroke="white"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 11.917 9.724 16.5 19 7.5"
                              />
                            </g>
                          </svg>
                          <h1 className="text-lg font-bold " style={{fontFamily:'Times New Roman Serif'}}>Logout Successful</h1>
                           <NavLink to="/signin">
                           <button  className="flex mt-5 text-lg py-1 relative px-2 justify-center cursor-pointer w-20 h-10 text-white rounded-md bg-[#5235E8] hover:bg-[#7C64ED]" type="submit" style={{fontFamily:'Times New Roman Serif'}}  onClick={Logout}>
                              Ok
                            </button>
                            </NavLink>
                        </div>
                      )}
        <div className="fixed top-0 left-0 flex flex-col h-screen border-r border-gray-300 w-1/6 ">
        <div className="flex mt-4 ">
          <svg className="cursor-pointer" onClick={(e)=>GoBack()} width="50" height="50" viewBox="0 0 50 50">
          <polyline points="35 12 30 16 35 20" stroke="gray" fill="none" strokeWidth="2"></polyline>

          </svg>
 <h1 className=" font-extrabold text-2xl" style={{fontFamily:'Times New Roman,Serif'}}>Settings</h1>
        </div>
       
        <div className="flex mt-8 ml-5 ">
<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="gray" stroke-width="1" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>
  <h1 className="mt-1 font-extrabold text-gray-400 text-sm" style={{fontFamily:'Times New Roman, Serif'}}>ACCOUNT</h1>
        </div>
            <div className="flex flex-col mt-3 ml-6 gap-y-1">
                <NavLink to="/profilepage">
            <div className="flex cursor-pointer" onClick={()=>{
                   changeFeature("Profile");
            }}>
              <div className={`flex px-3 py-2 caret-purple-400   gap-x-2 w-50 rounded-lg ${profile ? "bg-[#F7F6FE] border border-purple-100" : ""}`}>
             <h2 className={profile?"font-extrabold font-['Times_New_Roman,_serif']":"text-black"} >Profile</h2>
              </div>
            </div>
            </NavLink>
            <NavLink>
            <div className="flex cursor-pointer" onClick={()=>{
              changeFeature("Notifications");
            }
        }>
              <div className={`flex px-3 py-2 caret-purple-400   gap-x-2 w-50 rounded-lg ${notification ? "bg-[#F7F6FE] border border-purple-100" : ""}`}>
             
      <h2 className={notification?"font-extrabold font-['Times_New_Roman,_serif']":"text-black"} >Notifications</h2>
              </div>
            </div>
            </NavLink>
            <NavLink>
            <div className="flex cursor-pointer" onClick={()=>{
              changeFeature("Security")
                
            }}>
              <div className={`flex px-3 py-2 caret-purple-400   gap-x-2 w-50 rounded-lg ${security? "bg-[#F7F6FE] border border-purple-100" : ""}`}>
              
      <h2 className={security?"font-extrabold font-['Times_New_Roman,_serif']":"text-black"} >Security</h2>
              </div>
            </div>
            </NavLink>
            <NavLink>
            <div className="flex cursor-pointer" onClick={()=>{
              changeFeature("Privacy")
               
            }}>
              <div className={`flex px-3 py-2 caret-purple-400   gap-x-2 w-50 rounded-lg ${privacy ? "bg-[#F7F6FE] border border-purple-100" : ""}`}>
             
    
      <h2 className={privacy?"font-extrabold font-['Times_New_Roman,_serif']":"text-black"} >Privacy</h2>
              </div>
            </div>
            </NavLink>
           
            <div className="flex cursor-pointer" onClick={()=>{
              changeFeature("Preference")
               
            }}>
              <div className={`flex px-3 py-2 caret-purple-400   gap-x-2 w-50 rounded-lg ${preference ? "bg-[#F7F6FE] border border-purple-100" : ""}`}>
 <h2 className={preference?"font-extrabold font-['Times_New_Roman,_serif']":"text-black"} >Preference</h2>
              </div>
            </div>
            <div className="flex flex-col   gap-y-5" >
            <div className="flex cursor-pointer" onClick={()=>{
              changeFeature("Password")
                
            }}>
              <div className={`flex px-3 py-2 caret-purple-400   gap-x-2 w-50 rounded-lg ${password ? "bg-[#F7F6FE] border border-purple-100" : ""}`}>
             
      <h2 className={password?"font-extrabold font-['Times_New_Roman,_serif']":"text-black"} >Password</h2>
              </div>
            </div>
            </div>
            <div className=" mt-70 flex flex-col   gap-y-5" >
            <div className="flex cursor-pointer" onClick={()=>{
              setislogout(true)}}>
              <div className={`flex px-3 py-2 caret-purple-400   gap-x-2 w-50 rounded-lg `}>
               
      <h2 className={"font-extrabold font-['Times_New_Roman,_serif'] text-[#FB3766] hover:text-[#C92C52]"} >Log Out</h2>
              </div>
            </div>
            </div>
            </div>
           
            
        </div>
        </>
     )
}

export default Settingleftpage