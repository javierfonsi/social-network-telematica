import { createSlice } from '@reduxjs/toolkit'
import { getUsers } from './thunk'

const initialState = {
  users : [],
  isLoading: false
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isLoading = true
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.users = payload.data.allUser
      state.isLoading = false

      //console.log(payload)
    },
    [getUsers.rejected]: (state, { payload }) => {
      state.isLoading = false

    },

  }
})

// Action creators are generated for each case reducer function
//export const {} = usersSlice.actions

export default usersSlice.reducer