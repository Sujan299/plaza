import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Services from "./Services";
import "../styles/Services.scss";
import Pizza from '../assets/pizza.png';
import Momo from '../assets/momo.jpg';
import Biryani from '../assets/biryani.jpg';
function Home() {
    return (
        <div className="home">
            <div className="home1">
                <Carousel
                    showStatus={false}
                    showIndicators={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={2000}
                    showArrows={false}
                    showThumbs={false}
                >
                    <div>
                        <img src={Pizza} alt="" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={Momo} alt="" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={Biryani} alt="" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
            <div className="home2" id="services">
                <Services />
            </div>
        </div>
    );
}
export default Home;
