import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//import axiosInstance from "../../axiosInstance";

  export const getAds = createAsyncThunk(
    'get/ads',
    async (argument, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem("userToken")}`
          },
        }

        // configure header's Content-Type as JSON
        const { data } = await axios.get(
            "https://socialnetwork-telematica.herokuapp.com/api/v1/sale", config
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