import React from "react";
import Dashboard_left from './Dashboard_left'
import Dashboardpage from "./Dashboardpage";
import { useSelector } from "react-redux";
import Connectionspage from "./Connectionspage";
import Announcementspage from "./Announcementspage";
import Portfoliopage from "./Portfoliopage";
import Profile from "../Settings/Profile.jsx";
import Settings from "../Settings/Settings.jsx";
import Chatpage from "./Chatpage";
function Dashboard(){
  const curractive= useSelector((state)=>state.CurrActive)
  return(
    <>
    <div className="flex">
    <div>
    <Dashboard_left/>
    <div className="fixed mt-18 ml-63.5">
    {curractive['isActive'] === "Dashboard" && <Dashboardpage/>}
    {curractive['isActive'] === "Connections" &&<Connectionspage/>}
    {curractive['isActive'] === "Announcements" &&<Announcementspage/>}
    {curractive['isActive'] === "Portfolio" && <Portfoliopage/>}
    {curractive['isActive'] === "Chat" &&<Chatpage/>}
    {curractive['isActive'] === "Profile" && <Profile/>}
    {curractive['isActive'] === "Setting" &&<Settings/>}

    </div>
    
    </div>
    
    </div>
    </>
  )
}

export default Dashboard