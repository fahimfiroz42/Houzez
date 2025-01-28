import axios from "axios"

export const saveUser=async(user)=>{
    
    axios.post(`https://houzez-server.vercel.app/users/${user?.email}`,{name:user?.displayName,
        image:user?.photoURL,
        email:user?.email,
        role:'user'
    
    })
   
}