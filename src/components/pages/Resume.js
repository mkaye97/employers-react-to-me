import React from "react";
import '../../styles/Resume.css';

function Resume() {
    return (
        <div>
            <div className="form-container">
                <div className="contact-background">
                    <h2 className="contact-title">Please Contact Me!</h2>
                    <label for="exampleFormControlInput1" type="text" className="form-label">Name</label>
                    <br />
                    <input></input>
                </div>
                <div className="contact-background">
                    <label for="exampleFormControlTextarea1" type="email" className="form-label">Email Address</label>
                    <br />
                    <input></input>
                </div>
                <div className="contact-background">
                    <label for="exampleFormControlTextarea1" type="text" className="form-label">Message</label>
                    <br />
                    <textarea className="form-field"></textarea>
                </div>
            </div>
        </div>
    )
};

export default Resume;