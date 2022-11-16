import { createSlice } from '@reduxjs/toolkit'
import { getAds } from './thunk'

const initialState = {
  ads : [],
  isLoading: false
}

export const adsSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getAds.pending]: (state) => {
      state.isLoading = true
    },
    [getAds.fulfilled]: (state, { payload }) => {
      state.ads = payload.data.sales
      state.isLoading = false

      //console.log(payload)
    },
    [getAds.rejected]: (state, { payload }) => {
      state.isLoading = false

    },

  }
})

// Action creators are generated for each case reducer function
//export const {} = usersSlice.actions

export default adsSlice.reducer