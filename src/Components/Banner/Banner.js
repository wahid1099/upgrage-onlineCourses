import React from 'react';
import './banner.css';
import {Button} from "react-bootstrap";
import bannerimg from '../../images/bannerimg.png';
const Banner = () => {
    return (
        <div className="banner-content container">
            <div className="row mt-5">
            <div className="col-md-6 mb-3">
        <h1 className="heading "> Enhance your skill  with Upskill</h1>
                <h5>Upskill is a skill-sharing platform, which bridges the skills gap with online live workshops, video lessons                  and Income Sharing Agreements (ISA).</h5>
                <div className="button">
                    <Button variant="primary" size="lg" className="me-5">LEARNERS</Button>
                    <Button variant="primary" size="lg" className="ms-5">TRAINER</Button>

                </div>
            </div>
                <div className="col-md-6">
 <img src={bannerimg} alt="banner" className="img-fluid w-100" />
                </div>
            </div>

        </div>
    );
};

export default Banner;