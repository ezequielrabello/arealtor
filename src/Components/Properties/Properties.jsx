import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Properties.css"
import  {properties}  from "../../constants/data";

function Properties() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (

        <div className="slider-container">
            <Slider {...settings}>
                {
                    properties.map(
                        (property, index) => {
                            return (
                                <div className="property-item" key={index}>
                                    <div className="property-img">
                                        <img src={property.image} alt="House" />
                                    </div>
                                    <div className="about-property">
                                        <p className="text text-white fw-7 fs-14 address">{property.name}</p>
                                        <p className="text text-white fw-7 fs-14 city">{property.post}</p>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </Slider>
        </div>
    )
}

export default Properties