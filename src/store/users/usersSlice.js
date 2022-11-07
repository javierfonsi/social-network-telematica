import { createSlice } from '@reduxjs/toolkit'
import { getUsers } from './thunk'

const initialState = {
  users : [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.users = payload.data.allUser
      //console.log(payload)
    },
    [getUsers.rejected]: (state, { payload }) => {
    },

  }
})

// Action creators are generated for each case reducer function
//export const {} = usersSlice.actions

export default usersSlice.reducer