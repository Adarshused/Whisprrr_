import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ChangeSettingStatus, ChangeStatus } from "../../Features/DashboardSlice";
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
     return (
        <>
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
            </div>
           
            
        </div>
        </>
     )
}

export default Settingleftpage