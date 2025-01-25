import { Navigate } from "react-router-dom"
import Loading from "../components/shared/Loading"
import useRole from "../hooks/useRole"

const AgentRoute = ({children}) => {
    const [role,isLoading]=useRole()
  
  
    if (isLoading) return <Loading/>
    if (role==='agent') return children
    return <Navigate to='/dashboard'/>
  }
  
;

export default AgentRoute;