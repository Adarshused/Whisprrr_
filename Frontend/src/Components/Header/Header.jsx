import React from "react";
import { useState , useEffect,useRef} from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

function Header(){
    const optionArr=[{label:"Features",value:["FAQ","Features"]}];
    const [open, setOpen] = useState(false);
    const [GetStarted,setGetStarted] = useState(false);
    const containerRef = useRef(null);
    const [dashboard,setdashboard] = useState(true);
          const [connections,setconnections]=useState(false);
          const [announcements,setannouncements]=useState(false);
          const [portfolio,setportfolio]=useState(false);
          const [chat,setchat]=useState(false);
          const [setting,setsetting]=useState(false);
          


    useEffect(() => {
        function handleClickOutside(event) {
          if (containerRef.current && !containerRef.current.contains(event.target)) {
            setOpen(false)
          }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);
    return(
        <>

        <div ref={containerRef} className="flex gap-x-20 bg-white/30 backdrop-blur-md fixed  top-0 left-0  z-50 shadow-sm w-screen md:h-14 ">
             <div className="hidden md:block flex gap-x-2 px-5 py-6 md:ml-160 text-sm font-medium">
                {/* <div className="flex ">
                <label htmlFor="" className="gap-x-2 ">Features</l abel>
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
             <div className={`flex flex-col  relative md:hidden   py-3 ${open? 'bg-[linear-gradient(180deg,rgba(82,53,232,0.02)_0%,rgba(82,53,232,0.1)_100%)]':' '}`}>
                  <button
                    onClick={() => setOpen(o => !o)}
                    className="w-6 h-6 flex flex-col ml-5 justify-center items-center focus:outline-none"
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
                    <div className= {` flex flex-col ml-8 transition-all duration-300 ease-in-out 
                    transform origin-top-right w-screen h-screen  ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                      <div className="flex flex-col  ">
                       <h2 className='text-gray-500 px-5 py-3 font-extrabold text-md border-b w-75' style={{fontFamily:'Times New Roman, Serif'}}>Developer</h2>
                    <div className="flex ">
                      <div className="w-24">
                         <svg className="w-40 ml-10" viewBox="0 0 340 140" width="340" height="70" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <defs>
                      <marker id="rounded-arrow" markerWidth="14" markerHeight="14" refX="9" refY="5" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 Q5,5 0,10 L10,5 Z"  fill="#6B46C1" />
                      </marker>
                    </defs>

                    <circle cx="16" cy="16" r="3.5"  fill="#6B46C1" />

                    <path
                      d="M16 16 L16 48 A12 12 0 0 0 28 60 L100 60"
                      fill="none"
                      stroke="#6B46C1"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="8 6"
                      markerEnd="url(#rounded-arrow)"
                    />
                  </svg>
                      </div>
                       <div className="flex flex-col mt-3">
                          <div className=' cursor-pointer w-full flex  py-2 gap-x-3 active:text-gray-500' style={{fontFamily:'Times New Roman, Serif'}}>
                            <svg className="w-1 h-1 mt-2" viewBox="0 0 5 5" width="5" height="5" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#6B46C1" />
                          </svg>
                            <div className="flex gap-x-3">
                              <img className='mb-1' src="/assests/features_1.svg" alt="" />
              <h2 className='font-extrabold'>About</h2>
                            </div>
              
            </div>
            <div className=' cursor-pointer w-full flex py-2 gap-x-2 active:text-gray-500' style={{fontFamily:'Times New Roman, Serif'}}>
                          <svg className="w-1 h-1 mt-2" viewBox="0 0 5 5" width="5" height="5" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#6B46C1" />
                          </svg>

                 <div className="flex gap-x-3">
                  <img className='mb-1' src="/assests/feature_3.svg" alt="" />
              <h2 className='font-extrabold'>FAQs</h2>
                 </div>
              
            </div>
            <div className='cursor-pointer w-full flex py-2 gap-x-3  active:text-gray-500' style={{fontFamily:'Times New Roman, Serif'}}>
               <svg className="w-1 h-1 mt-2" viewBox="0 0 5 5" width="5" height="5" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#6B46C1" />
                          </svg>

              <div className="flex gap-x-3">
                <img className='mb-1' src="/assests/feature_4.svg" alt="" />
              <h2 className='font-extrabold'>Support</h2>
              </div>
              
            </div>

                       </div>
                      </div>    
                  
                      </div>
                      
                     <div className="flex flex-col mt-8 ">
                       <h2 className='text-gray-500 px-5 py-3 font-extrabold text-md border-b w-75' style={{fontFamily:'Times New Roman, Serif'}}>Features</h2>
                    <div className="flex ">
                      <div className="w-24">
                         <svg className="w-40 ml-10" viewBox="0 0 340 140" width="340" height="70" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <defs>
                      <marker id="rounded-arrow" markerWidth="14" markerHeight="14" refX="9" refY="5" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 Q5,5 0,10 L10,5 Z"  fill="#6B46C1" />
                      </marker>
                    </defs>

                    <circle cx="16" cy="16" r="3.5"  fill="#6B46C1" />

                    <path
                      d="M16 16 L16 48 A12 12 0 0 0 28 60 L100 60"
                      fill="none"
                      stroke="#6B46C1"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="8 6"
                      markerEnd="url(#rounded-arrow)"
                    />
                  </svg>
                      </div>
                       <div className="flex flex-col mt-3">
                          <div className=' cursor-pointer w-full flex  py-2 gap-x-3 active:text-gray-500' style={{fontFamily:'Times New Roman, Serif'}}>
                            <svg className="w-1 h-1 mt-2" viewBox="0 0 5 5" width="5" height="5" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#6B46C1" />
                          </svg>
                            <div className="flex gap-x-3">
                              <img className='mb-1' src="/assests/feature_2.svg" alt="" />
              <h2 className='font-extrabold'>Blog</h2>
                            </div>
              
            </div>
            <div className=' cursor-pointer w-full flex py-2 gap-x-2 active:text-gray-500' style={{fontFamily:'Times New Roman, Serif'}}>
                          <svg className="w-1 h-1 mt-2" viewBox="0 0 5 5" width="5" height="5" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#6B46C1" />
                          </svg>

                 <div className="flex gap-x-3">
                  <img className='mb-1' src="/assests/dashboard_icon.svg" alt="" />
              <h2 className='font-extrabold'>Dashboard</h2>
                 </div>
              
            </div>
    
                       </div>
                      </div>    
                  
                      </div>
                        <div className="flex flex-col mt-8 ">
                       <h2 className='text-gray-500 px-5 py-3 font-extrabold text-md border-b w-75' style={{fontFamily:'Times New Roman, Serif'}}>Contact us</h2>
                    <div className="flex ">
                      <div className="w-24">
                         <svg className="w-40 ml-10" viewBox="0 0 340 140" width="340" height="70" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <defs>
                      <marker id="rounded-arrow" markerWidth="14" markerHeight="14" refX="9" refY="5" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 Q5,5 0,10 L10,5 Z"  fill="#6B46C1" />
                      </marker>
                    </defs>

                    <circle cx="16" cy="16" r="3.5"  fill="#6B46C1" />

                    <path
                      d="M16 16 L16 48 A12 12 0 0 0 28 60 L100 60"
                      fill="none"
                      stroke="#6B46C1"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="8 6"
                      markerEnd="url(#rounded-arrow)"
                    />
                  </svg>
                      </div>
                       <div className="flex flex-col mt-3">
                          <div className=' cursor-pointer w-full flex  py-2 gap-x-3 active:text-gray-500' style={{fontFamily:'Times New Roman, Serif'}}>
                            <svg className="w-1 h-1 mt-2" viewBox="0 0 5 5" width="5" height="5" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#6B46C1" />
                          </svg>
                            <div className="flex gap-x-3">
                                <img className='mb-1' src="/assests/mail_icon_up.svg" alt="" />
              <h2 className='font-extrabold'>Mail</h2>
                            </div>
              
            </div>
            <div className=' cursor-pointer w-full flex py-2 gap-x-2 active:text-gray-500' style={{fontFamily:'Times New Roman, Serif'}}>
                          <svg className="w-1 h-1 mt-2" viewBox="0 0 5 5" width="5" height="5" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="#6B46C1" />
                          </svg>

                 <div className="flex gap-x-3">
                 <img className='mb-1 relative' src="/assests/linkedin_icon.svg" alt="" />
              <img className='absolute mt-[3px] ml-[2px]' src="/assests/linkedIn_circle.svg" alt="" />
              <h2 className='font-extrabold'>LinkedIn</h2>
                 </div>
              
            </div>
          

                       </div>
                      </div>    
                  
                      </div>
                     <div className="flex font-extrabold mt-10 gap-x-2" style={{fontFamily:'Times New Roman, Serif'}}>
                        <h1 className="mt-3">Want to Join?</h1>
                    <NavLink to="/signup">
                     <button className="cursor-pointer border-1 h-12 ml-6 md:w-30 w-25 bg-[#5235E8] active:bg-[#755DED] shadow-[0_4px_6px_rgba(82,53,232,0.5)]
 text-white  font-medium  rounded-lg border-purple-300 " onClick={() => setOpen(o => !o)}>Get Started</button>

                    </NavLink>
                     <h1 className="mt-3"> Now! </h1>
                     </div>
                </div>
                    
                    </>
                  )}
                </div>

        
             <div className="flex gap-x-4 px-2 py-2   font-serif">
                <NavLink to="/signin">
                <button className=" cursor-pointer border-1 h-10 font-medium rounded-md border-purple-300 px-3 py-1 hover:bg-[#5235E8] active:text-white active:bg-[#5235E8] hover:text-white">Sign In</button>
                </NavLink>
               
                <NavLink to="/signup">
                <button className=" cursor-pointer border-1 h-10 font-medium  rounded-md border-purple-300 text-[#5235E8] px-3 py-1 hover:bg-[#5235E8] active:bg-[#5235E8] active:text-white hover:text-white" onClick={()=>{
                  setGetStarted(prev=>!prev)
                }} >Get Started</button>

                </NavLink>
               
                
             </div>
        </div>
        </>
    )
}
export default Header