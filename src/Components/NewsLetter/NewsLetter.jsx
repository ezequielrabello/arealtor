    import React, { useState } from "react";
    import "./NewsLetter.css"

    function NewsLetter() {
        const [formData, setFormData] = useState({
            name: "",
            email: ""      
        });

        function handleChange(e) {
        
            setFormData((preData) => ({
                ...preData,
                [e.target.id]: e.target.value
            }))
        }

        const handleSubmit = async(e) => {

            e.preventDefault();     
            console.log(formData)
        }


        return(
            <div className="newsLetter section-p">
                <div className="container">
                    <div className="newsletter-content">
                        <p className="text text-white fs-20 text-center">Would you like to be updated about what is available in your area?</p>
                        <div className="section-title">
                            <h3 className="text-brown">
                                Subscribe
                                <span className="text-white"> to newsLetter</span>
                            </h3>
                        </div>

                        <form className="newsletter-form mx-auto" onSubmit={handleSubmit}>
                            <div className="form-elem">
                                <input 
                                    type="text" 
                                    value={formData.name} 
                                    className="form-control"
                                    placeholder="Name"     
                                    onChange={handleChange}
                                    id="name"       
                                />
                            </div>
                            <div className="form-elem">
                                <input 
                                    type="text" 
                                    value={formData.email} 
                                    className="form-control"
                                    placeholder="Email"     
                                    onChange={handleChange}   
                                    id="email"
                                />
                            </div>
                            <button type="submit" className="bg-brown text-white submit-btn">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    export default NewsLetter