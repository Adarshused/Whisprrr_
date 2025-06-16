import {configureStore} from '@reduxjs/toolkit'
import DashboardReducer from '../Features/DashboardSlice.js'

export const store=configureStore({
    reducer:DashboardReducer
})