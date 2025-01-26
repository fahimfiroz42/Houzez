import { useContext } from "react";
import { AuthContext } from "../AuthPovider/AuthPovider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useRole = () => {
     
    const {user}=useContext(AuthContext)
    const {data:role,isLoading}=useQuery({
       queryKey:['role',user?.email],
       queryFn: async () => {
           const {data}=await axios.get(`https://houzez-server.vercel.app/user/role/${user?.email}`) 
           return data.role
       }

    })


    return [role,isLoading];
};

export default useRole;