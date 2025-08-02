import { createSlice } from "@reduxjs/toolkit";

const initialState={
    CurrActive:{"isActive":"Dashboard","SettingisActive":"Profile","Name":"none","Title":"none","value":{},"USerValue":{},"isLoggedIn":false,'userData':{
        'name':'',
        'email':'',
        'Title':'',
        'img':"",
        'upvote':'',
        'twentyFour_hour':'',
         'prevD_up':'',
        'prevPD_up':'',
        'max_title':'',
        'max upvote':'',
        'about':"",
        'address':'',
        'experience':'',
        'upv_twlmonths':[[]],
        'weekly_upvot':[],
        'btech_cse':[],
        'btech_cse_totalupv':'',
         
    },
    "org":[]}
}

export const DashboardSlice=createSlice({
    name:"dashboard",
    initialState,
    reducers:{
        ChangeStatus:(state,action)=>{
            state.CurrActive['isActive']=action.payload;
        },
        ChangeSettingStatus:(state,action)=>{
            state.CurrActive['SettingisActive']=action.payload;
        },
        ChangeName:(state,action)=>{
            state.CurrActive['Name']=action.payload;
            
        },
        ChangeTitle:(state,action)=>{
            state.CurrActive['Title']=action.payload;
        },
        ChangeVal:(state,action)=>{
            state.CurrActive['value']=action.payload;
        },
        Update_user:(state,action)=>{
            state.CurrActive['USerValue']=action.payload;
        },
        ChangeLogIn: (state, action)=>{
            state.CurrActive['isLoggedIn']=action.payload
        },
        ChangeUserData: (state, action)=>{
            state.CurrActive['userData']=action.payload
        },
        Update_Org: (state, action) => {
            state.CurrActive['org'] = action.payload
        },
    
    }
})

export const {ChangeStatus,ChangeSettingStatus,ChangeName,ChangeTitle,ChangeVal,Update_user,ChangeLogIn,ChangeUserData,Update_Org}=DashboardSlice.actions

export default DashboardSlice.reducer