import React, { useSyncExternalStore } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import ConnectionPortfolio from "./ConnectionPortfolio";
import { ChangeStatus, ChangeTitle ,ChangeName,ChangeVal} from "../../Features/DashboardSlice";
function Connectionspage(){
  const Dispatch=useDispatch();
  const [userDetail,setuserDetail]=useState([]);
   const [curr_leaderboard_page,setcurr_leaderboard_page]=useState(0);
    const [end_leaderboard_page,setend_leaderboard_page]=useState(10);
    const [ConectionDetail,setConnectionDetail]=useState([]);
    const [cordinate,setcordinate]=useState("");
    const [change,setchange] = useState(null);
  let cordinates="50 55 52 55 54 55 56 55 58 55 60 55 62 55 64 55 66 55 68 55 70 55 72 55 74 55 76 55 78 55 80 55 82 55 84 55 86 55 88 55 90 55 92 55 94 55 96 55";
  let changed_coordinate=""
  function asign_coordinates(point){
     let cordinateArr=cordinates.split(" ").map(Number);
    const points=point.split(",");
    for(let i=1;i<points.length;i++){
    let ans=Math.floor(((points[i]-points[i-1])/points[i-1])*100);
    cordinateArr[i*2-1]+=ans;
    cordinateArr[i*2-1]=Math.min(cordinateArr[i*2-1],80);
    cordinateArr[i*2-1]=Math.max(cordinateArr[i*2-1],30);
    }
    changed_coordinate=cordinateArr.join(" ");
    // console.log(changed_coordinate)
    return true
  }
   let changePerc=null;
     const Calculate_change=(currUp,prevUp)=>{
       changePerc = prevUp
        ? ((currUp- prevUp) / Math.abs(prevUp)) * 100
        : 0;
        console.log(changePerc)
     }
     useEffect(()=>{setchange(changePerc);},[changePerc])
  useEffect(()=>{
    setcordinate(changed_coordinate);
    console.log(changed_coordinate)
  },[changed_coordinate])
  const values=[
      {
        'name':'Monika',
        'Title':'Dean',
        'img':"/assests/Monika.jpg",
        'upvote':'20000',
        'status':'following',
        'watchlist':true,
        'twentyFour_hour':'20000,20100,20150,20140,20200,20200,2050,20230,20230,20231,20232,20232,20310,20311,20290,20283,20312,20400,20450,21000,21010,21100,21150,20800',
        'prevD_up':'800',
        'prevPD_up':'2100',
        'max_title':'Grand Master',
        'max upvote':'20800',
        'about':"As Dean of Academics at IKG PTU, I am dedicated to fostering a culture of curiosity, celebrating your achievements, and equipping every graduate to make a meaningful impact in our ever-evolving world.",
        'address':'Chennai,Tamil Nadu',
        'experience':'15 years',
        'upv_twlmonths':[[50,  300,  800, 1200],[1500, 800, 1800, 2500],[3000, 2700, 3200, 3500],[3800, 4200, 4000, 4500],[5000, 4800, 5300, 5500],[6000, 6200, 5800, 6500],[7000, 6800, 7200, 7500],[8200, 8400, 8000, 8800],[9000, 9200, 9600, 9800],[10500, 11000, 10800, 11500],[13000, 12500, 13500, 14000],[15000, 17000, 19000, 20000]]
      },
      {
        'name':'komal',
        'Title':'Prof',
        'img':"/assests/komal.jpg",
        'upvote':'11000',
        'status':'notfollowing',
        'watchlist':true,
        'twentyFour_hour':'11000,11010,11010,11010,11200,12000,12300,12450,12345,12343,12342,12450,12360,12390,12400,12460,12467,12468,12500,12520,12554,12560,12567,12568',
        'prevD_up':'1568',
        'prevPD_up':'540',
        'max_title':'Grand Master',
        'max upvote':'12568',
        'about':"As Associate Professor of Computer Science at IKG PTU, I leverage 12 years of AI research and hands-on mentorship to empower students in developing real-world, ethically driven machine learning solutions.",
        'address':'Chennai,Tamil Nadu',
        'experience':'12 years',
        'upv_twlmonths':[[10,   200,   400,   600],[800,  1000,  1200,  1400],[1600, 1800,  2000,  2200],[2400, 2600,  2800,  3000],[3200, 3400,  3600,  3800],[4000, 4200,  4400,  4600],[4800, 5000,  5200,  5400],[5600, 5800,  6000,  6200],[6400, 6600,  6800,  7000],[7200, 7600,  8000,  8400],[8800, 9000,  9200,  9600],[9800, 10200, 10600, 11000],]
      },
      {
        'name':'Hithesh',
        'Title':'Dean',
        'img':"/assests/hithesh.jpg",
        'upvote':'4900',
         'status':'notfollowing',
         'watchlist':false,
       'twentyFour_hour':'4900,4810,4805,4958,5010,5012,5013,5020,5024,5098,5100,5234,4980,4789,4679,3000,4670,5500,5500,5500,5510,5512,5514,5516',
        'prevD_up':'616',
        'prevPD_up':'740',
        'max_title':'Master',
        'max upvote':'5516',
        'about':"As Dean of Student Welfare at IKG PTU, I champion student well-being and leadership by fostering inclusive support programs, innovative wellness initiatives, and active student governance to empower every individual’s success.",
        'address':'Delhi,New Delhi',
        'experience':'14 years',
        'upv_twlmonths':[[0,   50,   100,  200],[300, 400,  500,  600],[700, 800,  900,  1000],[1100, 1200, 1300, 1400],[1500, 1600, 1700, 1800],[1900, 2000, 2100, 2200],[2300, 2400, 2500, 2600],[2700, 2800, 2900, 3000],[3100, 3200, 3300, 3400],[3500, 3600, 3700, 3800],[3900, 4000, 4100, 4200],[4300, 4500, 4700, 4900]]
      },
      {
        'name':'Kunal',
        'Title':'Prof',
        'img':"/assests/kunal.jpg",
        'upvote':'4600',
        'status':'notfollowing',
        'watchlist':false,
        'twentyFour_hour':'4600,4410,4505,4558,4510,4512,4513,4520,4524,4598,4500,4534,4580,4589,4579,4500,4570,4500,4500,4500,4510,4512,4514,4516',
        'prevD_up':'-84',
        'prevPD_up':'720',
         'max_title':'Master',
        'max upvote':'4516',
        'about':"As Assistant Professor of Computer Science at IKG PTU, I leverage eight years of distributed-systems research to guide students in architecting resilient, scalable cloud and microservices solutions through immersive, project-based learning.",
        'address':'Jalandhar,Punjab',
        'experience':'8 years',
        'upv_twlmonths':[[0,    150,   50,   400],[800,  300,   1200, 600],[700,  1600,  900,  1400],[1100, 500,   1800, 1300],[1700, 200,   1500, 1900],[900,  2100,  1600, 2300],[2400, 1800,  2600, 1000],[2800, 3200,  2400, 3400],[3000, 3600,  3100, 3800],[3500, 3300,  4000, 3600],[4200, 3900,  4400, 4100],[3800, 4300,  3500, 4600],],
        
      },
      {
        'name':'Naina',
        'Title':'Ms',
        'img':'/assests/naina.jpg',
        'upvote':'2500',
        'status':'following',
        'watchlist':true,
        'twentyFour_hour':'2500,2810,2805,2958,2010,2012,2013,2120,2054,2058,2100,2234,2980,2789,2679,3000,3670,3500,3500,3500,3510,3512,3514,3516',
        'prevD_up':'1216',
        'prevPD_up':'50',
        'max_title':'Master',
        'max upvote':'3516',
        'about':"As Lecturer in Computer Science at IKG PTU, I leverage five years of software-engineering expertise to deliver interactive, project-driven courses that empower students to translate data structures, algorithms, and DevOps theory into real-world solutions.",
        'address':'Jodhpur,Rajesthan',
        'experience':'3 years',
        'upv_twlmonths':[[0,   150,   50,   300],[600, 400,   800,  500],[700, 1000,  900,  1200],[1100, 600,  1400, 1000],[1300, 800,  1600, 1500],[1700, 900,  1800, 1400],[2000, 1200, 2100, 1600],[1900, 2300, 1700, 2500],[2200, 1300, 2400, 2000],[1800, 2100, 1900, 2300],[2000, 1500, 2500, 1700],[2300, 1900, 2400, 2100]]
     
      },
      {
        'name':'Ishita',
        'Title':'Ms',
        'img':'/assests/Ishita.jpg',
        'upvote':'1589',
        'status':'notfollowing',
        'watchlist':false,
        'twentyFour_hour':'1589,1560,1505,1958,1910,1912,2013,2020,2024,2098,2100,2234,2980,2789,2679,2000,2670,2200,2500,2500,2510,2512,2514,2516',
        'prevD_up':'1016',
        'prevPD_up':'2010',
        'max_title':'Senior Faculty',
        'max upvote':'2516',
        'about':"As Assistant Professor of Mechanical Engineering at IKG PTU, I harness my thermal‐sciences expertise and industry experience to empower students through hands-on energy-systems labs, CFD simulations, and sustainable design projects.",
        'address':'Thane,Mumbai',
        'experience':'3 years',
        'upv_twlmonths':[  [0,    100,   20,   250],[400,  50,    350,  150],[300,  450,   200,  500],[600,  250,   700,  350],[500,  800,   450,  900],[1000, 600,   1100, 550],[650,  1200,  700,  1300],[1300, 900,   1400, 850],[750,  1500,  800,  1580],[900,  100,   1150, 1250],[1350, 750,   1450, 950],[1589, 300,   1200, 1400]]

      }
    ]
    const sorted_values=[...values].sort((a,b)=>b.upvote-a.upvote);
     useEffect(()=>{setuserDetail(sorted_values)},[])
       
       const increment=()=>{
        setcurr_leaderboard_page(prev=>Math.min(prev+1,end_leaderboard_page));
       }
    
       const decrement=()=>{
        setcurr_leaderboard_page(prev=>Math.max(prev-1,0));
       }
       const changeFeature=()=>{
           Dispatch(ChangeStatus("ConnectionPortfolio"))
       }
       const changeName=(User)=>{
         Dispatch(ChangeName(User.name))
         Dispatch(ChangeTitle(User.Title));
         Dispatch(ChangeVal(User));
       }
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
                     <h1 className="ml-35">Upvotes</h1>
                     <h1>Status</h1>
                     <h1>Change %</h1>
                     <h1>Last(24H)</h1>
                </div>
            </div>
              <div className="flex flex-col w-full h-full ">
           <div className="flex flex-col  ">{
           userDetail.slice(curr_leaderboard_page*4,curr_leaderboard_page*4+4)
           .map((values,idx)=>(
            <div className="w-screen ">
          <div className="flex w-350 h-20    ">
            <NavLink to="/connectionportfolio">
            <div className="flex gap-x-2 w-40 mt-7">
           <img className="rounded-[50%] h-12 w-12" src={values.img} alt="" />
           <div className="  flex font-extrabold cursor-pointer mt-3 text-md gap-x-2 " onClick={()=>{
            changeFeature();
            changeName(values);
           }} style={{fontFamily:'Times New Roman,Serif'}}>
            <div className="flex ">
            <h1 className="">{values.Title[0]}</h1>
            <h1 className={`flex ${values.upvote>=5000?'text-[#FB3766]':values.upvote>=2000 && values.upvote<5000?'text-[#5235E8]':values.upvote>=500 && values.upvote<2000?'text-[#DAF727]':'text-black'}`}>{values.Title.slice(1)}</h1>
            </div>
           <h1>{values.name}</h1>
           </div>
           </div>
            </NavLink>

          
           <div className="flex w-20  ml-47   text-sm mt-9">
            <h1 className="flex ml-2 text-[#42424D] ">{values.upvote}</h1>
           </div>
           <div className="w-25 ml-35 mt-6 ">
             {values.status === 'notfollowing' && (
             <div className=" flex mt-2 cursor-pointer py-2 relative px-2 justify-center w-25  h-10 rounded-md bg-[#5235E8] hover:bg-[#7C64ED] " style={{fontFamily:'Times New Roman,Serif'}}>
              <h3 className="font-extrabold flex  text-white">Follow</h3>  
             </div>
          )}
           {values.status === 'following' && (
            <div className="ml-2 mt-2">

              <h1 className="font-extrabold text-[#5235E8]" style={{fontFamily:'Times New Roman,Serif'}}>Following</h1>
            </div>
           )}
           </div>
           <div className="mt-8 w-30 ml-27">
            {(()=>{
              const ans=((values.prevD_up - values.prevPD_up)/values.prevPD_up)*100;
       if(ans >0 ) return( 
       <div className="flex gap-x-2">
        <svg width="20" height="20" viewBox="0 0 20 20">
          <g transform="translate(10, 20)">
            <polygon points="-5,0 3,-10 10,0" fill="#11CF8B" strokeLinejoin="round"/>
          </g>
        </svg> 
        <div className="w-5">
     <h1 className="font-extrabold" style={{fontFamily:'Times New Roman,Serif'}}>{Number((((values.prevD_up-values.prevPD_up)/Math.abs(values.prevPD_up))).toFixed(1))}%</h1>
        </div>
       
        </div>
              
           )
           else if(ans<0) return (
           <div className="flex gap-x-2">
          <svg width="20" height="20" viewBox="0 0 20 20">
          <g transform="translate(10, 20)">
            <polygon points="-5,-10 3,0 10,-10" fill="#FB3766" stroke="#FB3766" strokeWidth="0" strokeLinejoin="round" />
          </g>
        </svg>
         <div className="w-1/7">
        <h1 className="font-extrabold" style={{fontFamily:'Times New Roman , Serif'}}>{Number((((values.prevD_up-values.prevPD_up)/Math.abs(values.prevPD_up))).toFixed(1))}%</h1>
        </div>
        </div>)
            })
            ()}
           </div>
         
           <div className="w-30 ml-15">
              {(()=>{
                 asign_coordinates(values.twentyFour_hour);
                 const ans=((values.prevD_up - values.prevPD_up)/values.prevPD_up)*100;
                 if(ans > 0) return (
                   <div className="">
                   <svg width="220" height="220" viewBox="0 0 200 200"  >
         <defs>
            <linearGradient id="fade-purple" x1="0%" y1="0%" x2="0%" y2="100%"> 
             
              <stop offset="6%" stop-color="#BCFBFF" stop-opacity="40%" />
            
                <stop offset="100%" stop-color="#BCFBFF" stop-opacity="0" />        
                  </linearGradient>
          </defs>
       <polyline points={changed_coordinate} stroke="#11CF8B" fill="none" stroke-width="1"/>
      <polyline points={changed_coordinate}  fill="url(#fade-purple)"  />

  
       </svg>
                </div>
                 )
                else return (
                  <div className="">
                   <svg width="220" height="220" viewBox="0 0 200 200"  >
            <defs>
            <linearGradient id="fade-purple-1" x1="0%" y1="0%" x2="0%" y2="100%"> 
             
              <stop offset="50%" stop-color="#FED7E0" stop-opacity="40%" />
            
                <stop offset="100%" stop-color="#FCE2ED" stop-opacity="0" />        
                  </linearGradient>
          </defs>
       <polyline points={changed_coordinate} stroke="#FB3766" fill="none" stroke-width="1"/>
      <polyline points={changed_coordinate}  fill="url(#fade-purple-1)"  />

  
       </svg>
                </div>
                )
              })()}
           </div>
           <div className="w-1/7 ml-15 mt-8">
            {values.watchlist === true && (
                <div className="flex cursor-pointer" >
                  <svg className="mt-1  w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
     <path stroke="none" fill="#5235E8" stroke-width="1" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
       </svg>
       </div>
            )}
            {values.watchlist === false && (
              <div className="flex cursor-pointer" >
                  <svg className="mt-1  w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
     <path stroke="#5235E8" fill="none" stroke-width="1" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
       </svg>
       </div>
            )}
           </div>
          </div>
          </div>
        ))
        }
           </div>
        <div className="flex mt-3 justify-center">
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
             
            </div>
        </div>
        </>
    )
}

export default Connectionspage