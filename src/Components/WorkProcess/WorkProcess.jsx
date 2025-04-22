import React from "react";
import "./WorkProcess.css"
import {work_process} from "../../constants/data.jsx"
function WorkProcess() {
    return(
        <div className="workprocess section-p bg-white" id="workprocess">
            <div className="container">
                <div className="workprocess-content">
                    <div className="section-title">
                        <h3 className="text-brown">
                            working <span className="text-dark">Process</span>
                            <p className="text">I provide the assistance you need to find your dream home.</p>
                        </h3>
                    </div>
                    <div className="workprocess-list grid">
                        {
                            work_process.map((workprocess, index) => {
                                return(
                                    <div className="workprocess-item text-center" key={index}>
                                        <div className="workprocess-item-title flex">
                                            <span className="text-brown fw-7">
                                                0 {index+1}
                                            </span>
                                            <h3 className="text-dark fw-5">
                                                {workprocess.title}
                                            </h3>
                                        </div>    
                                        <p className="text">
                                            {workprocess.paragraph}
                                        </p>
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

export default WorkProcess