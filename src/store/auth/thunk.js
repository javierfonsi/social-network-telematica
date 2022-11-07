import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

  export const userLogin = createAsyncThunk(
    'user/login',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        // configure header's Content-Type as JSON
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        const { data } = await axios.post(
            "https://socialnetwork-telematica.herokuapp.com/api/v1/users/login",
        //  "https://restaurant-jrfl.herokuapp.com/api/v1/adminuser/login",
          { email, password },
          config
        )
        // store user's token in local storage
        localStorage.setItem('userToken', data.data.token)
        localStorage.setItem('userData', JSON.stringify(data.data.userData))
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

  export const createUser = createAsyncThunk(
    'new/user',
    async (argument, { rejectWithValue }) => {
      try {
        // configure header's Content-Type as JSON
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        const { data } = await axios.post(
            //"https://localhost:4000/.com/api/v1/users",
            "https://socialnetwork-telematica.herokuapp.com/api/v1/users/",
          argument,
          config
        )
        // store user's token in local storage
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