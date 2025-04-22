import React, {useState} from "react";
import "./Contact.css"

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleChange(e) {
        const {id, value} = e.target;
        setFormData(prevData => 
        (
            {
                ...prevData,
                [id]:value
            }
        )
        )
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted", formData)

        setFormData({
            name: "",
            email: "",
            message: ""
        });
    }


    return(
        <div className="contact section-p ">
            <div className="title text-center">
                <h1 className="text text-brown fw-7">Contact me</h1>
            </div>
            <div className="input-section flex ">
                <form className="input-group flex" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        id="name"
                        value={formData.name} 
                        className="input"
                        placeholder="Name"
                        onChange={handleChange}
                    />

                    <input 
                        type="email" 
                        id="email"
                        value={formData.email} 
                        className="input"
                        placeholder="E-mail"
                        onChange={handleChange}
                    />

                    <textarea 
                        className="input" 
                        id="message"
                        value={formData.message}
                        placeholder="Send me a message"
                        onChange={handleChange} >
                    </textarea>

                </form>
                <button type="submit" className="submit-btn bg-brown">
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Contact