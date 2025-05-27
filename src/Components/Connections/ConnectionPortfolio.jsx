import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { useRef } from "react";
function ConnectionPortfolio(User){
     const [month,setmonth]=useState([]);
     const [percInc,setpercInc]=useState("0");
     let data=""
     useEffect(()=>{
      setpercInc(Number((((Value['value'].prevD_up-Value['value'].prevPD_up)/Math.abs(Value['value'].prevPD_up))).toFixed(1)))
     },[])
       const y_cordinate=[],x_cordinate=[];
      const Value=useSelector((state)=>state.CurrActive);
      
      // console.log(points)
      const y_cor=new Array(360,300,230,140,50);
      const cordinate=Value['value'].upv_twlmonths;
      const len=cordinate.length;
      let val=0;
       for(let i=0;i<len;i++){
        let x=[]
        for(let j=0;j<4;j++){
             x_cordinate.push(val+(j+1)*25);
             if(cordinate[i][j]<100){
                 let base=0,ceil=100;
                 let delta=cordinate[i][j]-base;
                 let range=ceil-base;
                 let per=delta/range;
                 let inter=400-y_cor[0];
                 let y=400-(inter*per);
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

      let closest = x_and_y[0];
      for (let p of x_and_y) {
        if (Math.abs(p.x - x) < Math.abs(closest.x - x)) {
          closest = p;
        }
      }

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
        <div className="flex flex-col w-screen h-screen">
          <div className="flex mt-5 ml-12 w-310 h-23 border-b border-gray-300 gap-x-160">
            <div className="flex ">
             <img className="h-20 w-20 rounded-[50%]" src={Value['value'].img} alt="" />
              <div className="flex flex-col mt-3" style={{fontFamily:'Times New Roman, Serif'}}>
              <div className="flex ml-4 font-extrabold  gap-x-2" style={{fontFamily:'Times New Roman, Serif'}}>
                 <h1 className="text-3xl">{Value['value'].Title}</h1>
                 <h1 className="text-3xl">{Value['value'].name}</h1>
              </div>
              <h5 className="flex justify-center text-gray-400 text-sm" >{Value['value'].address}</h5>
              </div>
              <h1 className={`mt-3 ml-3 font-extrabold text-sm ${Value['value'].max_title=="Grand Master"?'text-[#FB3766]':Value['value'].max_title == "Master"?'text-[#5235E8]':Value['value'].max_title == "Senior Faculty"?'text-[#DAF727]':'text-black]'} `}  style={{fontFamily:'Times New Roman, Serif'}}>{Value['value'].max_title}</h1>
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
          <div className="ml-12 mt-2 flex flex-col">
             <h1 className="font-extrabold text-xl" style={{fontFamily:'Times New Roman Serif'}}>Portfolio</h1>
             <div className="flex">
              <svg ref={svgRef} width="1100" height="400" viewBox="0 0 1200 400" style={{ pointerEvents: 'all' }}>
               <defs>
    <linearGradient
      id="fade-purple"
      gradientUnits="userSpaceOnUse"
      x1="0" y1="0"
      x2="0" y2="400"
    >
      <stop offset="0%"   stopColor="#5235E8" stopOpacity="0.2" />
      <stop offset="100%" stopColor="#5235E8" stopOpacity="0"   />
    </linearGradient>
  </defs>
                <line x1="100" y1="0" x2="100" y2="400" stroke="#E3E3E8"></line>
                <line x1="200" y1="0" x2="200" y2="400" stroke="#E3E3E8"></line>
                <line x1="300" y1="0" x2="300" y2="400" stroke="#E3E3E8"></line>
                <line x1="400" y1="0" x2="400" y2="400" stroke="#E3E3E8"></line>
                <line x1="500" y1="0" x2="500" y2="400" stroke="#E3E3E8"></line>
                <line x1="600" y1="0" x2="600" y2="400" stroke="#E3E3E8"></line>
                <line x1="700" y1="0" x2="700" y2="400" stroke="#E3E3E8"></line>
                <line x1="800" y1="0" x2="800" y2="400" stroke="#E3E3E8"></line>
                <line x1="900" y1="0" x2="900" y2="400" stroke="#E3E3E8"></line>
                <line x1="1000" y1="0" x2="1000" y2="400" stroke="#E3E3E8"></line>
                <line x1="1100" y1="0" x2="1100" y2="400" stroke="#E3E3E8"></line>
                <line x1="1200" y1="0" x2="1200" y2="400" stroke="#E3E3E8"></line>
                {/* y axis label */}
                <line x1="0" y1="360" x2="1200" y2="360" stroke="#E3E3E8"></line>
                <line x1="0" y1="300" x2="1200" y2="300" stroke="#E3E3E8"></line>
                <line x1="0" y1="230" x2="1200" y2="230" stroke="#E3E3E8"></line>
                <line x1="0" y1="140" x2="1200" y2="140" stroke="#E3E3E8"></line>
                 <line x1="0" y1="50" x2="1200" y2="50" stroke="#E3E3E8"></line>

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
      L ${x_cordinate[x_cordinate.length-1]},400   
      L ${x_cordinate[0]},400
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
            <line x1="-12000" y1="" x2="1200" y2="" stroke="black" ></line>
            <circle r="9" fill="white"  />
            <circle r="3" fill="#5235E8" />
</g>

              </svg>
              <div className="ml-7 text-gray-500">
                <h1 className="mt-1">20k</h1>
                <h1 className="mt-5">10k</h1>
                <h1 className="mt-15">5k</h1>
                <h1 className="mt-15">2.5k</h1>
                <h1 className="mt-10">500</h1>
                <h1 className="mt-7">100</h1>
              </div>
             </div>
          </div>
          <div className="flex  ml-33 gap-x-16.5 text-gray-500">
           {last12Months.map((value)=>(
             <h1 className="">{value}</h1>
           ))}
          </div>
        </div>
        </>
       )
}

export default ConnectionPortfolio