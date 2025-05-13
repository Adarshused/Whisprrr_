import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Dashboard from './Components/Dashboard/Dashboard';
import DashboardHeader from './Components/Dashboard/DashboardHeader';
import {useDispatch,useSelector} from 'react-redux';
import Settings from './Components/Settings/Settings.jsx'
import Settingsheader from './Components/Settings/Settingsheader.jsx';
 function App(props) {
  // const Dispatch=useDispatch();
  
  const[islogin,setislogin]=useState(false); 

  // console.log("Reached")
  
  const [dashboard,setdashboard] = useState(false);
  const [connections,setconnections]=useState(false);
  const [announcements,setannouncements]=useState(false);
  const [portfolio,setportfolio]=useState(false);
  const [chat,setchat]=useState(false);
  const [setting,setsetting]=useState(false);
   const [heading,setheading]=useState("Dashboard");
   const [Sheading,setSheading] = useState("Profile")
   const curractive= useSelector((state)=>state.CurrActive)
   

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
    {islogin?(
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

export default App
