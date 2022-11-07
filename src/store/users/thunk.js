import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";

  export const getUsers = createAsyncThunk(
    'get/user',
    async (argument, { rejectWithValue }) => {
      try {
        // configure header's Content-Type as JSON
        const { data } = await axiosInstance.get(
            "/users"
        )
        //console.log(data)
        return data
      } catch (error) {
        // return custom error message from API if any
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )
