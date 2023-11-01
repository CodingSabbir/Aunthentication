import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Components/Home/Home"
import NotMatch from "./Components/NotMatch/NotMatch"
import About from "./Components/About/About"
import Service from "./Components/Service/Service"
import Regestion from "./Components/Register/Regestion"


function App() {


  return (
    <>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/regester" element={<Regestion/>}/>
          <Route path="*" element={<NotMatch/>}/>
        </Routes>
    </>
  )
}

export default App
