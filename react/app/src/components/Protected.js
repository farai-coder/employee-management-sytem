import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/AuthContext"; 

export default function Protected({children}){
    const {user} = useContext(Context);
    console.log("hey")
    console.log("user", user)

    if(!user){
        return <Navigate to="/login" replace/>
    }else{
        return children;
    }
}