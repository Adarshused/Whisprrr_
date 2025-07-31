import React, { useState } from "react";

function Security(){
    const [number,setnumber]=useState("");
    const [email,setemail]=useState("")
    const toggle_message=(e)=>{
      const track=e.target;
      // console.log(track.getAttribute('data-on'))
      const switch_=document.getElementById('switch_');
      const knob=document.getElementById('knob');
      // console.log(isOn);
      if(switch_.getAttribute('fill') === '#C8C8D0'){
        knob.setAttribute('cx','36');
        switch_.setAttribute('fill','#11CF8B');
      }
      else if(switch_.getAttribute('fill') === '#11CF8B'){
        knob.setAttribute('cx','18');
        switch_.setAttribute('fill','#C8C8D0')
      }
      
    }
    const toggle_email=(e)=>{
      const switch_2=document.getElementById('switch_2');
      const knob_=document.getElementById('knob_');
      if(switch_2.getAttribute('fill') === '#C8C8D0'){
        knob_.setAttribute('cx','36');
        switch_2.setAttribute('fill','#11CF8B');
      }
      else if(switch_2.getAttribute('fill') === '#11CF8B'){
        knob_.setAttribute('cx','18');
        switch_2.setAttribute('fill','#C8C8D0')
      }
    }
    return(
        <>
       <div className="flex flex-col w-screen h-screen">
        <div className="flex w-full ">
         <div className="flex flex-col mt-9 ml-7">
   <h1 className="font-extrabold text-xl" style={{fontFamily:'Times New Roman,Serif'}}>Phone number</h1>
     <h5 className="text-gray-400">Keep your phone number up-to-date</h5>
         </div>
         <div className="flex flex-col w-220 rounded-lg ml-15 h-40 mt-6  shadow-sm border border-gray-300 ">
          <h1 className="mt-7 ml-10 font-extrabold" style={{fontFamily:'Times New Roman'}}>Phone number</h1>
        <div className="mt-7 ml-10 w-200 h-10  rounded-lg bg-[#F9F9FA] border border-gray-300">

        </div>
         </div>
        </div>
      <div className="flex w-full  mt-10 ">
           
         <div className="flex flex-col mt-9 ml-7">
   <h1 className="font-extrabold text-xl" style={{fontFamily:'Times New Roman,Serif'}}>Two-step verification</h1>
     <h5 className="text-gray-400">Select your two-step verification method</h5>
         </div>
        <div className="flex flex-col w-220 rounded-lg ml-8 h-40   shadow-sm border border-gray-300 ">
              <div className="flex ml-5 mt-5 gap-x-20">
                <div className="flex">
                   <div className="w-10 h-10  flex justify-center bg-[#F7F6FE]   rounded-md border border-[#EFEDFD]">
                    <div className=" w-8 h-8 mt-1 py-1 bg-white  px-1 border border-[#D6D1FA] rounded-md">
                        <img className="w-6 h-6 "src="/assests/msg.svg" alt="" />
                    </div>
                   </div>
                   <div className="flex flex-col ml-2 w-140">
               <h1 className="font-extrabold " style={{fontFamily:'Times New Roman,Serif'}}>Text Message</h1>
               <div className="flex gap-x-1">
               <h5 className="text-xs text-gray-400">When you sign in, you will receive OTP code to approve your login to your number</h5>
                 <h5 className="text-sm font-extrabold" style={{fontFamily:'Times New Roman,Serif'}}>{number}</h5>
               </div>
                   </div>
                   
                </div>
                <div className="mt-2 ml-20 cursor-pointer">
             <svg width="80" height="80" viewBox="0 0 80 80">
                <rect className="transition-colors duration-300 ease-in-out" onClick={(e)=>toggle_message(e)}  id="switch_" x="2" y="5" width="50" height="30" rx="15" ry="25" fill="#C8C8D0"></rect>
               <circle className="pointer-events-none transition-all duration-300 ease-in-out" id="knob" cx="18" cy="20" r="12" fill="white"></circle>
                </svg>
                </div>
              
              </div>
              <div className="flex ml-5  gap-x-20">
                <div className="flex">
                   <div className="w-10 h-10  flex justify-center bg-[#F7F6FE]   rounded-md border border-[#EFEDFD]">
                    <div className=" w-8 h-8 mt-1 py-1 bg-white  px-1 border border-[#D6D1FA] rounded-md">
                        <img className="w-6 h-6 "src="/assests/msg_1.svg" alt="" />
                    </div>
                   </div>
                   <div className="flex flex-col ml-2 w-151">
               <h1 className="font-extrabold " style={{fontFamily:'Times New Roman,Serif'}}>Email</h1>
               <div className="flex gap-x-1">
               <h5 className="text-xs  text-gray-400">When you sign in, you will receive notification to approve your login on your email</h5>
                 <h5 className="text-sm font-extrabold" style={{fontFamily:'Times New Roman,Serif'}}>{email}</h5>
               </div>
                   </div>
                   
                </div>
                <div className="mt-2 ml-10  cursor-pointer">
             <svg width="80" height="80" viewBox="0 0 80 80">
                <rect className="transition-colors duration-300 ease-in-out" onClick={(e)=>toggle_email(e)}  id="switch_2" x="2" y="5" width="50" height="30" rx="15" ry="25" fill="#C8C8D0"></rect>
               <circle className="pointer-events-none transition-all duration-300 ease-in-out" id="knob_" cx="18" cy="20" r="12" fill="white"></circle>
                </svg>
                </div>
              
              </div>
        </div>
      </div>
      <div className="ml-280 mt-8">
          <div className="flex cursor-pointer py-2 relative px-2 justify-center w-25  h-10 rounded-md bg-[#5235E8] hover:bg-[#7C64ED] " style={{fontFamily:'Times New Roman,Serif'}}>
              <h3 className="font-extrabold flex  text-white">Save</h3>  
        </div>
        </div> 
      </div>
        </>
    )
}

export default Security