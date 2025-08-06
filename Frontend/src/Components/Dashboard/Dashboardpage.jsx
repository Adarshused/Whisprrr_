import React, { useDebugValue, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
function Dashboardpage(){
  const [curr_leaderboard_page,setcurr_leaderboard_page]=useState(0);
  const [end_leaderboard_page,setend_leaderboard_page]=useState(10);
  const[timeline,settimeline]=useState("Weekly");
    const [currupvote,setcurrupvote]=useState("2.1k");
    const [currupvote_,setcurrupvote_]=useState("200000");
    const [percentageIncrease_oa,setpercentageIncrease_oa]=useState("1.37%");
    const [percentageIncrease_24h,setpercentageIncrease_24h]=useState("5.47%");
    const [upvote_24h,setupvote_24h]=useState("50");
    const [Rank,setRank]=useState("20")
    const [status,setstatus]=useState("Faculty");
    const [width,setwidth]=useState("190")
    const [facultyw,setfacultyw] =useState("");
    const [seniorfacultyw,setseniorfacultyw]=useState("");
    const [masterw,setmasterw]=useState("");
    const [grandmasterw,setgrandmasterw]=useState("");
   const [userDetail,setuserDetail]=useState([]);
   const [ConectionDetail,setConnectionDetail]=useState([]);
    const [participants,setparticipants]=useState("10000");
    const [counter,setcounter]=useState(1)
    const [change,setchange]=useState()
    
    
    const cvalues=[
      {
        'name':'Dinesh',
        'Title':'Dr',
        'img':"/assests/Dinesh.png",
        'upvote':'9800',
        'receive':'130',
        'date':'10/05/25',
      },
      {
        'name':'Nikita',
        'Title':'Ms',
        'img':"/assests/nikita.jpg",
        'upvote':'3400',
        'receive':'50',
        'date':'9/05/25',
      },
      {
        'name':'Bhasin',
        'Title':'Dr',
        'img':"/assests/bhasin.png",
        'upvote':'20000',
        'receive':'200',
        'date':'9/05/25',
      },
      
      
    ]
    // const values=[
    //   {
    //     'name':'Monika',
    //     'Title':'Dean',
    //     'img':"/assests/Monika.jpg",
    //     'upvote':'20000'
    //   },
    //   {
    //     'name':'komal',
    //     'Title':'Prof',
    //     'img':"/assests/komal.jpg",
    //     'upvote':'11000'
    //   },
    //   {
    //     'name':'Hithesh',
    //     'Title':'Dean',
    //     'img':"/assests/hithesh.jpg",
    //     'upvote':'4900'
    //   },
    //   {
    //     'name':'Kunal',
    //     'Title':'Prof',
    //     'img':"/assests/kunal.jpg",
    //     'upvote':'4600'
    //   },
    //   {
    //     'name':'Naina',
    //     'Title':'Ms',
    //     'img':'/assests/naina.jpg',
    //     'upvote':'2500'
    //   },
    //   {
    //     'name':'Ishita',
    //     'Title':'Ms',
    //     'img':'/assests/Ishita.jpg',
    //     'upvote':'1589'
    //   }
    // ]
    const My_portfolio=[
      {
        'previous_upvotes':'56',
        'previous_downvotes':'0',
        'date':'May 10, 2025',
        'start_time':'12pm',
        'end_time':'4pm',
        'per_upvote':'46%',
      },
      {
        'previous_upvotes':'10',
        'previouse_downvotes':'5',
        'date':'May 09, 2025',
        'start_time':'3pm',
        'end_time':'5pm',
        'per_upvote':'24%',
      }      
    ]
    const y_axis_month=[]
    const y_axis_week=[2240,2270,45,300,23,1,400]
    const y_labels_5k=[0,100,250,500,1000,5000]
    const y_labels_5k_points=[]
    const y_labels_50k_points=[]
    const y_labels_50k=[0,1000,2500,5000,10000,50000]
     const svg = document.getElementById('graph');
    const tracker = document.getElementById('tracker');
    const [maxweek,setmaxweek]=useState()
    const [maxmonth,setmaxmonth]=useState()
    
    const curractive= useSelector((state)=>state.CurrActive)

    function ceilThreshold(arr, target){
      let lo=0, hi=arr.length-1,lower_bound=-1,upper_bound=-1;
      while(lo<=hi){
        let mid=Math.floor((hi+lo)/2);
        if(arr[mid]>= target){
          ans=arr[mid];
          idx=mid;
          hi=mid-1;
        }
        else lo=mid+1;
      }
      if(lower_bound+1<arr.length){
          upper_bound=lower_bound+1;
          return {lower_bound,upper_bound};
      } 
     return {lower_bound,upper_bound};
    }
    // Same points used to draw the polyline
   
    const sorted_cvalues=[...cvalues].sort((a,b)=>b.upvote-a.upvote);
    // const sorted_values=[...values].sort((a,b)=>b.upvote-a.upvote);
    const leaderBoard = curractive['leaderBoard']
    console.log(leaderBoard)
    useEffect(()=>{setuserDetail(leaderBoard)},[leaderBoard])
    useEffect(()=>setConnectionDetail(sorted_cvalues),[]);
   const increment=()=>{
    setcurr_leaderboard_page(prev=>Math.min(prev+1,end_leaderboard_page));
   }

   const decrement=()=>{
    setcurr_leaderboard_page(prev=>Math.max(prev-1,0));
   }
      let changePerc=null;
   const Calculate_change=(currUp,prevUp)=>{
     changePerc = prevUp
      ? ((currUp- prevUp) / Math.abs(prevUp)) * 100
      : 0;
      
   }
   useEffect(()=>{setchange(changePerc);},[changePerc])
    useEffect(()=>{
     if(status==="Faculty"){
      const per = currupvote_/500;
      const new_width=per*width;
      setfacultyw(new_width);
     }
     else if(status==="Senior Faculty"){
      const fper=500/2000;
      const fw=fper*width;
      
      let dup_width=width;
      setfacultyw(fw);
      let curr_upvote=currupvote_-500;
      dup_width-=fw;
      const sfper=curr_upvote/1500;
     
      const sfw=sfper*dup_width;
      setseniorfacultyw(sfw);
      console.log(sfw)
     }
     else if(status === "Master"){
      const fper=500/5000;
      const fw=fper*width;
      let dup_width=width;
      setfacultyw(fw);
      const sfper=1500/4500;
      dup_width-=fw;
      const sfw=sfper*dup_width;
      setseniorfacultyw(sfw);
      const curr_upvote=currupvote_-2000;
      const  mper=curr_upvote/3000;
      dup_width-=sfw;
      const mw=mper*dup_width;
      setmasterw(mw);
      
     }
     else{
      const fper=500/20000;
      const fw=fper*width;
      let dup_width=width;
      setfacultyw(fw);
      const sfper=1500/19500;
      dup_width-=fw;
      const sfw=sfper*dup_width;
      setseniorfacultyw(sfw);
      const mper=3000/18000;
      dup_width-=sfw;
      const mw=mper*dup_width;
      setmasterw(mw);
      const curr_upvote=currupvote_-5000;
      const gmper=curr_upvote/15000;
      dup_width-=mw;
      const gmw=gmper*dup_width;
      setgrandmasterw(gmw);
      console.log(fw,sfw,mw,gmw)
     }
    },[status])
    useEffect(()=>{
      if(currupvote_<=500 ) setstatus("Faculty");
      else if(currupvote_>500 && currupvote_<=2000) setstatus("Senior Faculty");
      else if(currupvote_>2000 && currupvote_<=5000) setstatus("Master");
      else if(currupvote_>5000) setstatus("Grand Master");
    },[currupvote_])
return(
    
    <>
    <div className="flex h-screen w-screen ">
    <div className="flex flex-col w-5/9 mt-7 ml-7">
     <div className="flex w-full h-25  border-b border-t border-gray-300 ">
        <div className="flex w-1/2  border-r mt-4 mb-4 border-gray-300 gap-x-30 ">
        <div className="flex flex-col gap-y-3">
        <div className="flex gap-x-2">
        <svg width="20" height="20" viewBox="0 0 20 20">
           
           <rect x="3" y="11" width="3" height="9" ry="2" fill="#5235E8"/>
           <rect x="8" y="8" width="3" height="12" ry="2" fill="#DAF727"/>
           <rect x="13" y="3" width="3" height="17" ry="2" fill="#D6D1FA"/>
        </svg>
        <h2 className="text-gray-400 font-extrabold " style={{fontFamily:'Times New Roman,Serif'}}>CURRENT UPVOTE</h2>
        </div>
          <h1 className="text-4xl font-extrabold " style={{fontFamily:'Times New Roman,Serif'}}>{currupvote}</h1>
        </div>
        <div>
        <svg width="100" height="100" viewBox="0 0 100 100"
     xmlns="http://www.w3.org/2000/svg">
     <rect
     x="0" y="40"
     width="70" height="30"
     rx="15"
     fill="#ECFDF7"
     stroke="#DAFBEF"
     />
      <text
    x="43"               
    y="56"               
    fill="#11CF8B"      
    font-size="14"
    font-family="sans-serif"
    text-anchor="middle"
    dominant-baseline="middle"
  >
   {percentageIncrease_oa}
  </text>
    <g transform="translate(10, 60)">
   
    <polygon
       points="-5,0 3,-10 10,0"
       fill="#11CF8B"       
        
     />
   </g>
</svg>

        </div>
        </div>
        <div className="flex w-1/2 border-r mt-4 mb-4 border-gray-300">
        <div className="ml-8 flex flex-col gap-y-3">
        <div className="flex gap-x-2">
         <img className="" src="/assests/Volume.svg" alt="" />
        <h2 className="text-gray-400 font-extrabold " style={{fontFamily:'Times New Roman,Serif'}}>UPVOTE(24H)</h2>
        </div>
          <h1 className="text-4xl font-extrabold " style={{fontFamily:'Times New Roman,Serif'}}>{upvote_24h}</h1>
        </div>
        <div>
        <svg className="ml-20 "width="100" height="100" viewBox="0 0 100 100"
     xmlns="http://www.w3.org/2000/svg">
     <rect
     x="0" y="40"
     width="70" height="30"
     rx="15"
     fill="#ECFDF7"
     stroke="#DAFBEF"
     />
      <text
    x="43"               
    y="56"               
    fill="#11CF8B"      
    font-size="14"
    font-family="sans-serif"
    text-anchor="middle"
    dominant-baseline="middle"
  >
   {percentageIncrease_24h}
  </text>
    <g transform="translate(10, 60)">
    <polygon
       points="-5,0 3,-10 10,0"
       fill="#11CF8B"       
     />
   </g>
</svg>

        </div>
        </div>
     </div>
     <div className="flex w-full mt-5 gap-x-5 h-85 border-b border-gray-300">
     <div className="flex flex-col">
      <div className="flex gap-x-30" style={{fontFamily:'Times New Romen,Serif'}}>
       <h1 className="font-extrabold text-xl">Portfolio Stats</h1>
       <div className="border border-gray-300 border-2 w-23 relative flex  h-8 bg-white rounded-lg">
            
              <input className="ml-3 w-full font-extrabold outline-none" type="text" readOnly='true' value={timeline} style={{fontFamily:'Times New Roman, serif'}} />
              <select  className=" font-extrabold mr-8 outline-none absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={(e)=>settimeline(e.target.value)} style={{fontFamily:'Times New Roman, serif'}} name="" id="">
                     <option  value="" disabled selected hidden></option>
                     <option  value="Weekly" >Weekly</option>
                     <option value="Monthly">Monthly</option>
                       </select>
                       <svg
                         xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24"
                         viewBox="-10 0 24 24"
                        fill="none"
                         stroke="#D1D5DB"
                         stroke-width="2"
                         stroke-linecap="round"
                          stroke-linejoin="round"
>
  <g transform="translate(-10, 0)">
    <polyline points="6 13 12 19 18 13"/>
  </g>
</svg>


             </div>
      </div>
      {/* graph */}
      <div >  
          {/* <svg  id="graph" width="400" height="100" viewBox="0 0 400 100">
        <defs>
            <linearGradient id="fade-purple" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#5235E8" stop-opacity="20%" />
              <stop offset="100%" stop-color="#5235E8" stop-opacity="0" />
            </linearGradient>
          </defs> */}
    {/* <rect x="10" y="10" width="700" height="400" fill="none" stroke="purple"/> */}
    {/* <path d="M40 100 L40 100 100 200 180 200 220 100 280 100 360 300 400 250 490 280 550 130" stroke="#5235E8" fill="none"  stroke-width="4"/>
    <path d="M12 400 L40 100 100 200 180 200 220 100 280 100 360 300 400 250 490 280 550 130 V 400"  stroke-width="4" fill="url(#fade-purple)"/>
    <circle id="tracker" r="6" fill="red */}
    {/* " cx="0" cy="0" visibility="hidden"/> */}
    {/* </svg> */}
    <svg width="550" height="270" viewBox="0 0 550 270">
       <defs>
            <linearGradient id="fade-purple" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#5235E8" stop-opacity="20%" />
              <stop offset="100%" stop-color="#5235E8" stop-opacity="0" />
            </linearGradient>
          </defs>
    <rect x="20" y="20" width="530" height="250" fill="none" stroke="purple"></rect>
    {/* <polyline points="20 250 95 220 170 180 265 150 360 250" stroke="#5235E8" fill="none" stroke-width="4"></polyline> */}
    <path d="M20 250 L20 250 95 220 170 180 265 150 360 250" fill="none" stroke="#5235E8" stroke-width="4"></path>
     <circle cx="20" cy="250" r="2" fill="red"></circle>
     <circle cx="98" cy="250" r="2" fill="red"></circle>
     <circle cx="173" cy="250" r="2" fill="red"></circle>
     <circle cx="251" cy="250" r="2" fill="red"></circle>
     <circle cx="329" cy="250" r="2" fill="red"></circle>
     <circle cx="407" cy="250" r="2" fill="red"></circle>
     <circle cx="485" cy="250" r="2" fill="red"></circle>
    </svg>
      </div>
     </div>
     <div className="flex mt-3 flex-col w-70  ">
     <div className="flex flex-col ml-5 w-60 h-45 shadow-sm border rounded-lg  border-gray-300 border-2">
      <div className="flex flex-col  p-4 h-33 border-b border-gray-300 font-extrabold" style={{fontFamily:'Times New Roman, Serif'}}>
        <div className="ml-2">
        <h2 className="text-md">Rank</h2>
        
        </div>
        <h2 className="text-3xl mt-3">{Rank}</h2>
       <div
  className="flex border border-none mt-4 bg-gray-300 h-3 overflow-hidden"
           style={{width}}
>
  {status === "Faculty" && (
    <div className="bg-black h-full" style={{ width:facultyw }}></div>
  )}
  {status === "Senior Faculty" && (
    <div className="flex">
      <div className="bg-black h-full" style={{width:facultyw}}></div>
      <div className="bg-[#DAF727] h-full" style={{width:seniorfacultyw}}> </div>
    </div>
  )}
  {status === "Master" &&(
     <div className="flex">
        <div className="h-full bg-black" style={{ width:facultyw }}>
        </div> 
        <div className="bg-[#DAF727] h-full" style={{width:seniorfacultyw}}>

        </div>
        <div className="bg-[#5235E8] h-full" style={{width:masterw}}>

        </div>
     </div>
    )}
    {status === "Grand Master" &&(
      <div className="flex">
       <div className="h-full bg-black" style={{ width:facultyw }}>

</div> 
<div className="bg-[#DAF727] h-full" style={{width:seniorfacultyw}}>

</div>
<div className="bg-[#5235E8] h-full" style={{width:masterw}}>
</div>
  <div className="bg-[#FB3766] h-full" style={{width:grandmasterw}}>

  </div>
      </div>
    )}
</div>

      </div>
        <h1 className="text-gray-500 p-2 ml-4">Out of {participants}</h1>
    </div>
     <div className="flex mt-5 w-full h-13  border border-gray-300 border-2 shadow-sm rounded-lg ">
         <h1 className="font-extrabold px-4 py-3 " style={{fontFamily:'Times New Roman,Serif'}}>Compare Ranking</h1>
         <svg
            className="cursor-pointer "
              xmlns="http://www.w3.org/2000/svg"
              width="90" height="90"
              viewBox="0 0 90 90"
              fill="none"
              stroke="#D1D5DB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
>
       <g transform="translate(10, 0)">
       <polyline points="70 30 75 25 70 20"/>
       </g>
      </svg>
     </div>
     </div>
     </div>
     <div className="flex flex-col mt-4">
      <div className="flex gap-x-160">
      <div className="font-extrabold text-xl " style={{fontFamily:'Times New Roman,Serif'}}>
        My Portfolio
     </div>
      <h3 className="text-[#5235E8]">See all</h3>
      </div>
      <div className="flex flex-col mt-3 gap-y-3">
      {My_portfolio.map((value,idx,array)=>(
        <div className="flex w-full  h-14 border-b border-gray-300 gap-x-65">
          <div className="flex flex-col">
              <h1 className="font-extrabold" style={{fontFamily:'Times New Roman,Serif'}}>{value.previous_upvotes} upvote</h1>
              <h5 className="text-gray-300">{value.per_upvote}</h5>
          </div>
          <div className="flex flex-col gap-y-1">
            <h1 className="text-sm text-gray-400">Change</h1>
            {idx > 0 && (() => {
       const prevUp = array[idx - 1].previous_upvotes;
       Calculate_change(value.previous_upvotes,prevUp);
    if (change > 0) {
      return (
        <div className="flex gap-x-2">
      <svg width="20" height="20" viewBox="0 0 20 20">
          <g transform="translate(10, 20)">
            <polygon points="-5,0 3,-10 10,0" fill="#11CF8B" strokeLinejoin="round"/>
          </g>
        </svg> 
        <div className="w-10">
 <h1 className="font-extrabold" style={{fontFamily:'Times New Roman,Serif'}}>{change}%</h1>
        </div>
       
        </div>
       
       );
    }

    if (change < 0) {
      return (
        <div className="flex gap-x-2">
          <svg width="20" height="20" viewBox="0 0 20 20">
          <g transform="translate(10, 20)">
            <polygon points="-5,-10 3,0 10,-10" fill="#FB3766" stroke="#FB3766" strokeWidth="0" strokeLinejoin="round" />
          </g>
        </svg>
         <div className="w-10">
        <h1 className="font-extrabold" style={{fontFamily:'Times New Roman , Serif'}}>{Number((change).toFixed(1))}%</h1>
        </div>
        </div>

        

      );
    }

    // no arrow if no change
    
  })()}
  {idx===0 && (()=>{

    return(
     <div className="flex gap-x-2">
      <svg width="20" height="20" viewBox="0 0 20 20">
          <g transform="translate(10, 20)">
            <polygon points="-5,0 3,-10 10,0" fill="#11CF8B" strokeLinejoin="round"/>
          </g>
        </svg> 
         <div className="w-10">
        <h1 className="font-extrabold" style={{fontFamily:'Times New Roman,Serif'}}>100%</h1>
        </div>
        </div>
       
    );
  })()}
  
          </div>
          
          <div className="flex flex-col ml-auto">
          <h1 className="font-extrabold text-sm" style={{fontFamily:'Times New Roman,Serif'}}>{value.date}</h1>
          <div className="flex gap-x-1">
          <h3 className="text-gray-400 text-sm">{value.start_time} -</h3>
          <h3 className="text-gray-400 text-sm">{value.end_time}</h3>
          </div>
          </div>
        </div>
      ))}
     
      </div>
     
     </div>
     
    </div>
    <div className="flex flex-col mt-3 w-4/9 ml-8  border border-b border-l border-gray-300">
      <div className="flex flex-col w-5/9 ml-5 w-85 ">
           <div className="flex gap-x-20 mt-2">
              <h1 className="font-extrabold text-lg " style={{fontFamily:'Times New Roman,Serif'}}>University wide Ranking</h1>
               <h3 className="text-sm text-[#5235E8] ml-4 mt-1">See all</h3>
           </div>
           <div className="flex flex-col mt-4 ">{
           userDetail.slice(curr_leaderboard_page*4,curr_leaderboard_page*4+4)
           .map((values,idx)=>(
          <div className="flex w-full h-20 py-4 px-3 border-b border-gray-300 gap-x-12 ">
           <div className="flex gap-x-2 w-43">
           <img className="rounded-[50%] h-12 w-12" src={values.Avatar} alt="" />
           <div className=" flex font-extrabold mt-3 text-md gap-x-2" style={{fontFamily:'Times New Roman,Serif'}}>
            <div className="flex ">
            <h1 className="">{values.Title[0]}</h1>
            <h1 className={`flex ${values.score>=5000?'text-[#FB3766]':values.score>=2000 && values.score<5000?'text-[#5235E8]':values.score>=500 && values.score<2000?'text-[#DAF727]':'text-black'}`}>{values.Title.slice(1)}</h1>
            </div>
           <h1>{values.username}</h1>
           </div>
           </div>
          
           <div className="flex  gap-x-2 mt-3 text-sm">
           <h2 className="text-gray-400 w-15">Rank {((idx+1)+(curr_leaderboard_page*4))}</h2>

          {values.score<1000 && <h1 className="flex w-10 ml-2 text-[#5235E8]">{values.score}</h1>}
          {values.score>=1000 && <h1 className="flex w-10 ml-2 text-[#5235E8]">{Number((values.score/1000).toFixed(1))}k</h1>}
           </div>
           
          </div>
        ))
        }
           </div>
        <div className="flex mt-3 ml-11">
          <div className="cursor-pointer w-8 h-7 rounded-lg border border-gray-300" onClick={decrement}>
            <svg
                         xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24"
                         viewBox="-10 0 24 24"
                        fill="none"
                         stroke="black"
                         stroke-width="2"
                         stroke-linecap="round"
                          stroke-linejoin="round"
>
  <g transform="translate(-10, 0)">
    <polyline points="18 8 10 14 18 20"/>
  </g>
</svg>
          </div>
          {Math.abs(curr_leaderboard_page-end_leaderboard_page)>2 && (
            <div className="flex gap-x-5">
              <div className="cursor-pointer ml-5  pointer w-8 h-7 bg-black text-white rounded-lg ">
                <h1 className="px-3" onClick={(e)=>setcurr_leaderboard_page()}>{curr_leaderboard_page+1}</h1></div>
                <h1 className="cursor-pointer text-gray-400" onClick={(e)=>setcurr_leaderboard_page(prev=>prev+1)}>{curr_leaderboard_page+2}</h1>
                <h1 className=" text-gray-400">...</h1>
                <h1 className="cursor-pointer text-gray-400">{end_leaderboard_page+1}</h1>
            </div>
          )}
          {Math.abs(curr_leaderboard_page-end_leaderboard_page)<=2 && (
             <div className="flex gap-x-5 ">
              <h1 className="ml-5 text-gray-400">...</h1>
             <div className="cursor-pointer pointer w-8 h-7 bg-black text-white rounded-lg ">
               <h1 className="px-3" onClick={(e)=>setcurr_leaderboard_page()}>{end_leaderboard_page-2}</h1></div>
               <h1 className="cursor-pointer text-gray-400" onClick={(e)=>setcurr_leaderboard_page(prev=>prev+1)}>{curr_leaderboard_page+2}</h1>
               
               <h1 className="cursor-pointer text-gray-400">{end_leaderboard_page+1}</h1>
           </div>
          )}
          <div className="cursor-pointer w-8 h-7 ml-5 rounded-lg border border-gray-300" onClick={increment}>
            <svg
                         xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24"
                         viewBox="-10 0 24 24"
                        fill="none"
                         stroke="black"
                         stroke-width="2"
                         stroke-linecap="round"
                          stroke-linejoin="round"
>
  <g transform="translate(-10, 0)">
    <polyline points="10 8 18 14 10 20"/>
  </g>
</svg>
          </div>
        </div>
      </div>
      <div className="border border-b border-gray-200 mt-2"></div>
      <div className="flex flex-col w-5/6 ml-5">
  <div
    className="w-full max-h-64 overflow-hidden hover:overflow-y-auto transition-all duration-200 scrollbar-hide p-2"
  >
    <div className="w-full flex gap-x-20 mt-2">
      <h1
        className=" font-extrabold text-lg"
        style={{ fontFamily: "Times New Roman,Serif" }}
      >
        Connection Ranking
      </h1>
      <h3 className="text-sm text-[#5235E8] ml-auto mt-1 cursor-pointer">
        See all
      </h3>
    </div>

    <div className="flex  flex-col h-full mt-4">
      {sorted_cvalues.map((values, idx) => (
        <div
          key={idx}
          className="flex w-full h-20 py-4 px-3 border-b border-gray-300 gap-x-15"
        >
          <div className="flex gap-x-2 w-43">
            <img
              className="rounded-full h-12 w-12"
              src={values.img}
              alt=""
            />
            <div className="flex flex-col">
              <div
                className="flex font-extrabold text-md gap-x-2"
                style={{ fontFamily: "Times New Roman,Serif" }}
              >
                <div className="flex">
                  <h1>{values.Title[0]}</h1>
                  <h1
                    className={`flex ${
                      values.upvote >= 5000
                        ? "text-[#FB3766]"
                        : values.upvote >= 2000
                        ? "text-[#5235E8]"
                        : values.upvote >= 500
                        ? "text-[#DAF727]"
                        : "text-black"
                    }`}
                  >
                    {values.Title.slice(1)}
                  </h1>
                </div>
                <h1>{values.name}</h1>
              </div>
              <div className="flex">
                <h3 className="text-[#5235E8] text-sm">
                  +{values.receive}
                </h3>
                <h3 className="text-sm ml-1">on {values.date}</h3>
              </div>
            </div>
          </div>

          <div className="flex gap-x-2 mt-3 text-sm">
            <h2 className="text-gray-400">
              Rank {idx + 1 + curr_leaderboard_page * 4}
            </h2>
            <h1 className="flex ml-2 text-[#5235E8]">
              {values.upvote < 1000
                ? values.upvote
                : Number((values.upvote / 1000).toFixed(1)) + "k"}
            </h1>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


    </div>
    </div>
    
    </>
)
}

export default Dashboardpage