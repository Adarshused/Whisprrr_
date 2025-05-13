import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ChangeStatus } from "../../Features/DashboardSlice";
function Dashboard_left(){

    const Dispatch=useDispatch();

    const [dashboard,setdashboard] = useState(true);
    const [connections,setconnections]=useState(false);
    const [announcements,setannouncements]=useState(false);
    const [portfolio,setportfolio]=useState(false);
    const [chat,setchat]=useState(false);
    const [setting,setsetting]=useState(false);
    
    const changeFeature=(currFeature)=>{
      Dispatch(ChangeStatus(currFeature));
      if(currFeature ==="Dashboard"){
        setdashboard(true);
        setannouncements(false);
        setconnections(false);
        setchat(false);
        setsetting(false);
        setportfolio(false);
      }
      else if(currFeature === "Connections"){
        setconnections(true);
        setdashboard(false);
       setannouncements(false);
       setchat(false);
       setsetting(false);
       setportfolio(false);
      }
      else if(currFeature === "Announcements"){
        setdashboard(false);
        setannouncements(true);
        setconnections(false);
        setchat(false);
        setsetting(false);
        setportfolio(false);
      }
      else if(currFeature === "Portfolio"){
        setdashboard(false);
        setannouncements(false);
        setconnections(false);
        setchat(false);
        setsetting(false);
        setportfolio(true);
      }
      else if(currFeature === "Chat"){
        setdashboard(false);
        setannouncements(false);
        setconnections(false);
        setchat(true);
        setsetting(false);
        setportfolio(false);
      }
      else if(currFeature === "Setting"){
        setdashboard(false);
                setannouncements(false);
                setconnections(false);
                setchat(false);
                setsetting(true);
                setportfolio(false);
      }
    }
     return (
        <>
        <div className="fixed top-0 left-0 flex flex-col h-screen border-r border-gray-300 w-1/6 gap-y-45">
            <div className="flex flex-col mt-25 ml-6 gap-y-5">
                <NavLink to="/dashboardpage">
            <div className="flex cursor-pointer" onClick={()=>{
                   changeFeature("Dashboard");
                   
            }}>
              <div className={`flex px-3 py-2 caret-purple-400   gap-x-2 w-50 rounded-lg ${dashboard ? "bg-[#F7F6FE] border border-purple-100" : ""}`}>
              <svg
              className="w-6 h-6 text-gray-800  dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
             >
      <path
        stroke={dashboard?"#5235E8":"black"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z"
      />
    </svg>
      <h2 className={dashboard?"font-extrabold font-['Times_New_Roman,_serif']":"text-gray-500"} >Dashboard</h2>
              </div>
            </div>
            </NavLink>
            <NavLink>
            <div className="flex cursor-pointer" onClick={()=>{
              changeFeature("Connections");
                    
            }
        }>
              <div className={`flex px-3 py-2 caret-purple-400   gap-x-2 w-50 rounded-lg ${connections ? "bg-[#F7F6FE] border border-purple-100" : ""}`}>
              <svg 
              class="w-6 h-6 text-gray-800 dark:text-white"
               aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
               width="24" 
               height="24" 
               fill="currentColor" 
               viewBox="0 0 24 24">
                <path 
   
                fill={connections?"#5235E8":"black"} 
                d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
                  </svg>

      <h2 className={connections?"font-extrabold font-['Times_New_Roman,_serif']":"text-gray-500"} >Connections</h2>
              </div>
            </div>
            </NavLink>
            <NavLink>
            <div className="flex cursor-pointer" onClick={()=>{
              changeFeature("Announcements")
                
            }}>
              <div className={`flex px-3 py-2 caret-purple-400   gap-x-2 w-50 rounded-lg ${announcements? "bg-[#F7F6FE] border border-purple-100" : ""}`}>
              <svg class="w-6 h-6 text-gray-800 dark:text-white" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" height="24" 
              fill="currentColor"
               viewBox="0 0 24 24">
  <path 
  fill={announcements?"#5235E8":"black"}
  d="M18.458 3.11A1 1 0 0 1 19 4v16a1 1 0 0 1-1.581.814L12 16.944V7.056l5.419-3.87a1 1 0 0 1 1.039-.076ZM22 12c0 1.48-.804 2.773-2 3.465v-6.93c1.196.692 2 1.984 2 3.465ZM10 8H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6V8Zm0 9H5v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3Z" clip-rule="evenodd"/>
</svg>
      <h2 className={announcements?"font-extrabold font-['Times_New_Roman,_serif']":"text-gray-500"} >Announcements</h2>
              </div>
            </div>
            </NavLink>
            <NavLink>
            <div className="flex cursor-pointer" onClick={()=>{
              changeFeature("Portfolio")
               
            }}>
              <div className={`flex px-3 py-2 caret-purple-400   gap-x-2 w-50 rounded-lg ${portfolio ? "bg-[#F7F6FE] border border-purple-100" : ""}`}>
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke={portfolio?"#5235E8":"black"}
   stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667"/>
</svg>


    
      <h2 className={portfolio?"font-extrabold font-['Times_New_Roman,_serif']":"text-gray-500"} >Portfolio</h2>
              </div>
            </div>
            </NavLink>
           
            <div className="flex cursor-pointer" onClick={()=>{
              changeFeature("Chat")
               
            }}>
              <div className={`flex px-3 py-2 caret-purple-400   gap-x-2 w-50 rounded-lg ${chat ? "bg-[#F7F6FE] border border-purple-100" : ""}`}>
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill={chat?"#5235E8":"black"} 
   d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6.616l-2.88 2.592C8.537 20.461 7 19.776 7 18.477V17H5a2 2 0 0 1-2-2V6Zm4 2a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7Zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-8 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm5 0a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z" clip-rule="evenodd"/>
</svg>
 <h2 className={chat?"font-extrabold font-['Times_New_Roman,_serif']":"text-gray-500"} >Chat</h2>
              </div>
            </div>
            </div>
           
            <div className="flex flex-col mt-25 ml-6 gap-y-5" >
            <div className="flex cursor-pointer" onClick={()=>{
              changeFeature("Setting")
                
            }}>
              <div className={`flex px-3 py-2 caret-purple-400   gap-x-2 w-50 rounded-lg ${setting ? "bg-[#F7F6FE] border border-purple-100" : ""}`}>
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke={setting?"#5235E8":"black"}
  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"/>
  <path stroke={setting?"#5235E8":"black"} 
  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg>



      <h2 className={setting?"font-extrabold font-['Times_New_Roman,_serif']":"text-gray-500"} >Settings</h2>
              </div>
            </div>
            </div>
        </div>
        </>
     )
}

export default Dashboard_left