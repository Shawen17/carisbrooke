import React from "react";
import Slide from "../components/Slide";
import UpperPage from "../components/UpperPage";
import image from '../img/bg-01.jpg';
import NavBar from '../components/NavBar';


const Home =()=>{

    return(
        <div style={{backgroundImage:`url(${image})`}}>
            <NavBar />
            <UpperPage />
            <Slide />
        </div>
    )
}

export default Home;

