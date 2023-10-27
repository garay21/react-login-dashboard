import { json } from "react-router-dom";

export async function loginService ({userName, passWord }){
    
    try {   
        const res = await fetch('http://localhost:1995/userAuth',
            {
                method: 'post',
                body : JSON.stringify({userName,passWord})
            }
        )
        const data = await res.json()
        console.log('data : ',{userName,passWord})

        console.log(data);

        if(data.auth === 'success') return true
        else return false
        
    } catch (error) {
        return false
    }
}