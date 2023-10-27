import { useContext } from "react";
import { LoginContext } from "../context/loginContext";

export function useLogin(){
    const {isAuth, setIsAuth} = useContext(LoginContext)

    return {isAuth,setIsAuth}
}