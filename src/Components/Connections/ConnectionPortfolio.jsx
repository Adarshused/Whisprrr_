import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ConnectionPortfolio(User){
     const [percInc,setpercInc]=useState("0");
     useEffect(()=>{
      setpercInc(Number((((Value['value'].prevD_up-Value['value'].prevPD_up)/Math.abs(Value['value'].prevPD_up))).toFixed(1)))
     },[])
     
      const Value=useSelector((state)=>state.CurrActive);
      console.log(Value)
       return (
        <>
        <div className="flex flex-col w-screen h-screen">
          <div className="flex mt-5 ml-12 w-310 h-23 border-b border-gray-300 gap-x-160">
            <div className="flex ">
             <img className="h-20 w-20 rounded-[50%]" src={Value['value'].img} alt="" />
              <div className="flex flex-col mt-3" style={{fontFamily:'Times New Roman, Serif'}}>
              <div className="flex ml-4 font-extrabold text-3xl gap-x-2" style={{fontFamily:'Times New Roman, Serif'}}>
                 <h1>{Value['value'].Title}</h1>
                 <h1>{Value['value'].name}</h1>
              </div>
              <h5 className="flex justify-center text-gray-400 text-sm" >{Value['value'].address}</h5>
              </div>
            </div>
            <div className="flex">
             <div className="flex flex-col">
                  <div className="flex font-extrabold text-3xl"  style={{fontFamily:'Times New Roman,Serif'}}>
                   <h1 >{Value['value'].upvote}</h1>
                  <div className="">
{percInc>0 && (<svg className="ml-3 "width="70" height="30" viewBox="0 0 70 30"
                  xmlns="http://www.w3.org/2000/svg">
                     <rect
                 x="0" y="0"
                width="70" height="30"
                rx="15"
                fill="#ECFDF7"
                stroke="#DAFBEF"
                />
                 
                <text style={{fontFamily:'Times New Roman,Serif'}}
                x="43"               
                y="15"               
                fill="#11CF8B"      
                font-size="14"
                font-family="sans-serif"
                text-anchor="middle"
                dominant-baseline="middle"
                >
            {percInc}%
              </text>
                <g transform="translate(13, 20)">
               <polygon
               points="-5,0 3,-10 10,0"
               fill="#11CF8B"       
               />
              </g>
             </svg>)}
              {percInc<0 && (
                <svg className="ml-3 "width="70" height="30" viewBox="0 0 70 30"
                  xmlns="http://www.w3.org/2000/svg">
                <rect
                 x="0" y="0"
                width="70" height="30"
                rx="15"
                fill="#FFEBF0"
                stroke="#FED7E0"
                />
                <text style={{fontFamily:'Times New Roman,Serif'}}
                x="43"               
                y="15"               
                fill="#FB3766"      
                font-size="14"
                font-family="sans-serif"
                text-anchor="middle"
                dominant-baseline="middle"
                >
            {percInc}%
              </text>
                <g transform="translate(13, 10)">
               <polygon
               points="-5,0 3,10 10,0"
               fill="#FB3766"       
               />
              </g>
             </svg>
              )}
                  </div>
                  </div>
                  {Value['value'].prevD_up>0 && (
                    <h1 className=" text-[#11CF8B]">+{Value['value'].prevD_up}</h1>
                  )}
                  {Value['value'].prevD_up<0 && (
                    <h1 className="text-[#FB3766]">-{Value['value'].prevD_up}</h1>
                  )}
             </div>
          </div>
           
          </div>
          
          <div className="flex flex-col">
           <div className="flex flex-col ">
              <h1 className="ml-12 mt-3 font-extrabold text-xl" style={{fontFamily:'Times New Roman,Serif'}}>About</h1>
              <h1 className="ml-12 max-w-300 whitespace-normal break-words leading-relaxed mt-3 text-sm text-gray-400">{Value['value'].about}</h1>
           </div>
          </div>
        </div>
        </>
       )
}

export default ConnectionPortfolio