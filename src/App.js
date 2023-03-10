import React, { useState} from "react";
import "./Styles/Styles.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Search } from "./components/Search/Search";
import { Footer } from "./components/Footer/Footer";
import { CardData } from "./components/Cards/CardData";



const App = () => {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Search />
  
        {/* <ClickableCard/> */}
        {/* <DataGrid/> */}
        <CardData/>
        {/* <Click/> */}
        
        {/* <Exams /> */}
        <Footer/>
      </div>
    </>
  );
}

export default App;