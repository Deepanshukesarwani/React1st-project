import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
// import Navbar from "./components/Website/Navbar"
import Dialogbox from "./components/Dialogbox"
import Homepage from './components/Homepage'
import Headphone_section from './components/Headphone_section'
import ClientPage from './components/Website/Client_page'
import Music_section from './components/Music_section'
import About_section from './components/About'
import Clothes_section from './components/Clothes'

function App() {
  return (
    <>
    
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/Dialogbox' element={<Dialogbox/>}/>
      <Route exact path='/Homepage' element={<Homepage/>}/>
      <Route exact path='/Headphone' element={<Headphone_section/>}/>
      <Route exact path="/Client_page" element={<ClientPage/>}/>
      <Route exact path="/Music_section" element={<Music_section/>}/>
      <Route exact path="/About_section" element={<About_section/>}/>
      <Route exact path="/Clothes_section" element={<Clothes_section/>}/>
      
    

      
    </Routes>
    </>
  );
}

export default App;
