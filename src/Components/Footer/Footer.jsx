import React from "react";
import { useState } from "react";
function Footer(){
    const[lang,setlang]=useState("English")
    return(
        <>
        {/* footer */}
                      
        <div className="flex gap-x-10 ml-60 w-240  rounded-2xl h-80 mt-20  bg-gray-100">
                      
                      <div className="flex flex-col absolute mt-30 ml-15">
                        <div className=" relative flex w-50 h-8 bg-white rounded-lg">
                          <input className="ml-3 w-full font-extrabold outline-none" type="text" readOnly='true' value={lang} style={{fontFamily:'Times New Roman, serif'}} />
                          <select  className=" font-extrabold mr-8 outline-none absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={(e)=>setlang(e.target.value)} style={{fontFamily:'Times New Roman, serif'}} name="" id="">
                            <option  value=""disabled selected hidden></option>
                            <option  value="English" >English</option>
                            <option value="French">French</option>
                          </select>
                        </div>
                        <div className="flex">
                        {/* <FaFacebookF className="text-blue-600 text-2xl" /> */}
                        </div>

                      </div>

                      <div className="flex flex-col ml-80 mt-15" style={{fontFamily:'Times New Roman, serif'}}>
                         <h1 className="font-extrabold">Features</h1>
                         <h3 className="mt-5 text-black text-sm ">Dashboard</h3>
                         <h3 className="mt-2 text-black text-sm ">upvote system</h3>
                         <h3 className="mt-2 text-black text-sm ">feedback Portal</h3>
                         <h3 className="mt-2 text-black text-sm ">Alerts & Notification</h3>
                         <h3 className="mt-2 text-black text-sm ">blog hub</h3>
                    </div>
                    <div className="flex flex-col  mt-15" style={{fontFamily:'Times New Roman, serif'}}>
                         <h1 className="font-extrabold">Developer</h1>
                         <h3 className="mt-5 text-black text-sm ">About me</h3>
                         <h3 className="mt-2 text-black text-sm ">Contact me</h3>
                         <h3 className="mt-2 text-black text-sm ">Legal & Privacy</h3>
                         <h3 className="mt-2 text-black text-sm ">Raise Bug</h3>
                        
                    </div>
                    <div className="flex flex-col  mt-15" style={{fontFamily:'Times New Roman, serif'}}>
                         <h1 className="font-extrabold">Resources</h1>
                         <h3 className="mt-5 text-black text-sm ">Blog</h3>
                         <h3 className="mt-2 text-black text-sm ">Help & Support</h3>
                         <h3 className="mt-2 text-black text-sm ">FAQ</h3>
                        
                    </div>
                    </div>
        </>
    )
}
export default Footer