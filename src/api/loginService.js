export async function loginService ({userName, passWord }){    
    try {   
        console.log({userName,passWord});
        const res = await fetch('http://localhost:1995/userAuth',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body : JSON.stringify({ userName,passWord})
            }
        )
        const data = await res.json()
        if(data.auth === 'success') return {auth : true, msg : 'usuario Correcto ¡¡'}
        else return {auth : false, msg : "usuario y contraseña incorrectas ¡¡"}       

    } catch (error) {
        return {auth : false, msg: 'Error de servidor ¡¡'}
    }
}