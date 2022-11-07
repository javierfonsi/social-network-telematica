import { createSlice } from '@reduxjs/toolkit'
import {  userLogin, createUser } from './thunk'

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

  const userInfo = localStorage.getItem('userData')
  ? JSON.parse(localStorage.getItem('userData'))
  : null

const initialState = {
  isAutenticated : false,
  loading: false,
  userInfo,
  userToken,
  error: null,
  success: false,
  isUserCreate: false,
  
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken') // deletes token from storage
      localStorage.removeItem('userData') // deletes token from storage
      state.loading = false
      state.userInfo = null
      state.userToken = null
      state.error = null
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload.data.userData
      state.userToken = payload.data.token
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    [createUser.pending]: (state) => {

    },
    [createUser.fulfilled]: (state, { payload }) => {
      state.isUserCreate = true

    },
    [createUser.rejected]: (state, { payload }) => {


    },

  }
})

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions

export default authSlice.reducer