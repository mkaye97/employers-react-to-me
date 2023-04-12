import React from "react";
import '../../styles/Portfolio.css';
import AdoptDS from '../../utils/images/adoption-app.png';
import Wallot from '../../utils/images/wallot.png';
import Weather from '../../utils/images/weatherornot.png';
import Password from '../../utils/images/passwordgen.png';


function About() {
    return (
        <div className="row mx-auto">
            <div className="p-2 col-12 col-lg-6">
                <div className="card text-center">
                    <div className="card-header">
                        Adopt Don't Shop
                    </div>
                    <div className="card-body p-1">
                        <img className='p-1 image-sizing' src={AdoptDS} alt="Pet Adoption Assistant Homepage" />
                        <a href="https://analisegiobbi3.github.io/adopt_dont_shop/" className="btn btn-primary button-sizing" target="_blank" rel="noreferrer noopener">Deployed Application</a>
                        <a href="https://github.com/analisegiobbi3/adopt_dont_shop" className="btn btn-primary button-sizing" target="_blank" rel="noreferrer noopener">Github Repository</a>
                    </div>
                    <div className="card-footer text-body-secondary">An application to help prospective pet owners research and find animals to adopt.</div>
                </div>
            </div>
            <div className="p-2 col-12 col-lg-6">
                <div className="card text-center">
                    <div className="card-header">
                        WalLot
                    </div>
                    <div className="card-body p-1">
                        <img className='p-1 image-sizing' src={Wallot} alt="Financial Planner Homepage" />
                        <a href="https://wallot.herokuapp.com/" className="btn btn-primary button-sizing" target="_blank" rel="noreferrer noopener">Deployed Application</a>
                        <a href="https://github.com/samiyazaki/WalLot" className="btn btn-primary button-sizing" target="_blank" rel="noreferrer noopener">Github Repository</a>
                    </div>
                    <div className="card-footer text-body-secondary">A simple financial planner, that can be used to help fulfill individual goals.</div>
                </div>
            </div>
            <div className="p-2 col-12 col-lg-6">
                <div className="card text-center">
                    <div className="card-header">
                        Weather or Not!
                    </div>
                    <div className="card-body p-1">
                        <img className='p-1 image-sizing' src={Weather} alt="Weather Forecast Page" />
                        <a href="https://mkaye97.github.io/5-Day-Weather-Forecast/" className="btn btn-primary button-sizing" target="_blank" rel="noreferrer noopener">Deployed Application</a>
                        <a href="https://github.com/mkaye97/5-Day-Weather-Forecast" className="btn btn-primary button-sizing" target="_blank" rel="noreferrer noopener">Github Repository</a>
                    </div>
                    <div className="card-footer text-body-secondary">An easy to use, weather forecast page using the Open Weather Map API.</div>
                </div>
            </div>
            <div className="p-2 col-12 col-lg-6">
                <div className="card text-center">
                    <div className="card-header">
                        Password Generator
                    </div>
                    <div className="card-body p-1">
                        <img className='p-1 image-sizing' src={Password} alt="Password Generator Page" />
                        <a href="https://mkaye97.github.io/5-Day-Weather-Forecast/" className="btn btn-primary button-sizing" target="_blank" rel="noreferrer noopener">Deployed Application</a>
                        <a href="https://github.com/mkaye97/5-Day-Weather-Forecast" className="btn btn-primary button-sizing" target="_blank" rel="noreferrer noopener">Github Repository</a>
                    </div>
                    <div className="card-footer text-body-secondary">A pseudo-random password generator.</div>
                </div>
            </div>
            <div className="p-2 col-12 col-lg-6">
                <div className="card text-center">
                    <div className="card-header">
                        Password Generator
                    </div>
                    <div className="card-body p-1">
                        <img className='p-1 image-sizing' src={Password} alt="Password Generator Page" />
                        <a href="https://mkaye97.github.io/5-Day-Weather-Forecast/" className="btn btn-primary button-sizing" target="_blank" rel="noreferrer noopener">Deployed Application</a>
                        <a href="https://github.com/mkaye97/5-Day-Weather-Forecast" className="btn btn-primary button-sizing" target="_blank" rel="noreferrer noopener">Github Repository</a>
                    </div>
                    <div className="card-footer text-body-secondary">A pseudo-random password generator.</div>
                </div>
            </div>
            <div className="p-2 col-12 col-lg-6">
                <div className="card text-center">
                    <div className="card-header">
                        Password Generator
                    </div>
                    <div className="card-body p-1">
                        <img className='p-1 image-sizing' src={Password} alt="Password Generator Page" />
                        <a href="https://mkaye97.github.io/5-Day-Weather-Forecast/" className="btn btn-primary button-sizing" target="_blank" rel="noreferrer noopener">Deployed Application</a>
                        <a href="https://github.com/mkaye97/5-Day-Weather-Forecast" className="btn btn-primary button-sizing" target="_blank" rel="noreferrer noopener">Github Repository</a>
                    </div>
                    <div className="card-footer text-body-secondary">A pseudo-random password generator.</div>
                </div>
                <br />
                <br />
                <br />
            </div>
        </div>
        
    )
};

export default About;