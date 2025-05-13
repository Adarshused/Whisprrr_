import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import Profile from "../Settings/Profile.jsx";
import Settings from "../Settings/Settings.jsx";
import { ChangeStatus } from "../../Features/DashboardSlice";

function DashboardHeader(props){
  // console.log(props.title)
  const Dispatch=useDispatch();
  const [heading,setheading]=useState('');
  const [notification,setnotification]=useState(true);
  const [clickednotification,setclickednotification]=useState(false);
  const [profilelogo,setprofilelogo]=useState("AM");
  
  useEffect(()=>{
    setheading(props.title);
  },[props])

const changeFeature=(currFeature)=>{
Dispatch(ChangeStatus(currFeature));
}
  return (
    <>
    <div className="fixed top-0 left-0 w-310 ml-67 flex py-4 border-b border-gray-300 gap-x-8"style={{fontFamily:'Times New Roman, Serif'}}>
      <div className="w-50">
      <h1 className="font-extrabold text-2xl px-12 " >{heading}</h1>
      </div>
    
     <div className="flex ml-160 gap-x-5">
     <div className="flex cursor-pointer py-2 relative px-2 justify-center w-50  h-10 rounded-md bg-[#5235E8] hover:bg-[#7C64ED] ">
              <h3 className="font-extrabold flex  text-white">Connect with Faculties</h3>  
     </div>
     {/* <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke={notification?"#5235E8":"black"} 
   stroke-linecap="round"
   stroke-linejoin="round" 
   stroke-width="1.5"
    d="M12 5.365 a 5.338 5.338 0 0 1 5.133 5.368 v1.8 c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292 H5.538 C5 18 5 17.301 5 16.708 c0-1.193 1.867-1.789 1.867-4.175 v-1.8 A5.338 5.338 0 0 1 12 5.365 Z M 8.733 20 c .094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112 "/>
</svg> */}
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 25 25"
  width="24"
  height="24"
  className="w-8 h-8 cursor-pointer"
  onClick={()=>setclickednotification(prev=>!prev)}
>
  <path
    d="M12 5.365
       a5.338 5.338 0 0 1 5.133 5.368
    
       v1.8
       c0 2.386 1.867 2.982 1.867 4.175
         0 .593 0 1.292-.538 1.292
       H5.538
       C5 18 5 17.301 5 16.708
       c0-1.193 1.867-1.789 1.867-4.175
       v-1.8
       A5.338 5.338 0 0 1 12 5.365
       
       M10 21
     
       a3.48 3.48 0 0 0 4.646 0
       "
   stroke-linecap="round"
    stroke={clickednotification?"#5235E8":"black"}
    fill="none"
    
  />
    {/* <circle cx="8.733" cy="20" r="" fill="red"/> */}
  { notification && (
     <circle cx="16"cy="6"r="2"fill="red"  />
  )

  }
</svg>
<NavLink to="/settingpage">
  <button className="cursor-pointer rounded-full w-10 h-10 font-extrabold text-white bg-[#DEDAFB]" onClick={(e)=>{changeFeature("Setting")}} >{profilelogo}</button>

</NavLink>


     </div>
    </div>
    </>
  )
}

export default DashboardHeader