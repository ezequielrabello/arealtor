import React from "react";
import "./Services.css"
import {services} from "../../constants/data.jsx"



function Services() {
    return(
        <div className="services section-p">
            <div className="container">
                <div className="services-content">
                    <div className="section-title">
                        <h3 className="text-brown">my <span className="text-dark">services</span></h3>
                        <p className="text">I provide the assistance you need to find your dream home.</p>
                    </div>
                    <div className="services-list grid">
                        {services.map((services, index) => {
                            return(
                                <div className="services-item text-center" key={index}>
                                    <div className="services-item-img">
                                        <img src={services.image} className="mx-auto" alt="" />
                                    </div>
                                    <div className="services-item-text">
                                        <h4 className="fs-22 fw-5 op-08">
                                            {services.title}
                                        </h4>
                                        <p className="text mx-auto">
                                            {services.paragraph}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services