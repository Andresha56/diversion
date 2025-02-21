import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { userAuth } from "../context/UserContext";

export default function Protected({ children }) {
    const nav = useNavigate()
    const [loading, setLoading] = useState(true)
    const {user,authStatus} = userAuth();
    useEffect(()=>{
        console.log(authStatus, user)
        if(authStatus==false)
            nav("/")
        setLoading(false)
    },[])
    return loading ? <h1>Loading...</h1> : <>{children}</>
}
