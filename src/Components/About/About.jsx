import React, {useRef, useState} from "react"
import "./About.css"
import aboutMeImg from "../../assets/images/EzequielRabello_637_lowres.jpg"
import video from "../../assets/videos/video.mp4.mp4"
import { FaPlay } from "react-icons/fa"
import { FaPause, FaBuilding, FaPhone } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6"


function About() {
    const vidRef = useRef(null)

    const [isPlaying, setIsPlaying] = useState(false)
    function handlePlayPause() {
        const video = vidRef.current


        if (isPlaying) {
            video.pause();
            setIsPlaying(false)
        } else {
            video.play();
            setIsPlaying(true)
        }
    }

    return(
        <div className="about section-p">
            <div className="container">
                <div className="about-content">
                    <div className="about-grid grid">
                        <img src={aboutMeImg} className="about-img" alt="Realtor image" />
                        <div className="section-title">
                            
                            <h3 className="text-brown">
                                I'm <span className="text-dark">Ezequiel</span>
                            </h3>
                            <p className="text mx-auto fw-4">
                                I am committed to providing a level of care and professionalism that puts clients’ needs first. Whether it’s navigating the negotiation process, managing the logistics of a transaction, or helping clients find their ideal home, Ezequiel applies the same disciplined, responsible approach that defined their previous careers. With a passion for helping others and a focus on delivering results, Ezequiel is dedicated to making every real estate experience as seamless and rewarding as possible.
                            </p>
                            <div className="contact">
                                <h4>Ezequiel Rabello</h4>
                                <p className="text fw-4 text-dark">Agent | License ID: RS123456</p>
                                <p className="text fw-4 text-dark"><FaPhone /> 123-456-0789</p>
                                <p className="text fw-4 text-dark"><MdEmail/> ezequiel@mail.com</p>
                                <p className="text fw-4 text-dark"><FaBuilding/> Realtor Company, LLC</p>
                                <p className="text fw-4 text-dark"><FaLocationDot/> 1234 Realtor company address PA 12345</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-grid grid">
                        <div className="section-title">
                            <h4 className="text text-dark fw-7 fs-24">Get to know your 
                                <span className="text text-brown fw-7 fs-24"> area of interest</span></h4>
                            <p className="text fs-20">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quasi animi id ut 
                                debitis earum porro distinctio ad sequi aperiam? Temporibus dolor quasi a suscipit sed labore quos porro officia.</p>
                        </div>
                        <div className="about-video">
                            <video ref={vidRef} muted loop autoPlay className="video">
                                <source src={video} type="video/mp4" />
                            </video>
                            <button type="button" className="playBtn" onClick={handlePlayPause}>
                                {isPlaying ? <FaPause/> : <FaPlay/> }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About