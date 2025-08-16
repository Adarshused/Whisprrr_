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
  //  console.log(faculties)

   const Dispatch=useDispatch();
   useEffect(()=>{

          if(isError) {
         console.log("ERROR while getting user")
         Dispatch(ChangeLogIn(false));
         setislogin(false)
        }
       if(isLoading) {
        <HashLoader color={"#5235E8"} loading={true} size={150}
        aria-label="Loading Spinner"
        data-testid="loader" />
       }
      //  queryClient.removeQueries(['currentUser']);
       Dispatch(ChangeLogIn(true))
      //  console.log(user)
         
       const  UserData = user?.data?.user
      //  console.log("USER_DATA :", FacultyData)
                      /*  GetAllFaculties */
       
      //   const Facultydata = faculties?.data['leaderBoard'][0]
      //  console.log(Facultydata)
       if(UserData){
        
        const leaderboard = faculties?.data?.leaderBoard ?? [];
        const lpaylod = [];

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
  } else if (counts24 && typeof counts24 === 'object') {
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

          // console.log(FacultyData[0])
        
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
        // console.log()
        console.log("WE ARE HERE  :",lpaylod)
        Dispatch(ChangeleaderBoard(lpaylod))
        Dispatch(ChangeUserData(payload))
        // console.log(curractive['FacultyData'].img)
        // console.log(curractive[ 'FacultyData'])
      }
      // console.log(FacultyData[0]?.email)
   },[user, isLoading, isError, isFetching])
    
   useEffect(()=>{
   
 if(curractive['isLoggedIn']) {
  console.log(curractive['isLoggedIn'])
    setislogin(true)
 }
 else setislogin(false)
   },[curractive['isLoggedIn']])
  //  console.log(islogin)
      // const uservalue={
        
      //   'name':'Adarsh Mishra',
      //   'Title':'Mr',
      //   'img':"",
      //   'upvote':'2100',
      //   'twentyFour_hour':'20000,20100,20150,20140,20200,20200,2050,20230,20230,20231,20232,20232,20310,20311,20290,20283,20312,20400,20450,21000,21010,21100,21150,20800',
      //   'prevD_up':'800',
      //   'prevPD_up':'200',
      //   'max_title':'Master',
      //   'max upvote':'2180',
      //   'about':"As Dean of Academics at IKG PTU, I am dedicated to fostering a culture of curiosity, celebrating your achievements, and equipping every graduate to make a meaningful impact in our ever-evolving world.",
      //   'address':'Chennai,Tamil Nadu',
      //   'experience':'15 years',
      //   'upv_twlmonths':[[0, 150,   50, 65,200,  300],[600, 400, 434,543,  800,  500],[700, 1000, 656,789, 900,  1200],[1100, 600,867,1289,  1400, 1000],[1300, 800,1245,1540,  1600, 1500],[1700, 900,1203,2010,  1800, 1400],[2000,999,1240, 1200, 2100, 1600],[1900,2100,2210, 2300, 1700, 2500],[2200, 1540,1780,1300, 2400, 2000],[1800, 2100,1789,1650, 1900, 2300],[2000, 2230,2130,1500, 2500, 1700],[2300,1999,2200, 1900, 2400, 2500]],
      //   'weekly_upvot':[800,567,145,1234,899],
      //   'btech_cse':[1200,230,158,410],
      //   'btech_cse_totalupv':1998,
         
      // }

          
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