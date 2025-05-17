import { createSlice } from "@reduxjs/toolkit";

const initialState={
    CurrActive:{"isActive":"Dashboard","SettingisActive":"Profile","Name":"none","Title":"none"}
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
        }
    
    }
})

export const {ChangeStatus,ChangeSettingStatus,ChangeName,ChangeTitle}=DashboardSlice.actions

export default DashboardSlice.reducer