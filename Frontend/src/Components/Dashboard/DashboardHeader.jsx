import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Profile from "../Settings/Profile.jsx";
import Settings from "../Settings/Settings.jsx";
import { ChangeStatus } from "../../Features/DashboardSlice.js";

function DashboardHeader(props){
  // console.log(props.title)
  const Dispatch=useDispatch();
  const [heading,setheading]=useState('');
  const [notification,setnotification]=useState(true);
  const [clickednotification,setclickednotification]=useState(false);
  const [open, setOpen] = useState(false);
  const [profilelogo,setprofilelogo]=useState("");
  const name=useSelector((state)=>state.CurrActive)
  useEffect(()=>{
    setheading(props.title);
  },[props])

  useEffect(()=> {
   
    // console.log(name.userData.img)
    setprofilelogo(name.userData.img)
  })
const changeFeature=(currFeature)=>{
Dispatch(ChangeStatus(currFeature));
}
  

  return (
    <>
    <div className="fixed top-0 left-0 md:w-310 bg-white/30 backdrop-blur-md md:ml-5 w-full md:ml-67 flex py-4 border-b border-gray-300 gap-x-4 md:gap-x-8"style={{fontFamily:'Times New Roman, Serif'}}>
       <div className="relative md:hidden px-3 py-3">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-6 h-6 flex flex-col justify-center items-center focus:outline-none"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top bar */}
          <line
            x1="5" y1="7" x2="19" y2="7"
            stroke="black" strokeWidth="2" strokeLinecap="round"
            className={`
              transform origin-center
              transition-transform duration-300
              ${open ? 'translate-y-[3.5px] rotate-45' : ''}
            `}
          />
          {/* Middle bar */}
          <line
            x1="5" y1="12" x2="19" y2="12"
            stroke="black" strokeWidth="2" strokeLinecap="round"
            className={`
              transition-opacity duration-300
              ${open ? 'opacity-0' : 'opacity-100'}
            `}
          />
          {/* Bottom bar */}
          <line
            x1="5" y1="17" x2="19" y2="17"
            stroke="black" strokeWidth="2" strokeLinecap="round"
            className={`
              transform origin-center
              transition-transform duration-300
              ${open ? '-translate-y-[3.5px] -rotate-45' : ''}
            `}
          />
        </svg>
      </button>
    </div>
      <div className="md:w-50">
        
          { heading === "ConnectionPortfolio" && (
              <div className="flex ml-5 mt-2 ">
                <div className="flex gap-x-2 ">
                  <div className="flex gap-x-2">
 <svg class="w-6 h-6 text-gray-800 cursor-pointer dark:text-white" onClick={()=>{
  changeFeature("Connections");
 }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="#9C9CAB" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
               </svg>
               <h1 className="text-[#9C9CAB] h-full">|</h1>
                  </div>
              <div className="flex">             
                 <h1 className="font-extrabold text-lg   text-gray-400">Connections</h1>
               <div className="  flex font-extrabold  text-lg gap-x-2 " style={{fontFamily:'Times New Roman,Serif'}}>
            <div className="flex ">
            <h1 className="">/{name.Title}</h1>
            </div>
           <h1>{name.Name}</h1>
           </div>
            </div>
                </div>
              </div>
              
            )}
          
   {heading !== "ConnectionPortfolio" && (<h1 className="font-extrabold mt-2 md:mt-0 text-2xl  md:px-12 " >{heading}</h1>)}   
      </div>
    
     <div className="flex ml-20 md:ml-160 gap-x-5">
     <div className="flex hidden md:block cursor-pointer py-2 relative px-5 justify-center md:w-50  h-10 rounded-md bg-[#5235E8] hover:bg-[#7C64ED] ">
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
  className="w-6 h-6 mt-2 md:mt-0  md:w-8 md:h-8 cursor-pointer"
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
  <button  className="cursor-pointer rounded-full mt-1 md:mt-0 w-10  h-10 font-extrabold text-white bg-[#DEDAFB]" onClick={(e)=>{changeFeature("Setting")}} >
   <img className="cursor-pointer rounded-full  w-10 h-10 font-extrabold text-white bg-[#DEDAFB]" src={profilelogo} alt="" />
  </button>
</NavLink>


     </div>
    </div>
    </>
  )
}

export default DashboardHeader