import React from "react";
import Homecomponent from "./routes/Home/homecomponent";
import Navigation from "./routes/Navigation/navigation";
import {Route , Routes } from "react-router-dom";

const Shop = () => {
  return (
    <h2>I am a shop section</h2>
  )
}

const App = () => {
  return (
    <Routes>
    <Route path ="/" element={<Navigation/>}>
    <Route index element={<Homecomponent/>} />
    <Route path="/shop" element={<Shop/>}/>
    </Route>
    </Routes>
  )
}
export default App;
