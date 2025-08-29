import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import Profile from "./Profile.jsx";
import Settings from "./Settings.jsx";
import { ChangeStatus } from "../../Features/DashboardSlice.js";

function Settingsheader(props){
  // console.log(props.title)
  const Dispatch=useDispatch();
  const [heading,setheading]=useState('');
  const [notification,setnotification]=useState(true);
  const [clickednotification,setclickednotification]=useState(false);
  const [profilelogo,setprofilelogo]=useState("AS")
  useEffect(()=>{
    setheading(props.title);
  },[props])

const changeFeature=(currFeature)=>{
Dispatch(ChangeStatus(currFeature));
}
  return (
    <>
    <div className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-md md:w-310 md:ml-67 flex py-4 border-b border-gray-300 gap-x-8"style={{fontFamily:'Times New Roman, Serif'}}>
      <div className="w-50">
      <h1 className="font-extrabold text-2xl px-12 " >{heading}</h1>
      </div>
    
   
    </div>
    </>
  )
}

export default Settingsheader