import React, { useState } from "react";

function Password(){
    const [oldpass,setoldpass]=useState("Enter old password");
    const [newpass,setnewpass]=useState("Enter new password");
    const [cnewpass,setcnewpass]=useState("confirm new password")
    return(
        <>
        <div className="flex flex-col w-screen h-screen">
        <div className="flex w-full ">
         <div className="flex flex-col mt-9 ml-7">
   <h1 className="font-extrabold text-xl" style={{fontFamily:'Times New Roman,Serif'}}>Change password</h1>
   <div className="mt-2 flex flex-col text-gray-400 text-sm">
<h5 className="">Remember not to store your password </h5>
<h5>in your email or cloud and don't share it </h5>
<h5>with anyone</h5>
   </div>
     
         </div>
        
 <div className="flex flex-col w-220 rounded-lg ml-15 h-90 mt-6  shadow-sm border border-gray-300 ">
    <div>
      <h1 className="mt-7 ml-10 font-extrabold" style={{fontFamily:'Times New Roman'}}>Old password</h1>
        <div className="mt-4 ml-10 w-200 px-2 py-2 h-10 text-gray-400 rounded-lg bg-[#F9F9FA] border border-gray-300">
            <input className="w-full h-full outline-none" placeholder={oldpass} type="text" />
            
        </div>
    </div>
    <div>
         <h1 className="mt-7 ml-10 font-extrabold" style={{fontFamily:'Times New Roman'}}>New password</h1>
        <div className="mt-4 ml-10 w-200 px-2 py-2 h-10 text-gray-400 rounded-lg bg-[#F9F9FA] border border-gray-300">
            <input className="w-full h-full outline-none" placeholder={newpass} type="text" />
            
        </div>
    </div>
          <h1 className="mt-7 ml-10 font-extrabold" style={{fontFamily:'Times New Roman'}}>Confirm new password</h1>
        <div className="mt-4 ml-10 w-200 px-2 py-2 h-10 text-gray-400 rounded-lg bg-[#F9F9FA] border border-gray-300">
            <input className="w-full h-full outline-none" placeholder={cnewpass} type="text" />
            
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

export default Password