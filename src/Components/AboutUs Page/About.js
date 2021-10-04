import React from 'react';
import Aboutbanner from '../../images/robo-wunderkind-hLvQ4-QEBAE-unsplash.jpg';
const About = () => {
    return (
        <div className="container mt-5">
            <h1>What is ‘Upskill Library’?</h1>
            <p>
                Upskill is a peer to peer skill sharing platform. It enables individuals and organizations to share skills and exchange technical knowledge to bridge the skills gap in Bangladesh

                Upskill Library is a one stop platform which will give you access to 34+ live video sessions which can boost and empower your career development. Unlike other learning platforms, Upskill users only pay once to get access to 140+ hours of learning videos.</p>
               <img src={Aboutbanner} alt="Banner img" className="w-75"/>
         <h2 className="mt-5"> Who will be the users?</h2>


            <p>Students and young professionals- both can benefit from using Upskill Library.</p>
            <h2 className="mt-5">Who are the trainers?</h2>
            <p>Sessions are delivered by trained, well experienced and certified instructors in their domain. All our instructors have years of work experience offering practical lessons which users can apply in their job.</p>
        </div>
    );
};

export default About;