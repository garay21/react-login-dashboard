import React  from "react"
import './../../Css/login.css'
import { useLogin } from "../hooks/loginHook"
import { loginService } from "../../api/loginService";

const Login = ()=>{    
    const {setIsAuth} = useLogin()

    const hangleSubmitForm = (event) =>{
        event.preventDefault();
        const target = event.target
        const inputs = target.getElementsByTagName('input')
        console.log(inputs);

        const values = { 
            userName : inputs[0].value,
            passWord : inputs[1].value
        }

        loginService(values).then(res => setIsAuth(res))          
        console.log(values);  
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
                    <input type="text" name="" id="" placeholder="Ingrese Usuario"/>
                    <label htmlFor="password-login">Contraseña</label>
                    <input type="password" name="" id="" placeholder="Ingrese Contraseña"/>
                </div>
                <button type="submit">Entrar</button>        
                <button className="new-user" type="" onClick={hangleClickNewUser}>Crear Usuario</button>       
            </form>            
        </main>
    )   
};

export default Login;



