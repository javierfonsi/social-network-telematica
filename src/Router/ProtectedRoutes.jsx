import { Navigate, Outlet } from "react-router-dom";
import {useSelector} from 'react-redux';
 
export const ProtectedRoutes = () => {
    let { userToken } = useSelector((state)=>state.auth)
    if(userToken){
        return <Outlet/>
    } else{
        return <Navigate to='/'/>
    }
}