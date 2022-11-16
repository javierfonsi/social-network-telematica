import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
import usersSlice from './users/usersSlice'
import adsSlice from './ads/adsSlide'

export const store = configureStore({
  reducer: {
    //menus: menusSlice,
    auth: authSlice,
    users: usersSlice,
    ads: adsSlice,
  },
})