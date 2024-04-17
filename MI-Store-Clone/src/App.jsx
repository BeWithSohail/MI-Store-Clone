import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import PreNavbar from './Components/PreNavbar/PreNavbar';
import Navbar from "./Components/Navbar/Navbar";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {  BrowserRouter as Router,Route,Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Components/Slider/Slider';
import  data from "./data/data.json";
import Offer from './Components/Offers/Offer';
import Heading from "./Components/Heading/Heading";
import StarProducts from "./Components/StarProduct/StarProducts";
import HotaccesoriesMenu from "./Components/HotAccesories-Menu/HotaccesoriesMenu";
import HotAccesories from "./Components/HotAccesories/HotAccesories";

// const pannel = { dataon };

function App() {

  return (
    <>
      <Router> 
        <PreNavbar />
        <Navbar />
        <Slider start={data.banner.start} />
        <Offer offer={data.offer} />
        <Heading text="Star Products" />
        <StarProducts StarProducts={data.starProduct} />
        <Heading text="Hot Accesories" />
        <HotaccesoriesMenu />
        {/* <Routes>
          <Route path="/music" element={<MusicStore />} />
          <Route path="/smartDevice" element={<SmartDevices />} />
       </Routes> */}

        
        {/* <Routes>
          <Route path="/music" element={<MusicStore />} />
          <Route path="/smartDevice" element={<SmartDevices />} />
       </Routes> */}
            {/* <HotAccesories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
            <HotAccesories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} /> */}
        


      {/* <Routes>
          <Route path="/music" element={<HotAccessories type="music" />} />
          <Route path="/smartDevice" element={<HotAccessories type="smartDevice" />} />
    </Routes> */}

        
        
       
        
      </Router>
    </>
  )
}

export default App
