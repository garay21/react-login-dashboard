import React, { useState }  from "react"
import './../../Css/login.css'
import { useLogin } from "../hooks/loginHook"
import { loginService } from "../../api/loginService";

const Login = ()=>{    
    const {setIsAuth} = useLogin()
    const [errorMsg, setErrorMsg] = useState('')

    const hangleSubmitForm = (event) =>{
        event.preventDefault();
        const target = event.target
        const inputs = target.getElementsByTagName('input')

        const values = { 
            userName : inputs[0].value,
            passWord : inputs[1].value
        }

        loginService(values).then(({auth, msg}) => {
            setIsAuth(auth)
            setErrorMsg(msg)            
        })   
    }

    const hangleClickNewUser = (event) =>{
        console.log('new user : ', event);
    }

    return (
        <main>
            <h1>Party Manager</h1>
            <form className="form-login" action="" onSubmit={hangleSubmitForm}>
                <div className="login-container">
                    <label htmlFor="user-login">Usuario</label>
                    <input type="text" name="" id="" placeholder="Ingrese Usuario" required/>
                    <label htmlFor="password-login">Contraseña</label>
                    <input type="password" name="" id="" placeholder="Ingrese Contraseña" required/>
                </div>
                <button type="submit">Entrar</button>        
                <button className="new-user" type="" onClick={hangleClickNewUser}>Crear Usuario</button>      
                {
                    errorMsg && (
                        <p>{errorMsg}</p>
                    )
                } 
            </form>            
        </main>
    )   
};

export default Login;



