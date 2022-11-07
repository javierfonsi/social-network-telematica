import axios from 'axios'

let config = { baseURL: "https://socialnetwork-telematica.herokuapp.com/api/v1/", headers: {"Content-Type": "application/json",
'Authorization' : `Bearer ${localStorage.getItem("userToken")}`}}

let axiosInstance = axios.create(config)

export default axiosInstance