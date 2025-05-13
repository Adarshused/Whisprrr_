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
    <div className="flex flex-col gap-y-8">
       
        {/* First page */}
        <div className="flex relative" >
    <svg
      viewBox="0 0 100 50"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"   // lets you control color via CSS or props
      style={{'position':'absolute'}}
      
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
       <div className="flex gap-x-40" style={{'position':'relative'}}>
      <div className="flex flex-col  ml-30 mt-14 gap-y-6">
       <h2 className="text-[#5235E8] ">SIGN IN TO GET INSTANT BENEFIT!</h2>
       <div className="flex flex-col gap-y-4">
       <h1 className="text-5xl font-serif font-extrabold">Instant Insights, </h1>
       <h1 className="text-5xl font-serif font-extrabold">Continous, </h1>
       <h1 className="text-5xl font-serif font-extrabold">Improvement. </h1>
       </div>
       <div className="text-gray-500">
       Learn → Listen → Launch
       </div>
       
       <div className="flex gap-x-3">
        <div className="px-4 py-3 shadow-[0_4px_6px_rgba(128,0,128,0.5)] rounded-md w-120 text-gray-500" >
         <input type="text" className="outline-none w-full" value={email} placeholder="Your email address" onChange={(e)=>setemail(e.target.value)}/>
        </div>
        
         <button className="cursor-pointer border-1 h-12 w-30 bg-[#5235E8] hover:bg-[#755DED] shadow-[0_4px_6px_rgba(82,53,232,0.5)]
 text-white  font-medium  rounded-lg border-purple-300 ">Get Started</button>
       </div>
      </div>
      <div className="relative inline-block">
        <img className="  h-100 mt-14 shadow-md rounded-lg" src="/assests/Frame_01.svg" alt="" />
        <img  className="absolute bottom-22 right-65  object-cover z-10" src="/assests/banner.svg" alt="" />
      </div>
      </div>
      </div>
                         {/* first-page Part 2 */}
      <div className="flex gap-x-4 mt-15">
        <div className="flex flex-col">
            <h1 className="font-extrabold text-3xl ml-37 "style={{ fontFamily: 'Times New Roman, serif' }}>1 millions</h1>
            <h5 className="text-gray-500 ml-45">visiters</h5>
        </div>
       <div className="flex flex-col">
        <div className="flex gap-x-2">
        <h1 className="font-extrabold text-3xl ml-90"style={{ fontFamily: 'Times New Roman, serif' }}>50+</h1>
        <div>
          <h5 className="mt-1 bg-[#daf727] font-extrabold rounded-2xl  px-2 " style={{fontFamily:'Times New Roman, serif'}}>counting...</h5>
        </div>
        </div>
       <h5 className="text-gray-500 ml-96">Institute tried</h5>
       </div>
       <div className="flex flex-col ">
          <h1 className="font-extrabold text-3xl ml-75"style={{ fontFamily: 'Times New Roman, serif' }}>1 platform</h1>
          <h5 className="text-gray-500 ml-78">for better future</h5>
       </div>
      </div>
                   {/* Second page */}
          <div className="flex flex-col ">
          <div className="flex flex-col relative ">

         <svg
      viewBox="0 0 80 132"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"   
      style={{'position':'absolute'}}
      
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
      <img className="bg-white-500  opacity-90 absolute left-45  w-220 "src="/assests/Pattern.svg" alt="" />
    </svg>
          <div className="flex flex-col ml-15">
          
          
              <div className="flex flex-col  mt-15  ml-125 gap-y-5"style={{ fontFamily: 'Times New Roman, serif' }}>
                <h5 className="text-[#5235E8] font-extrabold ml-35 text-sm">FEATURES</h5>
                 <h1 className="font-extrabold text-3xl ">Get a bird's eye view of your </h1>
                 <h1 className="font-extrabold text-3xl ml-25">Performance</h1>
                 <div className="flex flex-col ml-15 ">
                 <h5 className="text-gray-500 text-sm">Keep up upon all the upvotes and beat your </h5>
                 <h5 className="text-gray-500 text-sm ml-20">Fellow Faculty</h5>
                 </div>
               
              </div>
              <img className=" w-220 mt-10 ml-60 shadow-[0_4px_6px_rgba(82,53,232,0.5)] rounded-lg left-75" src="/assests/Dashboard_v1.svg" alt="" />
              </div>
              </div>
                    {/* Third page */}

                    <div className="flex flex-col  mt-25 ml-15 "style={{ fontFamily: 'Times New Roman, serif' }}>
                <div className="flex flex-col ml-120 gap-y-5">
                <h5 className="text-[#5235E8] font-extrabold ml-40 text-sm">TESTOMONIAL</h5>
                 <h1 className="font-extrabold text-3xl mr-50">Trusted by More Then 50k+ HOD'S </h1>
          
                 <div className="flex flex-col ml-15 ">
                 <h5 className="text-gray-500 text-sm">Hear what they say about us and why you should choose whisprr </h5>
                 </div>
                 </div>
                 <div className="absolute mt-50 ml-30">
                 <Cards/>
                 </div>
              </div>
                     {/* fourth page */}
                     <div className="flex flex-col mt-180 ml-62">
                      <div className="relative">
                        <img className="h-85 " src="/assests/CTA.svg" alt="" /> 
                        <button className="bottom-40 left-24 absolute cursor-pointer border-1 h-10 font-medium bg-gray-200  rounded-md border-purple-300 text-[#5235E8] px-3 py-1 hover:bg-[#5235E8] hover:text-white" >Get Started</button>
                         <img  className="absolute w-50 bottom-8 left-118"src="/assests/graph_.svg" alt="" />
                      </div>
                      
                     </div>
                  
                     <Footer/>
               </div>
          </div>
              
        </>
    )
}
export default Hero