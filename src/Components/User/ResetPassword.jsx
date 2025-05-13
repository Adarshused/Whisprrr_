import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
function ResetPassword(){
  const {state}=useLocation();
  const email=state?.email;
    return(
        <>
        <div className="h-full overflow-hidden w-screen">
        <svg
      className="absolute inset-0 w-full h-full block"
      viewBox="0 0 60 20"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(82,53,232,0.02)" />
          <stop offset="100%" stopColor="rgba(82,53,232,0.1)" />
        </linearGradient>
      </defs>
      <path
        d="M 0 0 H 80 V 148 H 0 Z"
        fill="url(#areaGrad)"
        strokeWidth="2"
        stroke="none"
      />
    </svg>
        <div className="flex flex-col mt-25 ml-135 relative w-120 h-110 bg-white rounded-lg shadow-[0_0_8px_rgba(82,53,232,0.4)] border border-gray-400">
          <div className="flex flex-col mt-25 ml-15 gap-y-5">
            <h1 className="text-3xl font-extrabold" style={{fontFamily:'Times New Roman, serif'}}>Check your email</h1>
            <div className="flex flex-col text-sm text-gray-400">
            <h3>we emailed a link to reset your passward to </h3>
            
            <h3>{email}</h3>
            </div>
           
          </div>
          <div className="flex flex-col ml-15 mt-7">
         
            <NavLink to="">
            <div className="flex cursor-pointer mt-2">
            <div className="flex py-2 relative px-2 justify-center w-80  h-10 rounded-md bg-[#5235E8] hover:bg-[#7C64ED] ">

              <h3 className=" flex  text-white">Open email</h3>  
            </div>
        </div>
        </NavLink>
        <div className="flex mt-8 ml-25 ">
        <h4 className="text-gray-400 ">Continue to</h4>
        <NavLink to="/signin">
        <h2 className="cursor-pointer font-medium  text-[#5235E8] ml-1 hover:text-[#7C64ED]" style={{fontFamily:'Times New Roman, Serif'}}> Sign in</h2>
        </NavLink>
        
        </div>
         
          </div>
          <div>

          </div>
        </div>
        </div>
        </>
    )
}

export default ResetPassword