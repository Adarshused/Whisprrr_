import React from "react";
import { useState } from "react";
function Footer(){
    const[lang,setlang]=useState("English")
    return(
        <>
        {/* footer */}
                      
        <div className="flex flex-col gap-y-5 md:flex-row w-80 ml-5 mt-10 h-50 md:mt-0 md:gap-x-10 md:ml-60 md:w-240  rounded-2xl md:h-80 md:mt-20  bg-gray-100">
                      
                      <div className="flex flex-col  mt-6 ml-5 md:mt-30 md:ml-15">
                        <div className=" relative flex w-25 md:w-50 md:h-8 bg-white rounded-lg">
                          <input className="ml-3 md:w-full font-extrabold outline-none" type="text" readOnly='true' value={lang} style={{fontFamily:'Times New Roman, serif'}} />
                          <select  className=" font-extrabold md:mr-8 outline-none absolute inset-0 md:w-full md:h-full opacity-0 cursor-pointer" onChange={(e)=>setlang(e.target.value)} style={{fontFamily:'Times New Roman, serif'}} name="" id="">
                            <option  value=""disabled selected hidden></option>
                            <option  value="English" >English</option>
                            <option value="French">French</option>
                          </select>
                        </div>
                        <div className="flex">
                        {/* <FaFacebookF className="text-blue-600 text-2xl" /> */}
                        </div>

                      </div>
                       <div className="flex gap-x-5 md:gap-x-10">
                       
                      <div className="flex flex-col ml-4 md:ml-40 md:mt-15 " style={{fontFamily:'Times New Roman, serif'}}>
                         <h1 className="text-sm md:text-lg font-extrabold">Features</h1>
                         <h3 className="md:mt-5 text-xs text-black md:text-sm ">Dashboard</h3>
                         <h3 className="md:mt-2 text-xs text-black md:text-sm ">upvote system</h3>
                         <h3 className="md:mt-2 text-xs text-black md:text-sm ">feedback Portal</h3>
                         <h3 className="md:mt-2 text-xs text-black md:text-sm ">Alerts & Notification</h3>
                           

                         <h3 className="md:mt-2 text-xs text-black md:text-sm ">blog hub</h3>
                    </div>
                    <div className="flex flex-col  md:mt-15" style={{fontFamily:'Times New Roman, serif'}}>
                         <h1 className="text-sm md:text-lg font-extrabold">Developer</h1>
                         <h3 className="md:mt-5 text-xs text-black md:text-sm ">About me</h3>
                         <h3 className="md:mt-2 text-xs text-black md:text-sm ">Contact me</h3>
                         <h3 className="md:mt-2 text-xs text-black md:text-sm ">Legal & Privacy</h3>
                         <h3 className="md:mt-2 text-xs text-black md:text-sm ">Raise Bug</h3>
                        
                    </div>
                    <div className="flex flex-col  md:mt-15" style={{fontFamily:'Times New Roman, serif'}}>
                         <h1 className="text-sm md:text-lg  font-extrabold">Resources</h1>
                         <h3 className="md:mt-5 text-xs text-black md:text-sm ">Blog</h3>
                         <h3 className="md:mt-2 text-xs text-black md:text-sm ">Help & Support</h3>
                         <h3 className="md:mt-2 text-xs text-black md:text-sm ">FAQ</h3>
                        
                    </div>
                    </div>
                       </div>
        </>
    )
}
export default Footer