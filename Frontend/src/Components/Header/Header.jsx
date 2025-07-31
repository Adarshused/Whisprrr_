import React from "react";
import { useState , useEffect,useRef} from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
function Header(){
    const optionArr=[{label:"Features",value:["FAQ","Features"]}];
    const [open, setOpen] = useState(false);
    const [GetStarted,setGetStarted] = useState(false);
     const containerRef = useRef(null);
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
        <div ref={containerRef} className="flex gap-x-20 bg-white/30 backdrop-blur-md fixed  top-0 left-0  z-50 shadow-sm w-screen h-14 ">
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
            <div className="relative md:hidden px-4 py-4">
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
    </div>
        {open && (
          <div className=" w-1/2 h-120  fixed top-10 left-4  z-50 shadow-[0_4px_6px_rgba(82,53,232,0.5)] rounded-lg overflow-hidden" >
           <Dropdown options={optionArr}></Dropdown>
              
          </div>
        )}
        
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