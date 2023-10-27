import React, { useMemo } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import Login from "./Components/View/login"
import Home from "./Components/View/home"
import Places from "./Components/View/places"
import Events from "./Components/View/events"
import About from "./Components/View/about"
import Config from "./Components/View/config"
import Profile from "./Components/View/profile"

import './Css/app.css'
import { useLogin } from "./Components/hooks/loginHook"
import Header from "./Components/header"

function App() {
  const {isAuth} = useLogin()

  return (    
    <div className="app">  
      {isAuth && <Header/>}   
      <Routes>
        <Route path="/" element={isAuth ? <Navigate to="/Home"/> : <Navigate to="/Login"/>}></Route>
        <Route path="/Login" element={ isAuth ? <Navigate to="/Home"/> : <Login/>}></Route>
        <Route path="/Home" element={ isAuth ? <Home/> : <Navigate to="/Login"/>}></Route>
        <Route path="/Places" element={ isAuth ? <Places/> : <Navigate to="/Login"/>}></Route>
        <Route path="/Events" element={ isAuth ? <Events/> : <Navigate to="/Login"/>}></Route>
        <Route path="/Profile" element={ isAuth ? <Profile/> : <Navigate to="/Login"/>}></Route>
        <Route path="/About" element={ isAuth ? <About/> : <Navigate to="/Login"/>}></Route>
        <Route path="/Config" element={ isAuth ? <Config/> : <Navigate to="/Login"/>}></Route>
      </Routes>
    </div>
  )
}

export default App
