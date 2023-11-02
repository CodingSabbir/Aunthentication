import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Components/Home/Home"
import NotMatch from "./Components/NotMatch/NotMatch"
import About from "./Components/About/About"
import Service from "./Components/Service/Service"
import Regestion from "./Components/Register/Regestion"
import SignIn from "./Components/Signin/SignIn"
import RequireAuth from "./Components/RequireAuth/RequireAuth"


function App() {


  return (
    <>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<RequireAuth><Service/></RequireAuth>}/>
          <Route path="/regester" element={<Regestion/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="*" element={<NotMatch/>}/>
        </Routes>
    </>
  )
}

export default App
