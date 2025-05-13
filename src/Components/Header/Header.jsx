import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
function Header(){
    const optionArr=[{label:"Features",value:["FAQ","Features"]}];
    return(
        <>
        <div className="flex gap-x-7 bg-white/30 backdrop-blur-md  fixed top-0 left-0  z-50 shadow-sm w-full ">
             <div className="flex gap-x-2 px-5 py-6 ml-160 text-sm font-medium">
                {/* <div className="flex ">
                <label htmlFor="" className="gap-x-2 ">Features</label>
                <select name="" id=""></select>
                </div>
                <div className="flex ml-4 ">
                <label htmlFor="" className="">About</label>
                <select name="" id=""></select>
                </div>
                <div className="flex ml-4">
                <label htmlFor="" className="">Developers</label>
               
                </div> */}
                 
                <Dropdown options={optionArr}/>
              
             </div>
             <div className="flex gap-x-4 ml-40 mt-4  font-serif">
                <NavLink to="/signin">
                <button className=" cursor-pointer border-1 h-10 font-medium rounded-md border-purple-300 px-3 py-1 hover:bg-[#5235E8] hover:text-white">Sign In</button>
                </NavLink>
               
                <NavLink to="/signup" >
                <button className=" cursor-pointer border-1 h-10 font-medium  rounded-md border-purple-300 text-[#5235E8] px-3 py-1 hover:bg-[#5235E8] hover:text-white" >Get Started</button>
                </NavLink>
                
             </div>
        </div>
        </>
    )
}
export default Header