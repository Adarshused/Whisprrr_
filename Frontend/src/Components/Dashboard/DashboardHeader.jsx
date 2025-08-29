import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Profile from "../Settings/Profile.jsx";
import Settings from "../Settings/Settings.jsx";
import { ChangeStatus } from "../../Features/DashboardSlice.js";
import Avatar from "../../utils/avatar.jsx";

function DashboardHeader(props){
  // console.log(props.title)
  const Dispatch=useDispatch();  
   const [heading,setheading]=useState('');
  const [notification,setnotification]=useState(true);
  const [clickednotification,setclickednotification]=useState(false);
  const [open, setOpen] = useState(false);
  const [profilelogo,setprofilelogo]=useState("");
  const [Name, setName] = useState("")
  const [Firstname, setFirstname] = useState("")
  const [Lastname, setLastname] = useState("")
  const [title, settitle] = useState("")
  const [upvote, setupvote] = useState("")
  const curractive=useSelector((state)=>state.CurrActive)
      const [dashboard,setdashboard] = useState(true);
      const [connections,setconnections]=useState(false);
      const [announcements,setannouncements]=useState(false);
      const [portfolio,setportfolio]=useState(false);
      const [chat,setchat]=useState(false);
      const [setting,setsetting]=useState(false);
      
      const changeFeature=(currFeature)=>{
       if (currFeature != "Setting") Dispatch(ChangeStatus(currFeature));
        if(currFeature ==="Dashboard" ){
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
 
  useEffect(() => {
      const user = curractive['userData']
      // console.log(user.totalUpvote)
      if (user) {
        
        
        setName(user.name)
        setprofilelogo(user.img)
        setFirstname(user.firstname)
        setLastname(user.lastname)
        settitle(user.Title)
        setupvote(user.totalUpvote)
      }
      else console.log("ERROOOOOOOOOOOOORRRRRRr")
    }, [])
  useEffect(()=>{
    setheading(props.title);
  },[props])

  
const changefeature=(currFeature)=>{
Dispatch(ChangeStatus(currFeature));
}
  

  return (
    <>
    <div className="fixed top-0 left-0 md:w-310 bg-white/30 backdrop-blur-md md:ml-5 w-full md:ml-67 flex py-4 border-b border-gray-300 gap-x-4 md:gap-x-8"style={{fontFamily:'Times New Roman, Serif'}}>
       <div className="flex relative md:hidden px-3 py-3">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-6 h-6 flex flex-col justify-center items-center focus:outline-none"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top bar */}
          <line
            x1="5" y1="7" x2="19" y2="7"
            stroke="black" strokeWidth="2" strokeLinecap="round"
            className={`
              transform origin-center
              transition-transform duration-300
              ${open ? 'translate-y-[3.5px] rotate-45' : ''}
            `}
          />
          {/* Middle bar */}
          <line
            x1="5" y1="12" x2="19" y2="12"
            stroke="black" strokeWidth="2" strokeLinecap="round"
            className={`
              transition-opacity duration-300
              ${open ? 'opacity-0' : 'opacity-100'}
            `}
          />
          {/* Bottom bar */}
          <line
            x1="5" y1="17" x2="19" y2="17"
            stroke="black" strokeWidth="2" strokeLinecap="round"
            className={`
              transform origin-center
              transition-transform duration-300
              ${open ? '-translate-y-[3.5px] -rotate-45' : ''}
            `}
          />
        </svg>
      </button>

      {open && (
        <>
        <div className= {` flex flex-col  transition-all duration-300 ease-in-out 
        transform origin-top-right w-screen h-screen gap-y-10 ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
         <div className="flex flex-col w-full  h-1/3  gap-y-8">
             <div className="flex  px-4 gap-x-9">
                <div className="flex ">
                 <Avatar firstName={Firstname} lastName={Lastname} avatarUrl={profilelogo} size={56} className="" />
                </div>
                <div className="flex flex-col gap-y-2">
                   <div className="flex flex-col">
                  <div className="flex ">
                    <h1 className="font-extrabold text-2xl" style={{ fontFamily: 'Times New Roman, Serif' }}>{title[0]}</h1>
                    <h1 className={`font-extrabold text-2xl flex ${upvote >= 5000 ? 'text-[#FB3766]' : upvote >= 2000 && upvote < 5000 ? 'text-[#5235E8]' : upvote >= 500 && upvote < 2000 ? 'text-[#DAF727]' : 'text-black '}`} style={{ fontFamily: 'Times New Roman, Serif' }}>{title.slice(1)}</h1>
                    <h1 className=" ml-3 text-2xl font-extrabold" style={{ fontFamily: 'Times New Roman,Serif' }}>{Name}</h1>
                  </div>
                </div>
                <h5   className="text-xs whitespace-normal break-words w-40 bg-gradient-to-r from-[#197DF6] to-[#19CEF6] bg-clip-text text-transparent"style={{ fontFamily: 'Times New Roman, Serif' }}>
                  Build Your Career with Purpose and Momentum!
                </h5>
                </div>
             </div>

             <div className="flex px-4 gap-x-13">
                <div>
               <div className="flex flex-col w-16 h-16  mt-2  py-1  px-1 border border-[#D6D1FA] rounded-md">
                    <svg class="ml-3 mt-2 w-9 h-9  text-gray-800 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="#5235E8" viewBox="0 0 24 24">
                      <path fill-rule="#5235E8" d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                    </svg>
                     <h6 className="text-[10px] bg-gradient-to-r from-[#5235E8] to-[#8B6CFF] bg-clip-text text-transparent">Connections</h6>
                    </div>
                </div>
                <div>
                      <div className="flex flex-col w-16 h-16  mt-2  py-1  px-1 border border-[#D6D1FA] rounded-md">

                        <svg className="mt-1 ml-3 w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path fill="#5235E8" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
                        </svg>
                        <h6 className="mt-1 ml-1 text-[10px] bg-gradient-to-r from-[#5235E8] to-[#8B6CFF] bg-clip-text text-transparent">Watch List</h6>

                      </div>
                </div>
                <div>
                 <div className="flex flex-col w-16 h-16  mt-2  py-1  px-1 border border-[#D6D1FA] rounded-md">

                        <svg class="w-10 h-10 mt-2 ml-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path fill="#5235E8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" />
                      <g transform=" translate(7,5) scale(0.5)">
                        <path
                          fill="#5235E8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"
                        />
                      </g>
                    </svg>
                        <h6 className="mt-1 ml-3 text-[10px] bg-gradient-to-r from-[#5235E8] to-[#8B6CFF] bg-clip-text text-transparent">Portfolio</h6>

                      </div>
                </div>
             </div>
         </div>

                <div className="flex  flex-col h-screen w-screen">
                  <div className="flex flex-col  ml-6 gap-y-5">
                    <NavLink to="/dashboardpage">
                      <div className="flex cursor-pointer" onClick={() => {
                        changeFeature("Dashboard");
                        setOpen(false)
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
                              stroke={dashboard ? "#5235E8" : "black"}
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z"
                            />
                          </svg>
                          <h2 className={dashboard ? "font-extrabold font-['Times_New_Roman,_serif']" : "text-gray-500"} >Dashboard</h2>
                        </div>
                      </div>
                    </NavLink>
                    <NavLink to="connectionspage">
                      <div className="flex cursor-pointer" onClick={() => {
                        changeFeature("Connections");
                         setOpen(false)
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

                              fill={connections ? "#5235E8" : "black"}
                              d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd" />
                          </svg>

                          <h2 className={connections ? "font-extrabold font-['Times_New_Roman,_serif']" : "text-gray-500"} >Connections</h2>
                        </div>
                      </div>
                    </NavLink>
                    <NavLink>
                      <div className="flex cursor-pointer" onClick={() => {
                        changeFeature("Announcements")
                           setOpen(false)
                      }}>
                        <div className={`flex px-3 py-2 caret-purple-400   gap-x-2 w-50 rounded-lg ${announcements ? "bg-[#F7F6FE] border border-purple-100" : ""}`}>
                          <svg class="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              fill={announcements ? "#5235E8" : "black"}
                              d="M18.458 3.11A1 1 0 0 1 19 4v16a1 1 0 0 1-1.581.814L12 16.944V7.056l5.419-3.87a1 1 0 0 1 1.039-.076ZM22 12c0 1.48-.804 2.773-2 3.465v-6.93c1.196.692 2 1.984 2 3.465ZM10 8H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6V8Zm0 9H5v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3Z" clip-rule="evenodd" />
                          </svg>
                          <h2 className={announcements ? "font-extrabold font-['Times_New_Roman,_serif']" : "text-gray-500"} >Announcements</h2>
                        </div>
                      </div>
                    </NavLink>
                    <NavLink>
                      <div className="flex cursor-pointer" onClick={() => {
                        changeFeature("Portfolio")
                          setOpen(false)

                      }}>
                        <div className={`flex px-3 py-2 caret-purple-400   gap-x-2 w-50 rounded-lg ${portfolio ? "bg-[#F7F6FE] border border-purple-100" : ""}`}>
                          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke={portfolio ? "#5235E8" : "black"}
                              stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667" />
                          </svg>



                          <h2 className={portfolio ? "font-extrabold font-['Times_New_Roman,_serif']" : "text-gray-500"} >Portfolio</h2>
                        </div>
                      </div>
                    </NavLink>

                    <div className="flex cursor-pointer" onClick={() => {
                      changeFeature("Chat")
                        setOpen(false)

                    }}>
                      <div className={`flex px-3 py-2 caret-purple-400   gap-x-2 w-50 rounded-lg ${chat ? "bg-[#F7F6FE] border border-purple-100" : ""}`}>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path fill={chat ? "#5235E8" : "black"}
                            d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6.616l-2.88 2.592C8.537 20.461 7 19.776 7 18.477V17H5a2 2 0 0 1-2-2V6Zm4 2a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7Zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-8 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm5 0a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z" clip-rule="evenodd" />
                        </svg>
                        <h2 className={chat ? "font-extrabold font-['Times_New_Roman,_serif']" : "text-gray-500"} >Chat</h2>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-3 ml-6 gap-y-5" >
            <div className="flex cursor-pointer" onClick={()=>{
              changeFeature("Setting")
                
            }}>
              <div className={`flex px-3 py-2 caret-purple-400   gap-x-2 w-50 rounded-lg ${setting ? " border border-purple-100" : ""}`}>
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke={setting?"#5235E8":"black"}
  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"/>
  <path stroke={setting?"#5235E8":"black"} 
  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg>



      <h2 className={setting?"font-extrabold text-[#5235E8] font-['Times_New_Roman,_serif']":"text-gray-500"} >Settings</h2>
           <svg
          className=" cursor-pointer w-5 h-5 mt-2 ml-auto text-extrabold text-black-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 35  35"
          stroke="currentColor"
          onClick={()=>{setContactOpen(prev=>!prev)
            if(Featureopen) setFeatureOpen(false)
            if(Developeropen) setDeveloperOpen(false)
          }}
        >
          <path strokeLinecap="round" stroke={setting?"#5235E8" : "black"} strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
           </svg>
              </div>
            </div>
            </div>

         </div>
        </div>
        
        </>
      )}
    </div>
      <div className="md:w-50">
        
          { heading === "ConnectionPortfolio" && (
              <div className="flex ml-5 mt-2 ">
                <div className="flex gap-x-2 ">
                  <div className="flex gap-x-2">
 <svg class="w-6 h-6 text-gray-800 cursor-pointer dark:text-white" onClick={()=>{
  changeFeature("Connections");
 }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="#9C9CAB" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
               </svg>
               <h1 className="text-[#9C9CAB] h-full">|</h1>
                  </div>
              <div className="flex">             
                 <h1 className="font-extrabold text-lg   text-gray-400">Connections</h1>
               <div className="  flex font-extrabold  text-lg gap-x-2 " style={{fontFamily:'Times New Roman,Serif'}}>
            <div className="flex ">
            <h1 className="">/{name.Title}</h1>
            </div>
           <h1>{name.Name}</h1>
           </div>
            </div>
                </div>
              </div>
              
            )}
          
   {heading !== "ConnectionPortfolio" && (<h1 className="font-extrabold mt-2 md:mt-0 text-2xl  md:px-12 " >{heading}</h1>)}   
      </div>
    
     <div className="flex ml-20 md:ml-160 gap-x-5">
     <div className="flex hidden md:block cursor-pointer py-2 relative px-5 justify-center md:w-50  h-10 rounded-md bg-[#5235E8] hover:bg-[#7C64ED] ">
              <h3 className="font-extrabold flex  text-white">Connect with Faculties</h3>  
     </div>
     {/* <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke={notification?"#5235E8":"black"} 
   stroke-linecap="round"
   stroke-linejoin="round" 
   stroke-width="1.5"
    d="M12 5.365 a 5.338 5.338 0 0 1 5.133 5.368 v1.8 c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292 H5.538 C5 18 5 17.301 5 16.708 c0-1.193 1.867-1.789 1.867-4.175 v-1.8 A5.338 5.338 0 0 1 12 5.365 Z M 8.733 20 c .094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112 "/>
</svg> */}
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 25 25"
  width="24"
  height="24"
  className="w-6 h-6 mt-2 md:mt-0  md:w-8 md:h-8 cursor-pointer"
  onClick={()=>setclickednotification(prev=>!prev)}
>
  <path
    d="M12 5.365
       a5.338 5.338 0 0 1 5.133 5.368
    
       v1.8
       c0 2.386 1.867 2.982 1.867 4.175
         0 .593 0 1.292-.538 1.292
       H5.538
       C5 18 5 17.301 5 16.708
       c0-1.193 1.867-1.789 1.867-4.175
       v-1.8
       A5.338 5.338 0 0 1 12 5.365
       
       M10 21
     
       a3.48 3.48 0 0 0 4.646 0
       "
   stroke-linecap="round"
    stroke={clickednotification?"#5235E8":"black"}
    fill="none"
    
  />
    {/* <circle cx="8.733" cy="20" r="" fill="red"/> */}
  { notification && (
     <circle cx="16"cy="6"r="2"fill="red"  />
  )

  }
</svg>
<NavLink to="/settingpage">
  <button  className="cursor-pointer rounded-full mt-1 md:mt-0 w-10  h-10 font-extrabold text-white bg-[#DEDAFB]" onClick={(e)=>{changefeature("Setting")}} >
   <img className="cursor-pointer rounded-full  w-10 h-10 font-extrabold text-white bg-[#DEDAFB]" src={profilelogo} alt="" />
  </button>
</NavLink>


     </div>
    </div>
    </>
  )
}

export default DashboardHeader