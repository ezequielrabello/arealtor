import React, { useState } from "react";
import "./Work.css"
import {works} from "../../constants/data.jsx"
import {BsPlusLg} from "react-icons/bs"
import { ImCancelCircle } from "react-icons/im";

function Work() {

    const [imageModal, setImageModal] = useState(false)
    const [imageSource, setImageSource] = useState("")

    function setImageOnModal(src) {
        setImageModal(true)
        setImageSource(src)
    }


    return(
        <div className="work section-p bg-grey" id="work">
            <div className={imageModal ? "image-box show-image-box" : "image-box"}>
                <div className="image-box-content">
                    <img src={imageSource || null}  />
                    <span className="image-box-close-btn" onClick={() => setImageModal(false)}><ImCancelCircle size={30}/></span>
                </div>
            </div>
            <div className="container">
                <div className="work-content">
                    <div className="section-title">
                        <h3 className="text-brown">
                            latest <span className="text-dark">works</span>
                        </h3>
                        <p className="text">I offer the right solution for you digital business.</p>
                    </div>
                    <div className="work-list grid">
                        {
                            works.map((work, index) => {
                                return(
                                    <div className="work-item text-center" key={index} onClick={() => setImageOnModal(work.image)}>
                                        <img src={work.image} alt="" />
                                        <span className="work-item-icon">
                                            <BsPlusLg size={38} className="text-brown"/>
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work