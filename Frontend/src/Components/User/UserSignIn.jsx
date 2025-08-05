import React, { use } from "react";
import { useState } from "react";
import { Eye, EyeOff } from 'lucide-react';
import { NavLink } from "react-router-dom";
import { ChangeLogIn } from "../../Features/DashboardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


function UserSignIn(){
    const [show,setshow]=useState(false);
    const [role,setrole]=useState("HOD")
    const [formData,setformData] = useState({
      email: "",
      organization: "",
      password : "",
    })
    const [islogin,setislogin] = useState(false);
    const [orgList, setorgList] = useState([])
    const [org, setorg] = useState("Select Organization")
    const [orgs, setorgs] = useState("Select Organization")
    // console.log(islogin)
    const curractive= useSelector((state)=>state.CurrActive)
    const Disptach = useDispatch();


    useEffect(()=>{
      Disptach(ChangeLogIn(islogin));
      console.log(islogin)
    },[islogin])
    
    const handleSubmit = async (e) => {
      console.log(formData)
      try{
      const res = await fetch("http://localhost:8000/api/v1/users/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include"
       })
       if(res.ok) {
        setislogin(true);
        const body = await res.json();
        console.log(body)
        setformData({
          email: "",
          organizationID: "",
          password: ""
        })
       }
       else {
        const err= await res.json();
         throw new Error(err.message || "Login failed");
       }
      }
      catch (err) {
           console.log(err.message)
      }

    }
    /*          Fetch All Organization          */
    useEffect( ()=> {
      const fetchOrg = async() => {
      try {
       const res = await fetch("http://localhost:8000/api/v1/admin/AllOrganization", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", 
       })

       if(!res.ok) {
        throw new Error("Something went Wrong")
       }
       else {
        const data = await res.json();

        // console.log(typeof(data.data.org))
        setorgList(data.data.org)
       }
      }
      catch (err) {
          throw new Error("Error while fetching Org detail")
      }
    }
    fetchOrg();
    }, [])
      
    
    const handleEvent = (e) => {
       setformData({
        ...formData,
        [e.target.name] : e.target.value,
      
       })
     
    }
    return(
        <>
         <div className="flex h-screen w-screen">
  {/* left half */}
  <div className="relative w-2/5 h-full overflow-hidden">
    <form action={handleSubmit}>
    <svg
      className="absolute inset-0 w-full h-full block"
      viewBox="0 0 80 148"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(82,53,232,0.02)" />
          <stop offset="100%" stopColor="rgba(82,53,232,0.1)" />
        </linearGradient>
      </defs>
      <path
        d="M 0 0 H 80 V 148 H 0 Z"
        fill="url(#areaGrad)"
        strokeWidth="2"
        stroke="none"
      />
    </svg>
    <div className="flex flex-col w-full mt-2  ml-15 ">
     <div className="flex flex-col p-5">
        <h1 className="font-extrabold text-3xl " style={{fontFamily:'Times New Roman, serif'}}>Sign in to Whisprr</h1>
        <h5 className="text-gray-500 text-sm mt-2">We're glad your back.</h5>
     </div>
     <div className="flex flex-col gap-y-3 ml-5 mt-3">
        <div className="flex flex-col">
            <label className="font-extrabold text-sm" style={{fontFamily:'Times New Roman, serif'}}  htmlFor="">Email</label>
            <div className="caret-purple-400 w-80 relative h-10 rounded-md bg-white border border-gray-300 hover:shadow-[0_0_8px_rgba(82,53,232,0.3)] hover:border-purple-300">
                <input className="bg-white-500 outline-none w-full p-2 absolute" onChange={handleEvent} name="email" type="text" value={formData.email} />
            </div>
        </div>
     </div>
     
     <div className="flex flex-col gap-y-3 ml-5 mt-3">
        <div className="flex flex-col">
            <label className="font-extrabold text-sm" style={{fontFamily:'Times New Roman, serif'}}  htmlFor="">Sign in as</label>
            <div className="caret-purple-400 w-80 relative h-10 rounded-md bg-white border border-gray-300 hover:shadow-[0_0_8px_rgba(82,53,232,0.3)] hover:border-purple-300">
            <input className="ml-3 w-full py-2 text-sm font-extrabold outline-none" type="text" readOnly='true' value={role} style={{fontFamily:'Times New Roman, serif'}} />
                          <select  className=" font-extrabold mr-8 outline-none absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={(e)=>setrole(e.target.value)} style={{fontFamily:'Times New Roman, serif'}} name="" id="">
                            <option  value=""disabled selected hidden></option>
                            <option className="hover:bg-[#5235E8]" value="HOD" >HOD</option>
                            <option value="Faculty">Faculty</option>
                            <option  value="Student" >Student</option>
                           
                          </select>
            </div>
        </div>
     </div>
     <div className="flex flex-col gap-y-3 ml-5 mt-3">
        <div className="flex flex-col">
            <label className="font-extrabold text-sm" style={{fontFamily:'Times New Roman, serif'}}  htmlFor="">Organization</label>
            <div className="caret-purple-400 w-80 relative h-10 rounded-md bg-white border border-gray-300 hover:shadow-[0_0_8px_rgba(82,53,232,0.3)] hover:border-purple-300">
                <input
      className="ml-3 w-full py-2 text-sm font-extrabold outline-none"
      type="text"
      readOnly={true}
      value={formData.organization}
      style={{ fontFamily: "Times New Roman, serif" }}
    />

    {/* A single controlled select: */}
    <select
      name="organization" value={formData.organization} onChange={handleEvent}  className="font-extrabold mr-8 outline-none absolute inset-0 w-full h-full opacity-0 cursor-pointer" style={{ fontFamily: "Times New Roman, serif" }}
    >
      <option value="" disabled hidden>
        Select an organization
      </option>
      {orgList.map((orgName, idx) => (
        <option key={idx} value={orgName}>
          {orgName}
        </option>
      ))}
    </select>
            </div>
        </div>
     </div>
     <div className="flex flex-col gap-y-3 ml-5 mt-3">
        <div className="flex flex-col">
            <label className="font-extrabold text-sm" style={{fontFamily:'Times New Roman, serif'}}  htmlFor="">Password</label>
            <div className="flex caret-purple-400 w-80 relative h-10 rounded-md bg-white border border-gray-300 hover:shadow-[0_0_8px_rgba(82,53,232,0.3)] hover:border-purple-300">
                <input className="bg-white-500 outline-none w-full p-2 absolute" onChange={handleEvent} name="password" type={show?'text':'password'} value={formData.password} />
                <button className=" absolute inset-y-0 right-0 flex items-center px-3 text-gray-400"
        tabIndex={-1} onClick={()=>setshow(!show)}>{show ? <EyeOff size={20} /> : <Eye size={20} />}</button>
            </div>
        </div>
     </div>
      <NavLink to="/forgetpass">
      <label className=" relative cursor-pointer font-extrabold text-sm ml-5 mt-3 text-[#5235E8]"  style={{fontFamily:'Times New Roman, serif'}}  htmlFor="">Forget password?</label>
      </NavLink>
     
     <div className="flex flex-col gap-y-3 ml-5 mt-7">
        <button className="flex text-lg py-1 relative px-2 justify-center cursor-pointer w-80 h-10 text-white rounded-md bg-[#5235E8] hover:bg-[#7C64ED]" type="submit" style={{fontFamily:'Times New Roman Serif'}}>
          Sign In
       </button>
        <div className="flex cursor-pointer">
            <div className="flex py-2 relative px-2 justify-center w-80  h-10 rounded-md bg-white  ">
            <div className="mr-2">
            <svg viewBox="0 0 48 48" width="20" height="20">
  <path fill="#EA4335" d="M24 9.5c3.24 0 6.15 1.11 8.43 2.94l6.28-6.28C34.65 2.07 29.65 0 24 0 14.72 0 6.85 5.52 2.89 13.44l7.79 6.06C12.04 12.23 17.56 9.5 24 9.5z" />
  <path fill="#34A853" d="M46.12 24.55c0-1.74-.15-3.42-.42-5.05H24v9.55h12.42c-.54 2.88-2.14 5.32-4.59 6.96v5.81h7.43c4.35-4.01 6.86-9.93 6.86-17.27z" />
  <path fill="#FBBC05" d="M10.68 28.12a14.53 14.53 0 010-8.24v-5.81H3.25a24.006 24.006 0 000 19.86l7.43-5.81z" />
  <path fill="#4285F4" d="M24 48c6.48 0 11.92-2.14 15.89-5.82l-7.43-5.81c-2.08 1.4-4.76 2.23-8.46 2.23-6.44 0-11.96-4.2-13.94-9.9l-7.79 6.06C6.85 42.48 14.72 48 24 48z" />
</svg>
            </div>
           

              <h3 className=" flex  text-black text-sm font-extrabold" style={{fontFamily:'Times New Roman, serif'}}>Sign in with Google</h3>  
            </div>
        </div>
        <div className="flex cursor-pointer">
            <div className="flex py-2 relative px-2 justify-center w-80  h-10 rounded-md bg-white  ">
            <div className="mr-2">
            <svg viewBox="0 0 48 48" width="24" height="24">
        <path
         fill="#1877F2"
         d="M24 0C10.75 0 0 10.75 0 24s10.75 24 24 24 24-10.75 24-24S37.25 0 24 0z"
        />
        <path
         fill="#FFF"
         transform="scale(1.2) translate(-4 -4)"
         d="M26.67 24h-2.84v12h-4.91V24h-2.1v-4.16h2.1v-2.64c0-1.83.87-4.68 4.68-4.68l3.44.01v3.83h-2.5c-.41 0-.99.21-.99 1.1v2.38h3.52L26.67 24z"
        />
        </svg>
            </div>
           

              <h3 className=" flex  text-black text-sm font-extrabold" style={{fontFamily:'Times New Roman, serif'}}>Sign in with Facebook</h3>  
            </div>
        </div>
     </div>
     <div className="flex mt-5 ml-15">
       <h5 className="text-sm">Don't have an account already?</h5>
       <h3 className=" relative cursor-pointer font-extrabold text-[#5235E8] hover:text-[#7C64ED]" style={{fontFamily:'Times New Roman, serif'}}>Sign up now</h3>
     </div>
    </div>
    </form>
  </div>

  {/* right half */}
  <div className="flex  flex-col w-3/5 h-full bg-[#0E0637] rounded-l-2xl relative">
    <div className="flex flex-col ">
      {/* <img className="w-50 block w-[400px] h-auto"  src="/assests/sign_up_page.svg" alt="" /> */}
      <div className="flex flex-col w-full mt-10">
        <div className="mt-6 rounded-l-2xl flex ml-auto flex-col bg-white w-130 h-17 ">
           <div className="flex py-2 px-2" style={{fontFamily:'Times New Roman, serif'}}>
             <img className="w-13 h-13 ml-3 rounded-full" src="/assests/nikita.jpg" alt="" />
             <div className="flex ml-5 mt-3 gap-x-3">
               <h3 className="text-gray-400 text-2xl font-extrabold">Ms</h3>
               <h3 className="text-black  text-2xl font-extrabold">Nikita</h3>

             </div>
             <div className="flex ml-35 mt-2 gap-x-7 ">
               <img className="w-5 " src="/assests/upvote.svg" alt="" />
               <img className="w-16" src="/assests/graph_1.svg" alt="" />
             </div>
           </div>

        </div>
        <div className="mt-6 rounded-l-2xl flex ml-auto flex-col bg-white w-140 h-17 ">
        <div className="flex py-2 px-2" style={{fontFamily:'Times New Roman, serif'}}>
             <img className="w-13 h-13 ml-3 rounded-full" src="/assests/profile_updated.svg" alt="" />
             <div className="flex ml-5 mt-3 gap-x-3">
               <h3 className="text-gray-400 text-2xl font-extrabold">Ms</h3>
               <h3 className="text-black  text-2xl font-extrabold">Pooja</h3>

             </div>
             <div className="flex ml-35 mt-2 gap-x-7 ">
               <img className="w-5 " src="/assests/upvote.svg" alt="" />
               <img className="w-16" src="/assests/graph_2.svg" alt="" />
             </div>
           </div>
        </div>
      </div>
      <div className="flex flex-col w-full  ">
        <div className="mt-6 rounded-l-2xl flex ml-auto flex-col bg-white w-90 h-17 ">
        <div className="flex py-2 px-2" style={{fontFamily:'Times New Roman, serif'}}>
             <img className="w-12 h-12 ml-3 rounded-full" src="/assests/arryan.jpg" alt="" />
             <div className="flex ml-5 mt-3 gap-x-3">
               <h3 className="text-gray-400 text-2xl font-extrabold">Mr</h3>
               <h3 className="text-black  text-2xl font-extrabold">Aaryan</h3>

             </div>
             <div className="flex ml-10 mt-2 gap-x-7 ">
               <img className="w-5 " src="/assests/upvote.svg" alt="" />
               <img className="w-16" src="/assests/graph_3.svg" alt="" />
             </div>
           </div>
        </div>
        <div className="mt-6 rounded-l-2xl flex ml-auto flex-col bg-white w-110 h-17 ">
        <div className="flex py-2 px-2" style={{fontFamily:'Times New Roman, serif'}}>
             <img className="w-13 h-13 ml-3 rounded-full" src="/assests/bhasin.png" alt="" />
             <div className="flex ml-5 mt-3 gap-x-3">
               <h3 className="text-gray-400 text-2xl font-extrabold">Dr</h3>
               <h3 className="text-black  text-2xl font-extrabold">Bhasin</h3>

             </div>
             <div className="flex ml-25 mt-2 gap-x-7 ">
               <img className="w-5 " src="/assests/downvotes.svg" alt="" />
               <img className="w-16" src="/assests/graph_4.svg" alt="" />
             </div>
           </div>
        </div>
      </div>
      <div className="mt-6 rounded-l-2xl flex ml-auto flex-col bg-white w-140 h-17 ">
      <div className="flex py-2 px-2" style={{fontFamily:'Times New Roman, serif'}}>
             <img className="w-13 h-13 ml-3 rounded-full" src="/assests/Dinesh.png" alt="" />
             <div className="flex ml-5 mt-3 gap-x-3">
               <h3 className="text-gray-400 text-2xl font-extrabold">Dr</h3>
               <h3 className="text-black  text-2xl font-extrabold">Dinesh</h3>

             </div>
             <div className="flex ml-45 mt-2 gap-x-7 ">
               <img className="w-5 " src="/assests/downvotes.svg" alt="" />
               <img className="w-16" src="/assests/graph_5.svg" alt="" />
             </div>
           </div>
        </div>
      </div>
      <div className="flex flex-col text-white mt-15 ml-30 gap-y-4" >
        <div className="flex flex-col font-extrabold text-3xl"style={{fontFamily:'Times New Roman, serif'}}>
          <h1>~"Welcome to Whisprr</h1>
          <h1> — log in for instant insights and smarter growth."</h1>
        </div>
        <div className="flex flex-col font-extrbold">
            <h3>We are the first feedback platform to offer real-time rankings, seamless dashboard integration,</h3>
            <h3> and live performance tracking — all in one place.</h3>
            <h4 className="text-sm ml-[30%] mt-3">Copyright 2025 © Whisprr</h4>
        </div>
      </div>

    </div>
    
  </div>

        </>
    )
}

export default UserSignIn