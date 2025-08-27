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
//  console.log(curractive['SettingisActive'])
  return(
    <>
    <div className="flex">
    <div className="hidden md:block">
    <Settingleftpage/>
     </div>
    
    <div className="md:fixed mt-18 md:ml-63.5">
    {curractive['SettingisActive'] === "Profile" && <Profile/>}
    {curractive['SettingisActive'] === "Notifications" &&<Notification/>}
    {curractive['SettingisActive'] === "Privacy" &&<Privacy/>}
    {curractive['SettingisActive'] === "Security" && <Security/>}
    {curractive['SettingisActive'] === "Preference" &&<Preference/>}
    {curractive['SettingisActive'] === "Password" && <Password/>}
    </div>
    
   
    </div>
    </>
    )
}

export default Settings