import React from 'react';
import '../App.css';
import Carousal from './Carousal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Food from './Food';

function Home() {
    return (
        <div>
                <Carousal />
                <Food />
        </div>
    )  
}

export default Home;