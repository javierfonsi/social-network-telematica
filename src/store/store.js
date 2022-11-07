import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
//import menusSlice from './menus/menusSlice'

export const store = configureStore({
  reducer: {
    //menus: menusSlice,
    auth: authSlice
  },
})