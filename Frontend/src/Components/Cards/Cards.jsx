import React from "react";

function Cards(props){

    return(
        <>
        <div className="flex flex-col gap-y-10 md:gap-y-15">
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-15 ">
        <div className="flex  flex-col rounded-lg bg-transparent shadow-lg w-75 h-50 md:w-80 md:h-70 gap-y-4 md:gap-y-8 hover:bg-gray-100">
          <img className="w-30 mt-6 ml-22 md:w-40 md:mt-10 md:ml-20 " src="/assests/Stars.svg" alt="" />
           <div className="flex flex-col ml-10 text-md md:text-lg font-extrabold"style={{ fontFamily: 'Times New Roman, serif' }}>
            <h1>"An amazing improvement in</h1>
            <h1 className="ml-4">faculties performance."</h1>
           </div>
           <div className="flex gap-x-2 ">
                <img className="w-8 h-8 ml-16 md:w-10 md:ml-20 md:h-10 rounded-full" src="/assests/Testomonial_1.jpg" alt="" />
                <div className="flex flex-col " style={{fontFamily:'Times New Roman, serif'}}>
                 <h5 className="font-extrabold">Anikesh Kumar</h5>
                  <h5 className="text-gray-500 text-sm ml-1">Senior Professor</h5>
                </div>
           </div>
       </div>
       <div className="flex  flex-col rounded-lg bg-transparent shadow-lg w-75 h-50 md:w-80 md:h-70 gap-y-4 md:gap-y-8 hover:bg-gray-100">
          <img className="w-30 mt-6 ml-22 md:w-40 md:mt-10 md:ml-20 " src="/assests/Stars.svg" alt="" />
           <div className="flex flex-col ml-10 text-md md:text-lg font-extrabold"style={{ fontFamily: 'Times New Roman, serif' }}>
            <h1>"It's worth it,An inspring shift</h1>
            <h1 className="ml-4">in academic delivery."</h1>
           </div>
           <div className="flex gap-x-2 ">
                <img className="w-8 h-8 ml-16 md:w-10 md:ml-20 md:h-10 rounded-full" src="/assests/Testomonial_3.jpg" alt="" />
                <div className="flex flex-col " style={{fontFamily:'Times New Roman, serif'}}>
                 <h5 className="font-extrabold">Ashish Rastogi</h5>
                  <h5 className="text-gray-500 text-sm ml-1">Academic Dean</h5>
                </div>
           </div>
       </div>
       <div className="flex  flex-col rounded-lg bg-transparent shadow-lg w-75 h-50 md:w-80 md:h-70 gap-y-4 md:gap-y-8 hover:bg-gray-100">
          <img className="w-30 mt-6 ml-22 md:w-40 md:mt-10 md:ml-20" src="/assests/Stars.svg" alt="" />
           <div className="flex flex-col ml-10 text-md md:text-lg font-extrabold"style={{ fontFamily: 'Times New Roman, serif' }}>
            <h1>"A remarkable transformation</h1>
            <h1 className="ml-4">in classroom dynamics."</h1>
           </div>
           <div className="flex gap-x-2 ">
                <img className="w-8 h-8 ml-16 md:w-10 md:ml-20 md:h-10 rounded-full" src="/assests/Testomonial_2.jpg" alt="" />
                <div className="flex flex-col " style={{fontFamily:'Times New Roman, serif'}}>
                 <h5 className="font-extrabold">Savanna</h5>
                  <h5 className="text-gray-500 text-sm ml-1">Head of Depart</h5>
                </div>
           </div>
       </div>
        </div>
        <img className="shadow-[0_4px_6px_rgba(82,53,232,0.5)] w-75 md:w-220 md:ml-25 rounded-4xl" src="/assests/Content_banner.svg" alt="" />
        </div>
        </>
    )
}

export default  Cards