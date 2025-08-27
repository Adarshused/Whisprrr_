import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import DashboardHeader from './Components/Dashboard/DashboardHeader.jsx';
import {useDispatch,useSelector} from 'react-redux';
import Settings from './Components/Settings/Settings.jsx'
import Settingsheader from './Components/Settings/Settingsheader.jsx';
import { ChangeleaderBoard, ChangeLogIn, ChangeUserData, Update_user } from './Features/DashboardSlice.js';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { useCurrentUser } from './utils/useCurrentUser.js';
import { HashLoader} from 'react-spinners'
import { fetchCurrentUser } from './utils/Getme.js';

const queryClient  = new QueryClient()

function App(props) {
  

  const [islogin,setislogin] = useState(false)
  const [dashboard,setdashboard] = useState(false);
  const [connections,setconnections]=useState(false);
  const [announcements,setannouncements]=useState(false);
  const [portfolio,setportfolio]=useState(false);
  const [chat,setchat]=useState(false);
  const [setting,setsetting]=useState(false);
   const [heading,setheading]=useState("Dashboard");
   const [Sheading,setSheading] = useState("Profile")
  
   const curractive= useSelector((state)=>state.CurrActive)
  
   
   const {data: {user, faculties } = {}, isLoading, isFetching, isError} =  useCurrentUser();

   const Dispatch=useDispatch();
   useEffect(()=>{

          if(isError) {
          console.log("ERROR while getting user")
         Dispatch(ChangeLogIn(false));
         setislogin(false)
        
        }
      else if(isLoading) {
        <HashLoader color={"#5235E8"} loading={true} size={150}
        aria-label="Loading Spinner"
        data-testid="loader" />
       }
    else {
       Dispatch(ChangeLogIn(true))
  
       const  UserData = user?.data?.user
       if(UserData){
        
        const leaderboard = faculties?.data?.leaderBoard ?? [];
        const lpaylod = [];
       console.log(leaderboard, "here")
       for (let i = 0; i < leaderboard.length; ++i) {
          const item = leaderboard[i];
          const counts24 = item?.counts24 ?? []; // array or object
          let total = 0;

     // sum values
      if (Array.isArray(counts24)) {
       for (let j = 0; j < counts24.length; ++j) {
        counts24[j] = Number(counts24[j] || 0);
        total += counts24[j];
     }
   } 
     else if (counts24 && typeof counts24 === 'object') {
       for (const k in counts24) {
        counts24[k] = Number(counts24[k] || 0);
        total += counts24[k];
     }
  }
 
  const score = Number(item?.score || 0);
  const prevUp = score - total;

  // ADD prevUp to each element (mutates counts24)
  if (Array.isArray(counts24)) {
    for (let j = 0; j < counts24.length; ++j) {
      counts24[j] = counts24[j] + prevUp;
    }
  } else if (counts24 && typeof counts24 === 'object') {
    for (const k in counts24) {
      counts24[k] = counts24[k] + prevUp;
    }
  }

  const Data = { ...item, PrevUpv: prevUp };
  lpaylod.push(Data);
}

        
         /* Here setuservalue or useState is an asynchronous call and im dispatching the value to the store since the setuservalue is not been updated its dispatching the old values itself 
         so i instead of storing the value in setuservalue now i directly store it in payload const */
         
        const FacultyData = UserData[0];
        const payload ={
          id: FacultyData?._id?FacultyData?._id:"",
          firstname:FacultyData?.firstname?FacultyData.firstname:"",
          lastname:FacultyData?.lastname?FacultyData.lastname:"",
          dob:FacultyData?.dob?FacultyData.dob:"",
          cor:FacultyData?.country_residence?FacultyData.country_residence:"",
          name:FacultyData?.displayname?FacultyData.displayname:"",
          email:FacultyData?.email?FacultyData.email:"",
          Title: FacultyData?.title?FacultyData.title:"",
          img: FacultyData?.avatar?FacultyData.avatar:"",
          upvote: FacultyData?.Upvote?FacultyData.Upvote:"",
          about: FacultyData?.about?FacultyData.about:"",
          area: FacultyData?.area?FacultyData.area:"",
          plot: FacultyData?.plot?FacultyData.plot:"",
          state: FacultyData?.state?FacultyData.state:"",
          city: FacultyData?.city?FacultyData.city:"",
          twentyFour_hour: FacultyData?.twentyFour_hour?FacultyData.twentyFour_hour:"",
          prevD_up: FacultyData?.prevD_up?FacultyData.prevD_up:"",
          max_title: FacultyData?.max_title?FacultyData.max_title:"",
          max_upvote: FacultyData?.max_upvote?FacultyData.max_upvote:"",
          address: FacultyData?.address?FacultyData.address:"",
          experience: FacultyData?.experience?FacultyData.experience:"",
          upv_twlmonths: FacultyData?.upv_twlmonths?FacultyData.upv_twlmonths:[[]],
          weekly_upvot: FacultyData?.weekly_upvot?FacultyData.weekly_upvot:[],
          btech_cse: FacultyData?.btech_cse?FacultyData.btech_cse:[],
         btech_cse_totalupv: FacultyData?.btech_cse_totalupv?FacultyData.btech_cse_totalupv:"",
         totalUpvote: FacultyData?.totalUpvote? FacultyData.totalUpvote:""
        }
        Dispatch(ChangeleaderBoard(lpaylod))
        Dispatch(ChangeUserData(payload))
      }
    }
      // console.log(FacultyData[0]?.email)
   },[user, isLoading, isError, isFetching])
    
   useEffect(()=>{
   
 if(curractive['isLoggedIn']) {
    setislogin(true)
 }
 else setislogin(false)
   },[curractive['isLoggedIn']])
  
      const fields = [
        { name: 'Dashboard',  value: dashboard,  set: setdashboard },
        { name: 'Connections', value: connections, set: setconnections },
        { name: 'Announcements', value: announcements, set: setannouncements },
        { name: 'Portfolio', value: portfolio, set: setportfolio },
        { name: 'Chat',       value: chat,       set: setchat },
        { name: 'Setting',    value: setting,    set: setsetting },
      ];
      
      useEffect(()=>{
        setheading(curractive['isActive']);
        },[curractive])
        useEffect(()=>{
          setSheading(curractive['SettingisActive']);
        },[curractive])
        // console.log(curractive['isActive'])
    //  {fields.map(({name,value,set})=>{
    //   if(name === curractive['isActive']) set(true);
    //   else set(false);
    //  })}


  return (
    <div className="overflow-x-hidden min-h-screen">
    {!islogin?(
    <>
    <Header/>
    <div className='pt-18'>
    <Outlet/>
    </div>
    </>
    ) :(curractive['isActive'] === 'Setting'?(
      <>
      <Settings/>
      <Settingsheader title={Sheading}/>
      </>
    ) : (
    <>
    <Dashboard/>
    <DashboardHeader title={heading}/>
    </>
  ))}
 </div>
 )
}

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}