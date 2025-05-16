import React from "react";

function Connectionspage(){
    return(
        <>
        <div className="flex flex-col mt-10 ml-10 w-300 gap-y-5">
           <div className="flex border w-full h-20 border-gray-300 shadow-sm rounded-lg">
                <div className="flex mt-4 ml-4">
                   <div className="w-10 h-10  flex justify-center bg-[#F7F6FE]   rounded-md border border-[#EFEDFD]">
                    <div className=" w-8 h-8 mt-1 py-1 bg-white  px-1 border border-[#D6D1FA] rounded-md">
                      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5235E8" viewBox="0 0 24 24">
  <path fill-rule="#5235E8" d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
</svg>

                    </div>
                   </div>
                   <div className="flex flex-col ml-4">
               <h1 className="font-extrabold text-lg " style={{fontFamily:'Times New Roman,Serif'}}>Follow your favorite faculties with Watchlist</h1>
               <div className="flex gap-x-1">
               <h5 className="text-sm text-gray-400">Tap the </h5>
               <svg className="mt-1 w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
     <path stroke="gray" stroke-width="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
       </svg>

                 <h5 className="text-sm text-gray-400 " >at the right of an faculty's list to add to your Watchlist.</h5>
               </div>
                   </div>
                   
                </div>
                <div className="mt-5 ml-130  flex cursor-pointer py-2 relative px-2 justify-center w-45  h-10 rounded-md bg-[#5235E8] hover:bg-[#7C64ED] " style={{fontFamily:'Times New Roman,Serif'}}>
              <h3 className="font-extrabold flex  text-white">View Connections</h3>  
             </div>
           </div>
            <div className="flex gap-x-5">
            <div className="flex w-220 h-10 rounded-lg border border-gray-300 shadow-sm gap-x-3">
                <svg className="w-6 h-6 mt-2 ml-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="#9C9CAB" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
     </svg>
           <input className="w-full h-full outline-none text-[#9C9CAB]" placeholder="Search Your Peer" type="text" />
            </div>
            <div className="flex w-35 h-10 border  border-gray-300 shadow-sm rounded-lg " >
                  <svg className="mt-1 ml-4 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
     <path stroke="#5235E8" stroke-width="1" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
       </svg>
          <h1 className="mt-2 ml-2 font-extrabold text-[#5235E8] text-sm" style={{fontFamily:'Times New Roman,Serif'}}> Watchlist</h1>
            </div>
           <div className="flex w-35 h-10 border border-gray-300 shadow-sm rounded-lg " >
                <svg class="w-6 h-6 mt-2 ml-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="#5235E8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"/>
 <g transform=" translate(7,5) scale(0.5)">
    <path
      stroke="#5235E8"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"
    />
  </g>
</svg>

          <h1 className="mt-2 ml-1 font-extrabold text-[#5235E8]" style={{fontFamily:'Times New Roman,Serif'}}> Portfolio</h1>
            </div>
            </div>
            <div className="flex flex-col">
              <div className="flex w-full h-10 rounded-lg  bg-[#F9F9FA] font-extrabold " style={{fontFamily:'Times New Roman,Serif'}}>
                <div className="flex w-full h-full mt-2 ml-3 text-gray-400 gap-x-40">
                     <h1>Name</h1>
                     <h1 className="ml-35">Upvote</h1>
                     <h1>Status</h1>
                     <h1>Change %</h1>
                     <h1>Last(24H)</h1>
                </div>
              
              </div>

            </div>
        </div>
        </>
    )
}

export default Connectionspage