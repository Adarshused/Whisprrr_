import { createSlice } from "@reduxjs/toolkit";

const initialState={
    CurrActive:{"isActive":"Dashboard","SettingisActive":"Profile","Name":"none","Title":"none","value":{},"USerValue":{},"isLoggedIn":false}
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
        }
    
    }
})

export const {ChangeStatus,ChangeSettingStatus,ChangeName,ChangeTitle,ChangeVal,Update_user,ChangeLogIn}=DashboardSlice.actions

export default DashboardSlice.reducer