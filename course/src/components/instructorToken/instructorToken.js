import { Navigate, Outlet } from 'react-router-dom'
const tokenObject = {
    token: false,
  };
  
  export function setInstructorToken(value) {
    tokenObject.token = value;
  }
  
  export function getInstructorToken() {
    return tokenObject.token;
  }

export default function InstructorToken(){
    

    return(
       
        tokenObject.token ? <Outlet/> : <Navigate to = '/'/>
    )
}