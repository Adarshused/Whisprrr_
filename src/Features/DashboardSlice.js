import { createSlice } from "@reduxjs/toolkit";

const initialState={
    CurrActive:{"isActive":"Dashboard","SettingisActive":"Profile"}
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
        }
    }
})

export const {ChangeStatus,ChangeSettingStatus}=DashboardSlice.actions

export default DashboardSlice.reducer