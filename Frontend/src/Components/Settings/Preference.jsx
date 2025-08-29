import React, { useState, useEffect} from "react";
import { useSelector } from "react-redux";

function Preference(){
    const [isEditAbout, setisEditAbout] = useState(true);
    const [isEditAddress, setisEditAddress] = useState(true);

    const curractive= useSelector((state)=>state.CurrActive)
    const [plot,setplot] = useState("")
    const [about, setabout] = useState("")
    const [area, setarea] = useState("")
    const [city, setcity] = useState("")
    const [state, setstate] = useState("")
    const HandleSubmitAbout = async (e) => {
        e.preventDefault();
        const about = e.target.about?.value;
       
        try {
          const res = await fetch("http://localhost:8000/api/v1/users/UserAbout",{
            method : "POST",
            headers : { "Content-Type": "application/json" },
            body : JSON.stringify({about}),
            credentials: "include",
          });
          if(res.ok) {
            console.log("About updated successfully")
          }
          else {
             const err = await res.json()
             throw new Error(err.message)
          }
        }
        catch (err) {
          setError(err.message)
        }
    } 
    const HandleSubmitAddress = async (e) => {
        e.preventDefault();
        const plot = e.target.plot?.value;
        const area = e.target.area?.value;
        const city = e.target.city?.value;
        const state = e.target.state?.value;
       
        try {
          const res = await fetch("http://localhost:8000/api/v1/users/UserAddress",{
            method : "POST",
            headers : { "Content-Type": "application/json" },
            body : JSON.stringify({plot, area, city, state}),
            credentials: "include",
          });
          if(res.ok) {
            console.log("Address updated successfully")
          }
          else {
             const err = await res.json()
             throw new Error(err.message)
          }
        }
        catch (err) {
          setError(err.message)
        }
    } 
    useEffect(() => {
       const user = curractive['userData']
       if(user) {
          setabout(user.about)
          setplot(user.plot)
          setcity(user.city)
          setstate(user.state)
          setarea(user.area)
       }
    },[])
    return (

      <>
       <div className="flex flex-col w-screen h-screen">
        <div className="flex flex-col md:flex-row w-full ">
         <div className="flex flex-col mt-9 ml-7 w-62 gap-y-5">
   <h1 className="font-extrabold text-xl" style={{fontFamily:'Times New Roman,Serif'}}>Write About Yourself</h1>
     <h5 className="text-gray-400">Provide a brief summary about yourself—your role, interests, and key expertise.</h5>
         </div>
         <form onSubmit={HandleSubmitAbout}>
         <div className="flex flex-col w-90 md:w-227 rounded-lg ml-2 md:ml-14 h-40 mt-6  shadow-sm border border-gray-300 ">
            <div className="flex">
                  <h1 className="mt-7 ml-10 font-extrabold" style={{fontFamily:'Times New Roman'}}>About</h1>
            <button className="h-6 " type={!isEditAbout ? "button" : "submit"}>
               <label className="px-2 mt-5 ml-50 md:ml-175 w-20 h-6  cursor-pointer font-extrabold text-[#5235E8] px-6 py-3 hover:text-[#9785F1] flex items-center justify-center"
                style={{ fontFamily: 'Times New Roman, Serif' }} onClick={()=>{
                  setisEditAbout(prev => !prev)
                }} 
                 >{isEditAbout? 'EDIT' : 'SAVE'}
                 </label>
                      </button>
                     
            </div>
             
         
      <div className="mt-1 ml-10 w-70 md:w-210 h-20 border rounded-lg border-gray-300" >
                   <input  className="ml-5 w-70 nd:w-200 h-full text-gray-400 outline-none" type="text" defaultValue={about} name="about" readOnly={isEditAbout}/>
                   </div>
         </div>
         </form>
        </div>
      <div className="flex flex-col md:flex-row w-full  mt-10 gap-y-5 ">
           
         <div className="flex flex-col mt-3 ml-7 w-70 gap-y-5">
   <h1 className="font-extrabold text-xl" style={{fontFamily:'Times New Roman,Serif'}}>Address</h1>
     <h5 className="text-gray-400">Ensure your current residential address is accurate and up-to-date</h5>
         </div>
       <form onSubmit={HandleSubmitAddress}>
         <div className="flex flex-col md:w-230 rounded-lg ml-2 w-90 md:ml-6 h-60 shadow-sm border border-gray-300 ">
          <div className="flex ">
            <div className="flex flex-col ml-6 mt-4  ">
                   <h5 className="font-extrabold text-sm" style={{fontFamily:'Times New Roman,Serif'}}>Plot/Building</h5>
                   <div className="mt-1 w-30 md:w-103 h-11 border rounded-lg border-gray-300" >
                   <input  className="ml-5 w-30 md:w-105 h-full text-gray-400 outline-none" type="text" defaultValue={plot} name="plot" readOnly={isEditAddress}/>
                   </div>
                </div>
                   <div className="flex flex-col ml-2  ">
                  <div className="flex mt-2 ml-2">
                   <h5 className="font-extrabold mt-3 md:mt-2 ml-4 text-sm md:text-md " style={{fontFamily:'Times New Roman,Serif'}}>Area/Landmark</h5>
                   <button className="h-6" type={!isEditAddress?"button":"submit"}>
                <label className="px-2 ml-52 w-20 h-6  cursor-pointer font-extrabold  text-[#5235E8] px-6 py-3 hover:text-[#9785F1] hover: flex items-center justify-center"
                style={{ fontFamily: 'Times New Roman, Serif' }} onClick={()=>{
                  setisEditAddress(prev => !prev)
                }}
                 >{isEditAddress? 'EDIT' : 'SAVE'}
                 </label>
                   </button>
                    
                  </div>
                   
                   <div className=" w-45 md:w-103 ml-3 h-11 border rounded-lg border-gray-300" >
                   <input  className=" w-45 ml-5 md:w-105 h-full text-gray-400 outline-none" type="text" defaultValue={area} name="area" readOnly={isEditAddress} />
                   </div>
                </div>
          </div>
             <div className="flex flex-col ml-6   ">
                   <h5 className="font-extrabold text-sm " style={{fontFamily:'Times New Roman,Serif'}}>City/District</h5>
                   <div className="mt-1 w-80 md:w-212 h-11 border rounded-lg border-gray-300" >
                   <input  className="ml-5 w-80 md:w-105 h-full text-gray-400 outline-none" type="text" defaultValue={city} name="city" readOnly={isEditAddress} />
                   </div>
                </div>
            <div className="flex flex-col ml-6   ">
                   <h5 className="font-extrabold text-sm " style={{fontFamily:'Times New Roman,Serif'}}>State</h5>
                   <div className=" mt-1  w-80 md:w-212 h-11 border rounded-lg border-gray-300" >
                   <input  className="ml-5 w-80 md:w-105 h-full text-gray-400 outline-none" type="text" defaultValue={state} name="state" readOnly={isEditAddress} />
                   </div>
                </div>
        </div>
        </form>
      </div>
      <div className="ml-60 md:ml-280 mt-2 md:mt-8">
          <div className="flex cursor-pointer py-2 relative px-2 justify-center w-25  h-10 rounded-md bg-[#5235E8] hover:bg-[#7C64ED] " style={{fontFamily:'Times New Roman,Serif'}}>
              <h3 className="font-extrabold flex  text-white">Save</h3>  
        </div>
        </div> 
      </div>
        </>
    )
}

export default Preference