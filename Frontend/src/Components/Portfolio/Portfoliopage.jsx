import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useRef } from "react";
function Portfoliopage(){
        const [is_btech,setis_btech]=useState(true);
        const [btech_course,setbetch_course] = useState('cse');
        const [batch,setbatch] = useState("Btech CSE")
        const [line_chart,setline_chart] = useState([])
        const [line_chartper,setline_chartper] = useState([])
        const y_cordinate=[],x_cordinate=[];
        const [texti,settexti]=useState("");
        const [mon_visibility,setmon_visibility]=useState(true);
        const [first_yr,setfirst_yr]=useState(false);
        const [second_yr,setsecond_yr]=useState(false);
        const [third_yr,setthird_yr]=useState(false);
        const [fourth_yr,setfourth_yr]=useState(true);
        const [tue_visibility,settue_visibility]=useState(true);
        const [wed_visibility,setwed_visibility]=useState(true);
        const [thu_visibility,setthu_visibility]=useState(true);
        const [fri_visibility,setfri_visibility]=useState(true);
        let data=""
        const [week_Days,setweek_Days]=useState({'mon_up':125,'tue_up':109,'wed_up':88,'thu_up':140,'fri_up':70});
        const [week_Days_h,setweek_Days_h]=useState({'mon_h':195-week_Days['mon_up'],'tue_h':195-week_Days['tue_up'],'wed_h':195-week_Days['wed_up'],'thu_h':195-week_Days['thu_up'],'fri_h':195-week_Days['fri_up']});
        const oneDir=[];
        const [percInc,setpercInc]=useState("0");
        const Value=useSelector((state)=>state.CurrActive);
        useEffect(()=>{
           const leng = Value['USerValue']?.upv_twlmonths?.length ??[]
           for(let i=0;i<leng;i++){
          for(let j=0;j<leng;j++){
            oneDir.push(Value['USerValue']?.upv_twlmonths[i][j]);
          }
         }
        },[Value])
        
         useEffect(()=>{
              setpercInc(Number((((Value['USerValue']?.prevD_up-Value['USerValue']?.prevPD_up)/Math.abs(Value['USerValue']?.prevPD_up))).toFixed(1)))
             },[])
          useEffect(()=>{
            const x=[]
            const y=[]
            if(is_btech && btech_course === 'cse'){
              const upvts=Value['USerValue']?.btech_cse??[];
              const total_upv=Value['USerValue']?.btech_cse_totalupv??[];
              for(let i=0;i<upvts.length;i++){
                const per_=upvts[i]/total_upv;
                y.push(100*per_);
                const per=510*per_;
                // console.log(per)
                 x.push(per);
              }
            }
            setline_chart(x);
            setline_chartper(y)
          },[Value])
             const y_cor=new Array(230,200,150,100,50);
                   const cordinate=Value['USerValue']?.upv_twlmonths ?? [];
                   const len=cordinate.length
                   let val=0;
                    for(let i=0;i<len;i++){
                     let x=[]
                     for(let j=0;j<6;j++){
                          x_cordinate.push(val+(j+1)*16.66);
                          if(cordinate[i][j]<100){
                              let base=0,ceil=100;
                              let delta=cordinate[i][j]-base;
                              let range=ceil-base;
                              let per=delta/range;
                              let inter=250-y_cor[0];
                              let y=250-(inter*per);
                              y_cordinate.push(y);
                          }
                          else if(cordinate[i][j]>=100 && cordinate[i][j]<500){
                              let base=100,ceil=500;
                              let delta=cordinate[i][j]-base;
                              let range=ceil-base;
                              let per=delta/range;
                              let inter=y_cor[0]-y_cor[1];
                              let y=y_cor[0]-(inter*per);
                              y_cordinate.push(y);
                          }
                          else if(cordinate[i][j]>=500 && cordinate[i][j]<2500){
                           let base=500,ceil=2500;
                              let delta=cordinate[i][j]-base;
                              let range=ceil-base;
                              let per=delta/range;
                              let inter=y_cor[1]-y_cor[2];
                              let y=y_cor[1]-(inter*per);
                              y_cordinate.push(y);
                          }
                          else if(cordinate[i][j]>=2500 && cordinate[i][j]<5000){
                           let base=2500,ceil=5000;
                              let delta=cordinate[i][j]-base;
                              let range=ceil-base;
                              let per=delta/range;
                              let inter=y_cor[2]-y_cor[3];
                              let y=y_cor[2]-(inter*per);
                              y_cordinate.push(y);
                          }
                          else if(cordinate[i][j]>=5000 && cordinate[i][j]<10000){
                           let base=5000,ceil=10000;
                              let delta=cordinate[i][j]-base;
                              let range=ceil-base;
                              let per=delta/range;
                              let inter=y_cor[3]-y_cor[4];
                              let y=y_cor[3]-(inter*per);
                              y_cordinate.push(y);
                          }
                          else if(cordinate[i][j]>=10000 && cordinate[i][j]<=20000){
                             let base=10000,ceil=20000;
                              let delta=cordinate[i][j]-base;
                              let range=ceil-base;
                              let per=delta/range;
                              let inter=y_cor[4]-0;
                              let y=y_cor[4]-(inter*per);
                              y_cordinate.push(y);
                          }
                     }
                     val+=100;
                    }
                    let pts="";
                   //Value['value'].upv_twlmonths= [[50,  300,  800, 1200],[1500, 2000, 1800, 2500],[3000, 2700, 3200, 3500],[3800, 4200, 4000, 4500],[5000, 4800, 5300, 5500],[6000, 6200, 5800, 6500],[7000, 6800, 7200, 7500],[8200, 8400, 8000, 8800],[9000, 9200, 9600, 9800],[10500, 11000, 10800, 11500],[13000, 12500, 13500, 14000],[15000, 17000, 19000, 20000]]
                    for (let i = 0; i < x_cordinate.length; i++) {
                     pts += `${x_cordinate[i]},${y_cordinate[i]} `;
                   }
                   data=pts.trim();
                  //  console.log(x_cordinate)
                  //  console.log(y_cordinate)
               const last12Months = useMemo(() => {
                 const result = [];
                 const today  = new Date();
             
                 for (let i = 0; i < 12; i++) {
                   const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
                   result.push(d.toLocaleString("default", { month: "short" }));
                 }
             
                 return result.reverse();
             
               }, []);
              
               // handling the mouseeven for the point
              const svgRef = useRef(null);
               const trackerRef = useRef(null);
               
               // Convert flat values to coordinate objects
               const x_and_y =x_cordinate.map((x, i) => ({ x, y: y_cordinate[i] }));
               useEffect(() => {
                 const svg = svgRef.current;
                 const tracker = trackerRef.current;
                 if (!svg || !tracker) return;
                 
                 const handleMouseMove = (e) => {
                   const pt = svg.createSVGPoint();
                   pt.x = e.clientX;
                   pt.y = e.clientY;
             
                   const cursor = pt.matrixTransform(svg.getScreenCTM().inverse());
                   const x = cursor.x;
             
                  let bestIdx  = 0;
                  let closest  = x_and_y[0];
                  let minDist  = Math.abs(closest.x - x);

              for (const [idx, p] of x_and_y.entries()) {
                const dist = Math.abs(p.x - x);
               if (dist < minDist) {
                 minDist  = dist;
                 closest  = p;
                 bestIdx  = idx;
                }
                 }
            // console.log(oneDir)
            // console.log(bestIdx)
             settexti(oneDir[bestIdx]);
              
              // console.log(text)
            // console.log(text)
                   trackerRef.current.setAttribute("transform", `translate(${closest.x}, ${closest.y})`);
                   trackerRef.current.setAttribute("visibility", "visible");
             
                 };
                 
                 const handleMouseLeave = () => {
                   trackerRef.current.setAttribute("visibility", "hidden");
                 };
             
                 svg.addEventListener('mousemove', handleMouseMove);
                 svg.addEventListener('mouseleave', handleMouseLeave);
             
                 return () => {
                   svg.removeEventListener('mousemove', handleMouseMove);
                   svg.removeEventListener('mouseleave', handleMouseLeave);
                 };
               }, [x_and_y]);

            
    return (
        <>
        <div className="flex flex-col mt-6 ml-9">
            <div className="flex flex-col">
          <div className="flex">
            <div className="flex flex-col" style={{fontFamily:'Times New Roman,Serif'}}>
        <div className="flex gap-x-2">
             <svg width="20" height="20" viewBox="0 0 20 20">
           
           <rect x="3" y="11" width="3" height="9" ry="2" fill="#5235E8"/>
           <rect x="8" y="8" width="3" height="12" ry="2" fill="#DAF727"/>
           <rect x="13" y="3" width="3" height="17" ry="2" fill="#D6D1FA"/>
        </svg>
         <h1 className="font-extrabold text-gray-400" >PORTFOLIO VALUE</h1>
        </div>
         <div className="flex">
            <div className="w-17">
<h1 className="font-extrabold text-3xl">{Value['USerValue'].upvote}</h1>

            </div>
  <div className="mt-2">
{percInc>0 && (<svg className="ml-3 "width="70" height="20" viewBox="0 0 70 30"
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
        
            </div>
           
          </div>
          <div className="flex flex-col shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] w-295 h-72 rounded-xl">
    <div className="flex ">
            <div className="ml-7 text-gray-500">
                <h1 className="mt-1">20k</h1>
                <h1 className="mt-3">10k</h1>
                <h1 className="mt-6">5k</h1>
                <h1 className="mt-6">2.5k</h1>
                <h1 className="mt-7">500</h1>
                <h1 className="mt-1">100</h1>
              </div>
              <svg  ref={svgRef} width="1100" height="250" viewBox="0 0 1100 250" style={{ pointerEvents: 'all' }}>
               <defs>
    <linearGradient
      id="fade-purple"
      gradientUnits="userSpaceOnUse"
      x1="0" y1="0"
      x2="0" y2="250"
    >
      <stop offset="0%"   stopColor="#5235E8" stopOpacity="0.5" />
      <stop offset="100%" stopColor="#5235E8" stopOpacity="0"   />
    </linearGradient>
  </defs>
                 {/* <line x1="100" y1="0" x2="100" y2="250" stroke="#E3E3E8"></line>
                <line x1="200" y1="0" x2="200" y2="250" stroke="#E3E3E8"></line>
                <line x1="300" y1="0" x2="300" y2="250" stroke="#E3E3E8"></line>
                <line x1="400" y1="0" x2="400" y2="250" stroke="#E3E3E8"></line>
                <line x1="500" y1="0" x2="500" y2="250" stroke="#E3E3E8"></line>
                <line x1="600" y1="0" x2="600" y2="250" stroke="#E3E3E8"></line>
                <line x1="700" y1="0" x2="700" y2="250" stroke="#E3E3E8"></line>
                <line x1="800" y1="0" x2="800" y2="250" stroke="#E3E3E8"></line>
                <line x1="900" y1="0" x2="900" y2="250" stroke="#E3E3E8"></line>
                <line x1="1000" y1="0" x2="1000" y2="250" stroke="#E3E3E8"></line>
                <line x1="1100" y1="0" x2="1100" y2="250" stroke="#E3E3E8"></line>
                <line x1="1200" y1="0" x2="1200" y2="250" stroke="#E3E3E8"></line>
                y axis label */}
                {/* <line x1="0" y1="230" x2="1200" y2="230" stroke="#E3E3E8"></line>
                <line x1="0" y1="200" x2="1200" y2="200" stroke="#E3E3E8"></line>
                <line x1="0" y1="150" x2="1200" y2="150" stroke="#E3E3E8"></line>
                <line x1="0" y1="100" x2="1200" y2="100" stroke="#E3E3E8"></line>
                 <line x1="0" y1="50" x2="1200" y2="50" stroke="#E3E3E8"></line>  */}

                 {/* data points */}
                 
                 <polyline points={data}
                  fill="none"
                  stroke="#5235E8"
                  strokeWidth="2"
                  ></polyline>
                 <path
    d={`
      M ${x_cordinate[0]},${y_cordinate[0]}
      ${x_cordinate.slice(1).map((x,i) => `L ${x},${y_cordinate[i+1]}`).join(" ")}
      L ${x_cordinate[x_cordinate.length-1]},250   
      L ${x_cordinate[0]},250
      Z
    `}
    fill="url(#fade-purple)"
  />
  <defs>
    <filter id="circleShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="gray" flood-opacity="0.5" />
    </filter>
  </defs>
         <g width="1200" ref={trackerRef} visibility="hidden" filter="url(#circleShadow)">
            <rect x="-50" y="-100" width="100" height="70" rx="4" ry="4" fill="black"/>
         <text
         x="0"
         y="-80"
         fill="gray"
         font-family="Arial, sans-serif"
         font-size="12"
         text-anchor="middle"
         alignment-baseline="middle"
     >
    Outer Rect
  </text>
         <rect x="-40" y="-65" width="80" height="25" rx="4" ry="4" fill="#2F2F37"/>

            <text x="-35" y="-45" fill="#9C9CAB" >
                Value {texti}
               </text>
             <polygon
               points="-5 -30, 0 -25, 5 -30"
               fill="black"       
               />
             
            <circle  r="9" fill="white"  />
            <circle r="3" fill="#5235E8" />
</g>

              </svg>
              
              
             </div>
              <div className="flex  ml-36 gap-x-16 text-gray-500">
           {last12Months.map((value)=>(
             <h1 className="">{value}</h1>
           ))}
          </div>
          </div>
           
            
          </div>
          <div className="flex w-full h-65 mt-4 gap-x-4 ">
                <div className=" flex flex-col w-1/2  rounded-xl shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)]">
                  <div className="flex ml-5 gap-x-5">
                    <div className="flex flex-col text-gray-500 gap-y-5 mt-5 ">
                       <h1 className="ml-1">10k</h1>
                       <h1 className="ml-1">5k</h1>
                       <h1 className="ml-1">1k</h1>
                       <h1 className="">100</h1>
                       <h1 className="ml-2">0</h1>
                       
                    </div>
                    <div className="mt-6">
                      <svg className="cursor-pointer" width="500" height="200" viewBox="0 0 500 200 ">
                          {/* <rect x="0" y="0" width="500" height={200} fill="none" stroke="black"></rect> */}
                          <g >
                             <rect x="5" y="5" width={70} height={190} rx="20" ry="20" fill="#F8F8FF" ></rect>
                            <rect x="5" y={week_Days['mon_up']} width={70} height={week_Days_h['mon_h']} rx="20" ry="20" fill="#5235E8" ></rect>
                            <rect x="0" y={week_Days['mon_up']} width={80} height={17} rx="5" fill="#5235E8"></rect>
                            <g  visibility={mon_visibility?'visible':'hidden'}  onClick={() => setmon_visibility(v => !v)}>
                              <line x1="40" y1="5" x2="40" y2="195" stroke="#93AAFD"  strokeDasharray="5,5"></line> 
                              <circle cx="40" cy={week_Days['mon_up']} r="9" fill="white"  />
                             <circle  cx="40" cy={week_Days['mon_up']} r="3" fill="#5235E8" />

                            </g>
                             
                          </g>
                          <g>
                           <rect x="105" y="5" width={70} height={190} rx="20" ry="20" fill="#F8F8FF" ></rect>
                           <rect x="105" y={week_Days['tue_up']} width={70} height={week_Days_h['tue_h']} rx="20" ry="20" fill="#5235E8" ></rect>
                            <rect x="100" y={week_Days['tue_up']} width={80} height={17} rx="5" fill="#5235E8"></rect>
                            <g  visibility={tue_visibility?'visible':'hidden'}  onClick={() => settue_visibility(v => !v)}>
                              <line x1="140" y1="5" x2="140" y2="195" stroke="#93AAFD"  strokeDasharray="5,5"></line> 
                              <circle cx="140" cy={week_Days['tue_up']} r="9" fill="white"  />
                             <circle  cx="140" cy={week_Days['tue_up']} r="3" fill="#5235E8" />

                            </g>
                          </g>
                         <g>
                          <rect x="205" y="5" width={70} height={190} rx="20" ry="20" fill="#F8F8FF" ></rect>
                          <rect x="205" y={week_Days['wed_up']} width={70} height={week_Days_h['wed_h']} rx="20" ry="20" fill="#5235E8" ></rect>
                            <rect x="200" y={week_Days['wed_up']} width={80} height={17} rx="5" fill="#5235E8"></rect>
                            <g  visibility={wed_visibility?'visible':'hidden'}  onClick={() => setwed_visibility(v => !v)}>
                              <line x1="240" y1="5" x2="240" y2="195" stroke="#93AAFD"  strokeDasharray="5,5"></line> 
                              <circle cx="240" cy={week_Days['wed_up']} r="9" fill="white"  />
                             <circle  cx="240" cy={week_Days['wed_up']} r="3" fill="#5235E8" />

                            </g>
                         </g>
                          <g>
                            <rect x="305" y="5" width={70} height={190} rx="20" ry="20" fill="#F8F8FF" ></rect>
                            <rect x="305" y={week_Days['thu_up']} width={70} height={week_Days_h['thu_h']} rx="20" ry="20" fill="#5235E8" ></rect>
                            <rect x="300" y={week_Days['thu_up']} width={80} height={17} rx="5" fill="#5235E8"></rect>
                            <g  visibility={thu_visibility?'visible':'hidden'}  onClick={() => setthu_visibility(v => !v)}>
                              <line x1="340" y1="5" x2="340" y2="195" stroke="#93AAFD"  strokeDasharray="5,5"></line> 
                              <circle cx="340" cy={week_Days['thu_up']} r="9" fill="white"  />
                             <circle  cx="340" cy={week_Days['thu_up']} r="3" fill="#5235E8" />

                            </g>
                          </g>
                          <g>
                            <rect x="405" y="5" width={70} height={190} rx="20" ry="20" fill="#F8F8FF"></rect>
                            <rect x="405" y={week_Days['fri_up']} width={70} height={week_Days_h['fri_h']} rx="20" ry="20" fill="#5235E8" ></rect>
                            <rect x="400" y={week_Days['fri_up']} width={80} height={17} rx="5" fill="#5235E8"></rect>
                            <g  visibility={fri_visibility?'visible':'hidden'}  onClick={() => setfri_visibility(v => !v)}>
                              <line x1="440" y1="5" x2="440" y2="195" stroke="#93AAFD"  strokeDasharray="5,5"></line> 
                              <circle cx="440" cy={week_Days['fri_up']} r="9" fill="white"  />
                             <circle  cx="440" cy={week_Days['fri_up']} r="3" fill="#5235E8" />

                            </g>
                          </g>
                          
                      </svg>
                    </div>
                  </div>
                  <div className="ml-22 flex gap-x-18 text-gray-500">
                       <h1>Mon</h1>
                       <h1>Tue</h1>
                       <h1>Wed</h1>
                       <h1>Thu</h1>
                       <h1>Fri</h1>
                  </div>
                </div>
                <div className="flex flex-col w-1/2 shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] rounded-xl gap-y-2">
                  
                     <div className="ml-110 mt-4 border border-[#C893FD] relative flex w-30 h-8 bg-white rounded-lg">
                          <input className="ml-3 w-full font-extrabold outline-none" type="text" readOnly='true' value={batch} style={{fontFamily:'Times New Roman, serif'}} />
                          <select  className=" font-extrabold mr-8 outline-none absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={(e)=>{
                            setbatch(e.target.value)
                            if(e.target.value[1]!='t') setis_btech(false);
                            else setis_btech(true);
                            }} style={{fontFamily:'Times New Roman, serif'}} name="" id="">
                            <option  value=""disabled selected hidden></option>
                            <option  value="Btech CSE" >Btech CSE</option>
                            <option value="Btech ECE">Btech ECE</option>
                            <option  value="Btech ME" >Btech ME</option>
                            <option value="Btech CE">Btech CE</option>
                            <option  value="Btech AI/ML" >Btech AI/ML</option>
                            <option value="BCA">BCA</option>
                            <option  value="BSC" >BSC</option>
                            
                          </select>
                        </div>
                     {is_btech && (
                      <>
                       <div className="flex flex-col ml-7 gap-y-1" style={{fontFamily:'Times New Roman Serif'}}>
                        <div className="cursor-pointer">
                        <div className="flex gap-x-108">
                        <h1 className="text-sm text-[#615E83]" >4th Year</h1>
                        <h1 className="text-[#6D3AFF]">{line_chartper[0]?.toFixed(0)}%</h1>
                          </div>
                       <svg onClick={()=>{
                        setfirst_yr(false);
                        setsecond_yr(false);
                        setthird_yr(false);
                        setfourth_yr(true);
                       }} width={510} height={20} viewBox="0 0 510 20">
                        <defs>
                        <linearGradient
                      id="fade-purple_"
                      gradientUnits="objectBoundingBox"
                        x1="0" y1="0"
                        x2="1" y2="0"
                       >
                       <stop offset="0%"   stopColor="#4A3AFF" stopOpacity="1" />
                        <stop offset="100%" stopColor="#6D3AFF" stopOpacity="1"   />
                     </linearGradient>
                           </defs>
                          <rect x="" y="" width={510} height={20} rx="7" ry="7" fill="#F8F8FF" ></rect>
                          <rect x="" y="" width={line_chart[0]} height={20} rx="7" ry="7" fill={fourth_yr?"url(#fade-purple_)":'#9291A5'} ></rect>
                       </svg>
                        </div>
                       <div className="cursor-pointer">
                        <div className="flex gap-x-108">
                        <h1 className="text-sm text-[#615E83]" >3rd Year</h1>
                        <h1 className="text-[#6D3AFF]">{line_chartper[1]?.toFixed(0)}%</h1>
                          </div>
                       <svg onClick={()=>{
                        setfirst_yr(false);
                        setsecond_yr(false);
                        setthird_yr(true);
                        setfourth_yr(false);
                       }} width={510} height={20} viewBox="0 0 510 20">
                        
                          <rect x="" y="" width={510} height={20} rx="7" ry="7" fill="#F8F8FF" ></rect>
                          <rect x="" y="" width={line_chart[1]} height={20} rx="7" ry="7" fill={third_yr?"url(#fade-purple_)":'#9291A5'} ></rect>

                       </svg>
                        </div>
                        <div className="cursor-pointer">
                          <div className="flex gap-x-108">
                        <h1 className="text-sm text-[#615E83]" >2nd Year</h1>
                        <h1 className="text-[#6D3AFF]">{line_chartper[2]?.toFixed(0)}%</h1>
                          </div>
                        
                       <svg onClick={()=>{
                        setfirst_yr(false);
                        setsecond_yr(true);
                        setthird_yr(false);
                        setfourth_yr(false);
                       }} width={510} height={20} viewBox="0 0 510 20">
                        <defs>
                        <linearGradient
                      id="fade-purple_1"
                      gradientUnits="objectBoundingBox"
                        x1="0" y1="0"
                        x2="1" y2="0"
                       >
                       <stop offset="0%"   stopColor="#4A3AFF" stopOpacity="1" />
                        <stop offset="100%" stopColor="#6D3AFF" stopOpacity="1"   />
                     </linearGradient>
                           </defs>
                          <rect x="" y="" width={510} height={20} rx="7" ry="7" fill="#F8F8FF" ></rect>
                          <rect x="" y="" width={line_chart[2]} height={20} rx="7" ry="7" fill={second_yr?"url(#fade-purple_1)":'#9291A5'} ></rect>

                       </svg>
                        </div>
                        <div className="cursor-pointer">
                        <div className="flex gap-x-108">
                        <h1 className="text-sm text-[#615E83]" >1st Year</h1>
                        <h1 className="text-[#6D3AFF]">{line_chartper[3]?.toFixed(0)}%</h1>
                          </div>
                       <svg onClick={()=>{
                        setfirst_yr(true);
                        setsecond_yr(false);
                        setthird_yr(false);
                        setfourth_yr(false);
                       }} width={510} height={20} viewBox="0 0 510 20">
                          <rect x="" y="" width={510} height={20} rx="7" ry="7" fill="#F8F8FF" ></rect>
                           <rect x="" y="" width={line_chart[3]} height={20} rx="7" ry="7" fill={first_yr?"url(#fade-purple_1)":'#9291A5'} ></rect>
                       </svg>
                        </div>
                       </div>
                      </>
                     )}
                </div>
          </div>
        </div>
        </>
    )
}

export default Portfoliopage