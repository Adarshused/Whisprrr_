import React from "react";
import { useState } from "react";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import { NavLink,Link } from "react-router-dom";
import Icon from "../Icon/Icon"
// import {FaFacebookF,FaInstagram} from 'react-icons/fa';
function Hero(){
    const[email,setemail]=useState("")
   
    return(
        <>
    <div className="flex flex-col gap-y-8 md:w-screen w-10">
       
        {/* First page */}
        <div className="flex" style={{'position':'relative'}}>
    <svg
      viewBox="0 0 100 50"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"   // lets you control color via CSS or props
      style={{'position':'absolute'}}
      className="top-0 left-0 h-350 md:h-190 w-90 md:w-auto"
    >
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(82,53,232,0.02)" />
        <stop offset="100%" stopColor="rgba(82,53,232,0.1)" />

        </linearGradient>
      </defs>
      <path
        d="M 0 0 H 860 V 37 H 0 Z"
        fill="url(#areaGrad)"
        // stroke="#5235E8"
        strokeWidth="2"
      />
    </svg>
     </div>
     
     <div className="flex gap-x-40" >
       <div className="flex flex-col gap-y-5  md:flex-row  md:gap-x-40" style={{'position':'relative'}}>
      <div className="flex flex-col ml-3  md:ml-30 md:mt-14 mt-8 gap-y-6">
       <h2 className="text-[#5235E8] text-sm md:text-lg  ">SIGN IN TO GET INSTANT BENEFIT!</h2>
       <div className="flex flex-col gap-y-4 ">
       <h1 className="md:text-5xl text-4xl font-serif font-extrabold">Instant Insights, </h1>
       <h1 className="md:text-5xl text-4xl font-serif font-extrabold">Continous, </h1>
       <h1 className="md:text-5xl text-4xl font-serif font-extrabold">Improvement. </h1>
       </div>
       <div className="text-gray-500">
       Learn → Listen → Launch
       </div>
       
       <div className="flex gap-x-3">
        <div className="px-4 py-3 shadow-[0_4px_6px_rgba(128,0,128,0.5)] rounded-md w-55 md:w-120 text-gray-500" >
         <input type="text" className="outline-none w-full" value={email} placeholder="Your email address" onChange={(e)=>setemail(e.target.value)}/>
        </div>
        
         <button className="cursor-pointer border-1 h-12 md:w-30 w-25 bg-[#5235E8] hover:bg-[#755DED] shadow-[0_4px_6px_rgba(82,53,232,0.5)]
 text-white  font-medium  rounded-lg border-purple-300 ">Get Started</button>
       </div>
      </div>
      <div className="relative inline-block">
        <img className=" h-60 ml-20 md:h-100 mt-14 shadow-md rounded-lg" src="/assests/Frame_01.svg" alt="" />
        <img  className="absolute md:bottom-27 ml-12  bottom-17 md:right-65 h-16 md:h-30 object-cover z-10" src="/assests/banner.svg" alt="" />
      </div>
      </div>
      </div>
                         {/* first-page Part 2 */}
      <div className="flex  gap-x-2 md:gap-x-4 mt-10 md:mt-15">
        <div className="flex flex-col">
            <h1 className="font-extrabold text-lg w-23 md:w-auto  ml-3 md:text-3xl md:ml-37 "style={{ fontFamily: 'Times New Roman, serif' }}>1 millions</h1>
            <h5 className="text-gray-500 text-xs md:text-lg ml-9 md:ml-45">visiters</h5>
        </div>
       <div className="flex flex-col">
        <div className="flex md:gap-x-2">
        <h1 className="font-extrabold text-lg  md:text-3xl md:ml-90"style={{ fontFamily: 'Times New Roman, serif' }}>50+</h1>
        <div>
          <h5 className="mt-1 bg-[#daf727] font-extrabold rounded-2xl  px-2 " style={{fontFamily:'Times New Roman, serif'}}>counting...</h5>
        </div>
        </div>
       <h5 className="text-gray-500  md:ml-96 ml-6 text-xs md:text-lg">Institute tried</h5>
       </div>
       <div className="flex flex-col ">
          <h1 className="font-extrabold text-lg w-25 md:w-auto md:text-3xl md:ml-75"style={{ fontFamily: 'Times New Roman, serif' }}>1 platform</h1>
          <h5 className="text-gray-500 md:text-lg ml-1 text-xs md:ml-78">for better future</h5>
       </div>
      </div>
                   {/* Second page */}
          <div className="relative h-screen w-screen flex flex-col ">
          <div className="  flex flex-col  ">

         <svg
      viewBox="0 0 80 132"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"   
      
      className="absolute h-430  md:w-auto md:h-auto"
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
        // stroke="#5235E8"
        strokeWidth="2"
      />
      <img className="bg-white-500  opacity-90 absolute md:left-45  md:w-220 "src="/assests/Pattern.svg" alt="" />
    </svg>
          <div className="flex flex-col w-screen md:ml-15">
          
          
              <div className="flex flex-col ml-10 mt-5 md:mt-15  md:ml-125 gap-y-3 "style={{ fontFamily: 'Times New Roman, serif' }}>
                <h5 className="text-[#5235E8]  font-extrabold ml-25 md:ml-35 text-sm">FEATURES</h5>
                 <h1 className=" font-extrabold w-110 text-lg  md:text-3xl ">Get a bird's eye view of your </h1>
                 <h1 className="font-extrabold  text-lg ml-17 md:text-3xl md:ml-25">Performance</h1>
                 <div className="flex flex-col   md:ml-15 ">
                 <h5 className="text-gray-500 w-110 ml-1 text-xs md:text-sm">Keep up upon all the upvotes and beat your </h5>
                 <h5 className="text-gray-500 w-110 ml-2 text-xs md:text-sm ml-20">Fellow Faculty</h5>
                 </div>
               
              </div>
              <img className="w-75 ml-7 md:w-220 mt-10 md:ml-60 shadow-[0_4px_6px_rgba(82,53,232,0.5)] rounded-lg md:left-75" src="/assests/Dashboard_v1.svg" alt="" />
              </div>
              </div>
                    {/* Third page */}

                    <div className="flex  w-screen ml-7 flex-col mt-15  md:mt-25 md:ml-10 "style={{ fontFamily: 'Times New Roman, serif' }}>
                <div className="flex flex-col md:ml-120 gap-y-3 md:gap-y-5">
                <h5 className="text-[#5235E8] font-extrabold ml-25 md:ml-40 text-sm">TESTOMONIAL</h5>
                 <h1 className="font-extrabold text-lg md:ml-3  md:text-3xl md:mr-50">Trusted by More Then 50k+ HOD'S </h1>
          
                 <div className="flex flex-col md:flex-row  md:ml-15 ">
                 <h5 className="text-gray-500 text-xs ml-4 md:ml-0  md:text-sm">Hear what they say about us and why you should</h5>

                 <h5 className="text-gray-500 ml-25 md:ml-1 text-xs md:text-sm"> choose whisprr </h5>
                 </div>
                 </div>
                 <div className="absolute mt-35 md:mt-50 md:ml-30">
                 <Cards/>
                 </div>
              </div>
                     {/* fourth page  */}
                     <div className="flex flex-col w-screen mt-200 md:mt-180 md:ml-62">
                      <div className="relative ">
                        <img className="ml-4 md:ml-0  md:h-85 w-80 md:w-auto " src="/assests/CTA.svg" alt="" /> 
                        <button className="bottom-8 text-xs md:text-lg left-7 h-7 w-25 md:w-35 md:bottom-40 md:left-24 absolute cursor-pointer border-1 md:h-10 font-medium bg-gray-200  rounded-md border-purple-300 active:bg-[#5235E8] active:text-white text-[#5235E8] px-3 py-1 hover:bg-[#5235E8] hover:text-white" >Get Started</button>
                         <img  className="absolute w-20 bottom-2 left-42 md:w-50 md:bottom-8 md:left-118"src="/assests/graph_.svg" alt="" />
                      </div>
                      
                     </div>
                  
                     <Footer/>
               </div>
          </div>
              
        </>
    )
}
export default Hero