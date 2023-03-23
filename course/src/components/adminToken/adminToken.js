import { Navigate, Outlet } from 'react-router-dom'
const tokenObject = {
    token: false,
  };
  
  export function setAdminToken(value) {
    tokenObject.token = value;
  }
  
  export function getAdminToken() {
    return tokenObject.token;
  }

export default function AdminToken(){
    

    return(
       
        tokenObject.token ? <Outlet/> : <Navigate to = '/'/>
    )
}
