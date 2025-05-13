import React, { useState } from "react";
import { Eye, EyeOff } from 'lucide-react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
function UserSignUp(){
    const[show,setshow]=useState(false)
    return(
        <>
     <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z"/>
</svg>
<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z"/>
</svg>


        <div className="flex h-screen w-screen">
  {/* left half */}
  <div className="relative w-2/5 h-full overflow-hidden">
    <svg
      className="absolute inset-0 w-full h-full block"
      viewBox="0 0 80 148"
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
    <div className="flex flex-col w-full ml-15 mt-5 ">
     <div className="flex flex-col w-full p-5">
        <h1 className="font-extrabold text-3xl " style={{fontFamily:'Times New Roman, serif'}}>Create an account</h1>
        <h5 className="text-gray-500 text-sm mt-2">Let's begin your Growth.</h5>
     </div>
     <div className="flex flex-col gap-y-3 ml-5 mt-3">
        <div className="flex flex-col">
            <label className="font-extrabold text-sm" style={{fontFamily:'Times New Roman, serif'}}  htmlFor="">Name</label>
            <div className="caret-purple-400 w-80 relative h-10 rounded-md bg-white border border-gray-300 hover:shadow-[0_0_8px_rgba(82,53,232,0.3)] hover:border-purple-300">
                <input className="bg-white-500 outline-none w-full p-2 absolute" type="text"  />
            </div>
        </div>
     </div>
     <div className="flex flex-col gap-y-3 ml-5 mt-3">
        <div className="flex flex-col">
            <label className="font-extrabold text-sm" style={{fontFamily:'Times New Roman, serif'}}  htmlFor="">Email</label>
            <div className="caret-purple-400 w-80 relative h-10 rounded-md bg-white border border-gray-300 hover:shadow-[0_0_8px_rgba(82,53,232,0.3)] hover:border-purple-300">
                <input className="bg-white-500 outline-none w-full p-2 absolute" type="text"  />
            </div>
        </div>
     </div>
     <div className="flex flex-col gap-y-3 ml-5 mt-3">
        <div className="flex flex-col">
            <label className="font-extrabold text-sm" style={{fontFamily:'Times New Roman, serif'}}  htmlFor="">Organization ID</label>
            <div className="caret-purple-400 w-80 relative h-10 rounded-md bg-white border border-gray-300 hover:shadow-[0_0_8px_rgba(82,53,232,0.3)] hover:border-purple-300">
                <input className="bg-white-500 outline-none w-full p-2 absolute" type="text"  />
            </div>
        </div>
     </div>
     <div className="flex flex-col gap-y-3 ml-5 mt-3">
        <div className="flex flex-col">
            <label className="font-extrabold text-sm" style={{fontFamily:'Times New Roman, serif'}}  htmlFor="">Password</label>
            <div className="flex caret-purple-400 w-80 relative h-10 rounded-md bg-white border border-gray-300 hover:shadow-[0_0_8px_rgba(82,53,232,0.3)] hover:border-purple-300">
                <input className="bg-white-500 outline-none w-full p-2 absolute" type={show?'text':'password'}  />
                <button className=" absolute inset-y-0 right-0 flex items-center px-3 text-gray-400"
        tabIndex={-1} onClick={()=>setshow(!show)}>{show ? <EyeOff size={20} /> : <Eye size={20} />}</button>
            </div>
        </div>
     </div>
     <div className="flex flex-col gap-y-3 ml-5 mt-7">
        <div className="flex cursor-pointer">
            <div className="flex py-2 relative px-2 justify-center w-80  h-10 rounded-md bg-[#5235E8] hover:bg-[#7C64ED] ">
              <h3 className=" flex  text-white">Create account</h3>  
            </div>
        </div>
        <div className="flex cursor-pointer">
            <div className="flex py-2 relative px-2 justify-center w-80  h-10 rounded-md bg-white  ">
            <div className="mr-2">
            <svg viewBox="0 0 48 48" width="20" height="20">
  <path fill="#EA4335" d="M24 9.5c3.24 0 6.15 1.11 8.43 2.94l6.28-6.28C34.65 2.07 29.65 0 24 0 14.72 0 6.85 5.52 2.89 13.44l7.79 6.06C12.04 12.23 17.56 9.5 24 9.5z" />
  <path fill="#34A853" d="M46.12 24.55c0-1.74-.15-3.42-.42-5.05H24v9.55h12.42c-.54 2.88-2.14 5.32-4.59 6.96v5.81h7.43c4.35-4.01 6.86-9.93 6.86-17.27z" />
  <path fill="#FBBC05" d="M10.68 28.12a14.53 14.53 0 010-8.24v-5.81H3.25a24.006 24.006 0 000 19.86l7.43-5.81z" />
  <path fill="#4285F4" d="M24 48c6.48 0 11.92-2.14 15.89-5.82l-7.43-5.81c-2.08 1.4-4.76 2.23-8.46 2.23-6.44 0-11.96-4.2-13.94-9.9l-7.79 6.06C6.85 42.48 14.72 48 24 48z" />
</svg>
            </div>
           

              <h3 className=" flex  text-black text-sm font-extrabold" style={{fontFamily:'Times New Roman, serif'}}>Sign up with Google</h3>  
            </div>
        </div>
        <div className="flex cursor-pointer">
            <div className="flex py-2 relative px-2 justify-center w-80  h-10 rounded-md bg-white  ">
            <div className="mr-2">
            <svg viewBox="0 0 48 48" width="24" height="24">
        <path
         fill="#1877F2"
         d="M24 0C10.75 0 0 10.75 0 24s10.75 24 24 24 24-10.75 24-24S37.25 0 24 0z"
        />
        <path
         fill="#FFF"
         transform="scale(1.2) translate(-4 -4)"
         d="M26.67 24h-2.84v12h-4.91V24h-2.1v-4.16h2.1v-2.64c0-1.83.87-4.68 4.68-4.68l3.44.01v3.83h-2.5c-.41 0-.99.21-.99 1.1v2.38h3.52L26.67 24z"
        />
        </svg>
            </div>
            <h3 className=" flex  text-black text-sm font-extrabold" style={{fontFamily:'Times New Roman, serif'}}>Sign up with Facebook</h3>  
            </div>
        </div>
     </div>
     <div className="flex mt-5 ml-15">
       <h5 className="text-sm">Have an account already?</h5>
       <h3 className=" relative cursor-pointer font-extrabold text-[#5235E8] hover:text-[#7C64ED]" style={{fontFamily:'Times New Roman, serif'}}>Sign in</h3>
     </div>
    </div>
  </div>

  {/* right half */}
  <div className="flex flex-col w-3/5 h-full bg-[#0E0637] rounded-l-2xl relative">
    <div className="flex flex-col ml-30 mt-14 ">
        <div className="flex font-extrabold text-3xl  flex-col text-white" style={{fontFamily:'Times New Roman, serif'}}>
            <h1>~ "Reach new academic heights with Wishprr</h1>
            <h1>-Your path to smarter learning,real-time</h1>
            <h1>insights, and unstoppable growth."</h1>
        </div>
        <div className="flex flex-col text-white"style={{fontFamily:'Times New Roman, serif'}}>
           <h5 className="">Intrested in real-time faculty performance insights? Sign up now and elevate</h5>
           <h5>your academic oversight with Whisprr</h5>
        </div>
        </div>

       <div className="flex  mr-20">
       <div className=" w-1/2 ml-30 mt-15">
       {/* right-left part */}
        <div className="flex flex-col gap-y-8 ">
          <div className="flex flex-col gap-y-4">
             <div className="w-60 h-10 bg-[#D6D1FA] rounded-4xl">
              <h3 className=" text-sm w-full py-2 px-4" >Used by over 50+Institute HOD's</h3>
             </div>
             <img className="w-60 " src="/assests/Sign_up_icons.svg" alt="" />
          </div>
          <img className="w-60" src="/assests/sign_up_page.svg" alt="" />
          <div>

          </div>
        </div>
       </div>
       <div className="  w-1/2 flex flex-col ">
        {/* right-right part */}
        <div className="w-full">
        <img  className="  w-full h-84 object-fill" src="/assests/Recent_Activity.svg" alt="" />
        </div>
        
        <img className=" w-50 h-30" src="/assests/Sign_up_2.svg" alt="" />
       </div>
       </div>
    </div>
    
  </div>
   </>
    )
}

export default UserSignUp