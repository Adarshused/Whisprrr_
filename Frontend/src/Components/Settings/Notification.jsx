import React, { useState } from "react";

function Notification(){
    const [isticked_1,setisticked_1] = useState(false);
    const [isticked_2,setisticked_2] = useState(false);
    const [isticked_3,setisticked_3] = useState(false);
    const [phonenumber,setphonenumber]=useState("(+91) 9768 543 3xxx")
    return(
        <>
        <div className="flex flex-col  mt-8 ml-2 md:ml-8">
        <div className="flex flex-col md:flex-row gap-y-8">
          <div className="flex flex-col ml-8 md:ml-0">
          <h1 className="font-extrabold text-xl" style={{fontFamily:'Times New Roman,Serif'}}>Manage</h1>
           <h5 className="text-gray-400">Manage how you receive notifications</h5>
          </div>
          <div className="flex flex-col border md:ml-10 h-60 rounded-lg w-90 md:w-220 border-gray-300">
            <div className="flex ml-5 mt-8 gap-x-50 md:gap-x-180">
                  <h1 className=" font-extrabold" style={{fontFamily:'Times New Roman,Serif'}}>Email</h1>
                  <h1 className="cursor-pointer text-[#5235E8]  font-extrabold" style={{fontFamily:'Times New Roman,Serif'}}>Clear all</h1>
            </div>
            <div className="flex mt-5">
                   <div className="flex flex-col md:ml-5">
                    <div className="flex gap-x-2">
                      <svg className="cursor-pointer"width="40" height="40" viewBox="0 0 40 40">
                            <rect x="10" y="10" width="25" height="25" rx="3" ry="3" onClick={()=>setisticked_1(prev=>!prev)} fill={isticked_1?"#5235E8":"white"}stroke={isticked_1?"none":"gray"}>
                            </rect>
                            <polyline points="15 24 21 28 30 17" fill="none" stroke="white" strokeWidth="3" ></polyline>
                          </svg>
                          <h1 className=" mt-3 md:mt-2 text-gray-500 text-xs md:text-sm ">
                             When i receive notification from HOD's
                          </h1>
                    </div>
                         <div className="flex gap-x-2 ">
                           <svg className="cursor-pointer"width="40" height="40" viewBox="0 0 40 40">
                            <rect x="10" y="10" width="25" height="25" rx="3" ry="3" onClick={()=>setisticked_2(prev=>!prev)} fill={isticked_2?"#5235E8":"white"}stroke={isticked_2?"none":"gray"}>
                            </rect>
                            <polyline points="15 24 21 28 30 17" fill="none" stroke="white" strokeWidth="3" ></polyline>
                          </svg>
                          <h1 className="mt-3 md:mt-2 text-gray-500 text-xs md:text-sm">
                             Upon detecting a login from an unfamiliar device
                          </h1>
                         </div>
                            <div className="flex gap-x-2 ">
                     <svg className="cursor-pointer"width="40" height="40" viewBox="0 0 40 40">
                            <rect x="10" y="10" width="25" height="25" rx="3" ry="3" onClick={()=>setisticked_3(prev=>!prev)} fill={isticked_3?"#5235E8":"white"}stroke={isticked_3?"none":"gray"}>
                            </rect>
                            <polyline points="15 24 21 28 30 17" fill="none" stroke="white" strokeWidth="3" ></polyline>
                          </svg>
                           <h1 className="mt-4  md:mt-2 text-gray-500 text-xs md:text-sm">
                            Upon Achieving upotes and Unlocking New Rank
                          </h1>
                            </div>
                           
                          
             </div>
                   
                  
            </div>
            <div>

            </div>
          </div>
        </div>
        <div>

        </div>
        <div className="ml-auto mt-5">
          <div className="flex cursor-pointer py-2 relative px-2 justify-center w-25  h-10 rounded-md bg-[#5235E8] hover:bg-[#7C64ED] " style={{fontFamily:'Times New Roman,Serif'}}>
              <h3 className="font-extrabold flex  text-white">Save</h3>  
        </div>
        </div>
        </div>
        </>
    )
}

export default Notification