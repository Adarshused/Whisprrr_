import React, { useState } from "react";

function Profile(){
  const [profilelogo,setprofilelogo]=useState("AM");
  const [name,setname]=useState("Adarsh Mishra");
  const [email,setemail]=useState("adarshmishr6@gmail.com")
    return (
        <>
      <div className="flex flex-col w-screen h-screen">
        <div className="flex w-full h-4/10">
         <div className="flex flex-col mt-9 ml-7">
   <h1 className="font-extrabold text-xl" style={{fontFamily:'Times New Roman,Serif'}}> Contact info</h1>
     <h5 className="text-gray-400">Manage your information</h5>
         </div>
         <div className="flex flex-col w-230 rounded-lg ml-30 h-60 shadow-sm border border-gray-300 ">
          <div className=" border-b border-gray-300 h-1/2">
             <div className="flex mt-7 ml-6  gap-x-25">
              <div className="flex  gap-x-5">
                  <button className="cursor-pointer shadow-md text-3xl rounded-full  w-20 h-20 font-extrabold text-white bg-[#DEDAFB]" style={{fontFamily:'Times New Roman, Serif',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}} >{profilelogo}</button>
                  <div className="flex flex-col">
                  <h1 className=" mt-5 text-xl font-extrabold" style={{fontFamily:'Times New Roman,Serif'}}>{name}</h1>
                   <h5 className="text-gray-400">{email}</h5>
                  </div>
              </div>
               <div className="w-38 h-12 mt-7 cursor-pointer font-extrabold rounded-lg border  border-[#9785F1] text-[#5235E8] px-6 py-3 hover:text-[#5235E8]" style={{fontFamily:'Times New Roman, Serif'}}>
                      Upload photo
               </div>
             </div>
             </div>
             <div className="h-1/2 flex w-screen">
                <div className="flex flex-col ml-6 mt-7  ">
                   <h5 className="font-extrabold " style={{fontFamily:'Times New Roman,Serif'}}>Display name</h5>
                   <div className=" mt-2 w-103 h-11 border rounded-lg border-gray-300" >
                   <input  className="ml-5 w-105 h-full  outline-none" type="text" />
                   </div>
                </div>
                <div className="flex flex-col ml-6 mt-7  ">
                   <h5 className="font-extrabold " style={{fontFamily:'Times New Roman,Serif'}}>Email</h5>
                   <div className=" mt-2 w-103 h-11 border rounded-lg border-gray-300" >
                   <input  className="ml-5 w-105 h-full  outline-none" type="text" />
                   </div>
                </div>
             </div>
            
         </div>
        </div>
      <div className="flex w-full h-4/10">
           
         <div className="flex flex-col mt-9 ml-7">
   <h1 className="font-extrabold text-xl" style={{fontFamily:'Times New Roman,Serif'}}> Personal info</h1>
     <h5 className="text-gray-400">Manage your information</h5>
         </div>
         <div className="flex flex-col w-230 rounded-lg ml-30 h-60 shadow-sm border border-gray-300 ">
          <div className="flex ">
            <div className="flex flex-col ml-6 mt-4  ">
                   <h5 className="font-extrabold text-sm" style={{fontFamily:'Times New Roman,Serif'}}>First name</h5>
                   <div className="mt-1  w-103 h-11 border rounded-lg border-gray-300" >
                   <input  className="ml-5 w-105 h-full  outline-none" type="text" />
                   </div>
                </div>
                 <div className="flex flex-col ml-6 mt-4  ">
                   <h5 className="font-extrabold text-sm" style={{fontFamily:'Times New Roman,Serif'}}>Last name</h5>
                   <div className="mt-1  w-103 h-11 border rounded-lg border-gray-300" >
                   <input  className="ml-5 w-105 h-full  outline-none" type="text" />
                   </div>
                </div>
          </div>
             <div className="flex flex-col ml-6   ">
                   <h5 className="font-extrabold text-sm " style={{fontFamily:'Times New Roman,Serif'}}>Date of birth</h5>
                   <div className="mt-1  w-212 h-11 border rounded-lg border-gray-300" >
                   <input  className="ml-5 w-105 h-full  outline-none" type="text" />
                   </div>
                </div>
            <div className="flex flex-col ml-6   ">
                   <h5 className="font-extrabold text-sm " style={{fontFamily:'Times New Roman,Serif'}}>Country of residence</h5>
                   <div className=" mt-1 w-212 h-11 border rounded-lg border-gray-300" >
                   <input  className="ml-5 w-105 h-full  outline-none" type="text" />
                   </div>
                </div>
        </div>
      </div>
       <div className="flex w-full h-3/10">
         <div className="flex flex-col mt-9 ml-7">
          <div className="flex">
            <img className="h-5 w-5 mt-1" src="/assests/danger.svg" alt="" />
<h1 className="ml-3 font-extrabold text-xl" style={{fontFamily:'Times New Roman,Serif'}}> Danger Zone</h1>
          </div>
   
     <h5 className="text-gray-400">close your account</h5>
         </div>
         <div className="flex flex-col w-230 rounded-lg ml-30 h-30 shadow-sm border border-gray-300 ">
          <div className="flex mt-5 ml-6">
              <div className="flex flex-col">
              <h1 className="font-extrabold " style={{fontFamily:'Times New Roman, Serif'}}>Close account</h1>
              <h5 className="text-gray-400 text-sm">Closing your account can't be undone. Please make sure and do with precaution</h5>
              </div>
               <div className="w-38 ml-50 h-12 mt-3  cursor-pointer font-extrabold rounded-lg border  border-gray-400 text-[#FB3766] px-6 py-3 hover:text-[#C92C52]" style={{fontFamily:'Times New Roman, Serif'}}>
                      Close account
               </div>
              <div>

              </div>
             </div>
            
            
         </div>
        </div>
      </div>
        </>
    )
}

export default Profile