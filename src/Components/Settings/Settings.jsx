import React from "react";
import Preference from "./Preference";
import Security from "./Security";
import Privacy from "./Privacy";
import Password from "./Password";
import Notification from "./Notification";
import Profile from "./Profile";
import Settingleftpage from "./Settingleftpage";
import { useSelector } from "react-redux";
function Settings(){
   
 const curractive= useSelector((state)=>state.CurrActive)
  return(
    <>
    <div className="flex">
    <div>
    <Settingleftpage/>
    <div className="fixed mt-18 ml-63.5">
    {curractive['SettingisActive'] === "Profile" && <Profile/>}
    {curractive['SettingisActive'] === "Notification" &&<Notification/>}
    {curractive['SettingisActive'] === "Privacy" &&<Privacy/>}
    {curractive['SettingisActive'] === "Security" && <Security/>}
    {curractive['SettingisActive'] === "Perference" &&<Preference/>}
    {curractive['SettingisActive'] === "Password" && <Password/>}
    </div>
    
    </div>
    
    </div>
    </>
    )
}

export default Settings