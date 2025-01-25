
import { Navigate } from "react-router-dom"
import Loading from "../components/shared/Loading"
import useRole from "../hooks/useRole"


const AdminRoute = ({ children }) => {
   const [role,isLoading]=useRole()
  
  
    if (isLoading) return <Loading/>
    if (role==='admin') return children
    return <Navigate to='/dashboard'  />
  }
  

export default AdminRoute;