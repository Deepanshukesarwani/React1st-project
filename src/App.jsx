import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
// import Navbar from "./components/Website/Navbar"
import Dialogbox from "./components/Dialogbox"
import Homepage from './components/Homepage'
import Headphone_section from './components/Headphone_section'

function App() {
  let name = "hello";
  return (
    <>
    
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/Dialogbox' element={<Dialogbox/>}/>
      <Route exact path='/Homepage' element={<Homepage/>}/>
      <Route exact path='/Headphone' element={<Headphone_section/>}/>
    </Routes>
    </>
  );
}

export default App;
