import React, { useState } from "react";
import Avatar from "../../utils/avatar.jsx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Profile(){
  const [profilelogo,setprofilelogo]=useState("");
  const [name,setname]=useState("Adarsh Mishra");
  const [email,setemail]=useState("adarshmishr6@gmail.com");
  const [isEditContact, setisEditContact] = useState(false);
  const [isEditInfo, setisEditInfo] = useState(false);
  const Dispatch = useDispatch()
  const curractive= useSelector((state)=>state.CurrActive)
  const handleFileChange = async (event) => {
    const allCookies = document.cookie;
    console.log(allCookies);
    const file = event.target.files[0];
    console.log(file)
    const formData = new FormData();
    formData.append("avatar", file)
       try {
        const res = await fetch("http://localhost:8000/api/v1/users/avatar",{
        method: "POST",
        body: formData,
        credentials: "include", 
       });
       if(res.ok) {
        console.log("uploaded !!")
        const body = await res.json();
        const newAvatarUrl = body.data.user
        // Dispatch(ChangeAvatar(newAvatarUrl))
       }
       else {
        const err = await res.json()
        throw new Error(err.message)
       }
       }
       catch (err){
         setError(err.message);
       }

  }
  const HandleSubmitInfo = (e) => {
     if(e.target) {
       
     }
  }
   useEffect(()=>{
    const user = curractive['userData']
    if(user){
      console.log(user)
      setemail(user.email)
      setname(user.name)
      setprofilelogo(user.img)
    }
    else console.log("ERROOOOOOOOOOOOORRRRRRr")
   },[])
    return (
        <>
      <div className="flex flex-col w-screen h-screen">
        <div className="flex w-full h-4/10">
         <div className="flex flex-col mt-9 ml-7">
   <h1 className="font-extrabold text-xl" style={{fontFamily:'Times New Roman,Serif'}}> Contact info</h1>
     <h5 className="text-gray-400">Manage your Contact     .</h5>
         </div>
         <div className="flex flex-col w-230 rounded-lg ml-35 h-60 shadow-sm border border-gray-300 ">
          <div className=" border-b border-gray-300 h-1/2">
             <div className="flex mt-7 ml-6  gap-x-25">
              <div className="flex  gap-x-5">
                  <Avatar firstName="Adarsh" lastName="mishra" avatarUrl={profilelogo} size={56} className="" />
                  {/* <button className="cursor-pointer shadow-md text-3xl rounded-full  w-20 h-20 font-extrabold text-white bg-[#DEDAFB]" style={{fontFamily:'Times New Roman, Serif',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}} >{profilelogo}</button> */}
                  <div className="flex flex-col ">
                  <h1 className=" mt-5 text-xl font-extrabold" style={{fontFamily:'Times New Roman,Serif'}}>{name}</h1>
                   <h5 className=" text-gray-400">{email}</h5>
                  </div>
              </div>
                <label className="ml-90  w-38 h-12 mt-3 cursor-pointer font-extrabold rounded-lg border border-[#9785F1] text-[#5235E8] px-6 py-3 hover:text-[#5235E8] flex items-center justify-center"
                style={{ fontFamily: 'Times New Roman, Serif' }}
                 >
                Upload Photo
              <input
             type="file"
             onChange={handleFileChange}
            className="hidden"
            />
           </label>
             </div>
             </div>
             <form action={HandleSubmitInfo}>
             <div className="h-1/2 flex w-screen">
                <div className="flex flex-col ml-6 mt-7  ">
                   <h5 className="font-extrabold "  style={{fontFamily:'Times New Roman,Serif'}} name="DisplayName">Display name</h5>
                   <div className=" mt-2 w-103 h-11 border rounded-lg border-gray-300" >
                   <input  className="ml-5 w-105 h-full  outline-none" type="text" readOnly={isEditContact} />
                   </div>
                </div>
                   <div>
                <div className="flex flex-col ml-2  ">
                  <div className="flex mt-2 ml-4">
                   <h5 className="font-extrabold mt-5 ml-4 " style={{fontFamily:'Times New Roman,Serif'}}  name="email">Email</h5>
                    <label className="px-2 ml-69 w-20 h-6  cursor-pointer font-extrabold text-[#5235E8] px-6 py-3 hover:text-[#9785F1] flex items-center justify-center"
                style={{ fontFamily: 'Times New Roman, Serif' }} onClick={()=>{
                  setisEditContact(prev => !prev)
                }} type="submit"
                 >{isEditContact? 'EDIT' : 'SAVE'}
                 </label>
                  </div>
                   
                   <div className=" mt-2 w-103 ml-5 h-11 border rounded-lg border-gray-300" >
                   <input  className="ml-5 w-105 h-full  outline-none" type="text" readOnly={isEditContact} />
                   </div>
                </div>
                   </div>
                  
             </div>
            </form>
         </div>
        </div>
      <div className="flex w-full h-4/10">
           
         <div className="flex flex-col mt-9 ml-7">
   <h1 className="font-extrabold text-xl" style={{fontFamily:'Times New Roman,Serif'}}> Personal info</h1>
     <h5 className="text-gray-400">Manage your information</h5>
         </div>
         <div className="flex flex-col w-230 rounded-lg ml-30 h-60 shadow-sm border border-gray-300 ">
          <div className="flex ">
            <div className="flex flex-col ml-6 mt-4  ">
                   <h5 className="font-extrabold text-sm" style={{fontFamily:'Times New Roman,Serif'}}>First name</h5>
                   <div className="mt-1  w-103 h-11 border rounded-lg border-gray-300" >
                   <input  className="ml-5 w-105 h-full  outline-none" type="text"  readOnly={isEditInfo}/>
                   </div>
                </div>
                   <div className="flex flex-col ml-2  ">
                  <div className="flex mt-2 ml-2">
                   <h5 className="font-extrabold mt-2 ml-4 " style={{fontFamily:'Times New Roman,Serif'}}>Last Name</h5>
                    <label className="px-2 ml-63 w-20 h-6  cursor-pointer font-extrabold  text-[#5235E8] px-6 py-3 hover:text-[#9785F1] hover: flex items-center justify-center"
                style={{ fontFamily: 'Times New Roman, Serif' }} onClick={()=>{
                  setisEditInfo(prev => !prev)
                }}
                 >{isEditInfo? 'EDIT' : 'SAVE'}
                 </label>
                  </div>
                   
                   <div className="  w-103 ml-3 h-11 border rounded-lg border-gray-300" >
                   <input  className="ml-5 w-105 h-full  outline-none" type="text" readOnly={isEditInfo} />
                   </div>
                </div>
          </div>
             <div className="flex flex-col ml-6   ">
                   <h5 className="font-extrabold text-sm " style={{fontFamily:'Times New Roman,Serif'}}>Date of birth</h5>
                   <div className="mt-1  w-212 h-11 border rounded-lg border-gray-300" >
                   <input  className="ml-5 w-105 h-full  outline-none" type="text" readOnly={isEditInfo} />
                   </div>
                </div>
            <div className="flex flex-col ml-6   ">
                   <h5 className="font-extrabold text-sm " style={{fontFamily:'Times New Roman,Serif'}}>Country of residence</h5>
                   <div className=" mt-1 w-212 h-11 border rounded-lg border-gray-300" >
                   <input  className="ml-5 w-105 h-full  outline-none" type="text" readOnly={isEditInfo} />
                   </div>
                </div>
        </div>
      </div>
       <div className="flex w-full h-3/10">
         <div className="flex flex-col mt-9 ml-7">
          <div className="flex">
            <img className="h-5 w-5 mt-1" src="/assests/danger.svg" alt="" />
<h1 className="ml-3 font-extrabold text-xl" style={{fontFamily:'Times New Roman,Serif'}}> Danger Zone</h1>
          </div>
   
     <h5 className="text-gray-400">close your account</h5>
         </div>
         <div className="flex flex-col w-230 rounded-lg ml-30 h-30 shadow-sm border border-gray-300 ">
          <div className="flex mt-5 ml-6">
              <div className="flex flex-col">
              <h1 className="font-extrabold " style={{fontFamily:'Times New Roman, Serif'}}>Close account</h1>
              <h5 className="text-gray-400 text-sm">Closing your account can't be undone. Please make sure and do with precaution</h5>
              </div>
               <div className="w-38 ml-50 h-12 mt-3  cursor-pointer font-extrabold rounded-lg border  border-gray-400 text-[#FB3766] px-6 py-3 hover:text-[#C92C52]" style={{fontFamily:'Times New Roman, Serif'}}>
                      Close account
               </div>
              <div>

              </div>
             </div>
            
            
         </div>
        </div>
      </div>
        </>
    )
}

export default Profile