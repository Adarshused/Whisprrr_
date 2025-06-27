import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import DashboardHeader from './Components/Dashboard/DashboardHeader.jsx';
import {useDispatch,useSelector} from 'react-redux';
import Settings from './Components/Settings/Settings.jsx'
import Settingsheader from './Components/Settings/Settingsheader.jsx';
import { ChangeLogIn, Update_user } from './Features/DashboardSlice.js';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { useCurrentUser } from './utils/useCurrentUser.js';
import { HashLoader} from 'react-spinners'
import { fetchCurrentUser } from './utils/Getme.js';
 
const queryClient  = new QueryClient()

function App(props) {
  // const Dispatch=useDispatch();
  
  // console.log("Reached")
  const [islogin,setislogin] = useState(false)
  const [dashboard,setdashboard] = useState(false);
  const [connections,setconnections]=useState(false);
  const [announcements,setannouncements]=useState(false);
  const [portfolio,setportfolio]=useState(false);
  const [chat,setchat]=useState(false);
  const [setting,setsetting]=useState(false);
   const [heading,setheading]=useState("Dashboard");
   const [Sheading,setSheading] = useState("Profile")
   const [uservalue, setuservalue] = useState({
        name: "",
        Title: "",
        img: "",
        upvote: "",
        about: "",
        twentyFour_hour: "",
        prevD_up: "",
        prevPD_up: "",
        max_title: "",
        max_upvote: "",
        address: "",
        experience: "",
        upv_twlmonths: "",
        weekly_upvot: "",
        btech_cse: "",
        btech_cse_totalupv: ""
   })
   const curractive= useSelector((state)=>state.CurrActive)
  
   const {data: user, isLoading, isFetching, isError} =  useCurrentUser();
  //  console.log(user)
   const Dispatch=useDispatch();
   useEffect(()=>{
         
          if(isError) {
         console.log("ERROR while getting user")
         Dispatch(ChangeLogIn(false));
        }
       if(isLoading) {
        <HashLoader color={"#5235E8"} loading={true} size={150}
        aria-label="Loading Spinner"
        data-testid="loader" />
       }
      //  queryClient.removeQueries(['currentUser']);
       Dispatch(ChangeLogIn(true))
      //  console.log(user)
         
       const  userData = user?.data?.user
       console.log(userData)
       if(userData){
        setuservalue({
          name:userData[0]?.displayname?userData[0].displayname:"",
          Title: userData[0]?.title?userData[0].title:"",
          img: userData[0]?.avatar?userData[0].avatar:"",
          upvote: userData[0]?.upvote?userData[0].upvote:"",
          about: userData[0]?.about?userData[0].about:"",
          twentyFour_hour: userData[0]?.twentyFour_hour?userData[0].twentyFour_hour:"",
          prevD_up: userData[0]?.prevD_up?userData[0].prevD_up:"",
          max_title: userData[0]?.max_title?userData[0].max_title:"",
          max_upvote: userData[0]?.max_upvote?userData[0].max_upvote:"",
          address: userData[0]?.address?userData[0].address:"",
          experience: userData[0]?.experience?userData[0].experience:"",
          upv_twlmonths: userData[0]?.upv_twlmonths?userData[0].upv_twlmonths:"",
          weekly_upvot: userData[0]?.weekly_upvot?userData[0].weekly_upvot:"",
          btech_cse: userData[0]?.btech_cse?userData[0].btech_cse:"",
         btech_cse_totalupv: userData[0]?.btech_cse_totalupv?userData[0].btech_cse_totalupv:"",
        })
      }
   },[user, isLoading, isError, isFetching])
    
   useEffect(()=>{
   
 if(curractive['isLoggedIn']) {
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
    <>
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
 </>
 )
}

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}