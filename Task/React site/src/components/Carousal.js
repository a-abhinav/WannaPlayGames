import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sample from './assets/sample.jpg';
import '../App.css';

function Carousal() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 car-item"
                        src={sample}
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 car-item"
                        src={sample}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 car-item"
                        src={sample}
                        alt="Third slide"
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    )  
}

export default Carousal;