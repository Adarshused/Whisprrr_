import React from "react";
import Dashboard_left from './Dashboard_left.jsx'
import Dashboardpage from "./Dashboardpage.jsx";
import { useSelector } from "react-redux";
import Connectionspage from "../Connections/Connectionspage.jsx";
import ConnectionPortfolio from "../Connections/ConnectionPortfolio.jsx";
import Announcementspage from "./Announcementspage.jsx";
import Portfoliopage from "../Portfolio/Portfoliopage.jsx";
import Profile from "../Settings/Profile.jsx";
import Settings from "../Settings/Settings.jsx";
import Chatpage from "./Chatpage.jsx";
function Dashboard(){
  const curractive= useSelector((state)=>state.CurrActive)
  return(
    <>
    <div className="flex">
    <div>
      <div className="hidden md:block">
        <Dashboard_left/>
      </div>
    
    <div className="fixed mt-18 ml-63.5">
    {curractive['isActive'] === "Dashboard" && <Dashboardpage/>}
    {curractive['isActive'] === "Connections" &&<Connectionspage/>}
    {curractive['isActive'] === "Announcements" &&<Announcementspage/>}
    {curractive['isActive'] === "Portfolio" && <Portfoliopage/>}
    {curractive['isActive'] === "Chat" &&<Chatpage/>}
    {curractive['isActive'] === "Profile" && <Profile/>}
    {curractive['isActive'] === "Setting" &&<Settings/>}
    {curractive['isActive'] === "ConnectionPortfolio" && <ConnectionPortfolio/>}
    </div>
    
    </div>
    
    </div>
    </>
  )
}

export default Dashboard