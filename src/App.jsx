import React, { useMemo } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import Login from "./Components/View/login"
import Home from "./Components/View/home"

import './Css/app.css'
import { useLogin } from "./Components/hooks/loginHook"
import Header from "./Components/header"

function App() {
  const {isAuth} = useLogin()
  console.log(isAuth);

  return (    
    <div className="app">  
      {isAuth && <Header/>}   
      <Routes>
        <Route path="/" element={isAuth ? <Home/> : <Login/>}></Route>
        <Route path="/Login" element={ isAuth ? <Navigate to="/Home"/> : <Login/>}></Route>
        <Route path="/Home" element={ isAuth ? <Home/> : <Navigate to="/Login"/>}></Route>
      </Routes>
    </div>
  )
}

export default App
