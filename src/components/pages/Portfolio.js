import React from "react";
import '../../styles/Portfolio.css';
import AdoptDS from '../../images/adoption-app.png';
import Wallot from '../../images/wallot.png';


function About() {
    return (
        <div className="row mx-auto">
            <div className="p-2 col-12 col-lg-6">
                <div className="card text-center">
                    <div className="card-header">
                        Adopt Don't Shop
                    </div>
                    <div className="card-body p-1">
                        <img className='p-1 image-sizing' src={AdoptDS} alt="Pet Adoption Assistant Homepage Image" />
                        <a href="https://analisegiobbi3.github.io/adopt_dont_shop/" class="btn btn-primary button-sizing" target="_blank" rel="noreferrer noopener">Deployed Application</a>
                        <a href="https://github.com/analisegiobbi3/adopt_dont_shop" class="btn btn-primary button-sizing" target="_blank" rel="noreferrer noopener">Github Repository</a>
                    </div>
                    <div class="card-footer text-body-secondary">An application to help prospective pet owners research and find animals to adopt.</div>
                </div>
            </div>
            <div className="p-2 col-12 col-lg-6">
                <div className="card text-center">
                    <div className="card-header">
                        WalLot
                    </div>
                    <div className="card-body p-1">
                        <img className='p-1 image-sizing' src={Wallot} alt="Financial Planner Homepage Image" />
                        <a href="https://wallot.herokuapp.com/" class="btn btn-primary button-sizing" target="_blank" rel="noreferrer noopener">Deployed Application</a>
                        <a href="https://github.com/samiyazaki/WalLot" class="btn btn-primary button-sizing" target="_blank" rel="noreferrer noopener">Github Repository</a>
                    </div>
                    <div class="card-footer text-body-secondary">A simple financial planner, that can be used to help fulfill individual goals.</div>
                </div>
            </div>
        </div>
    )
};

export default About;