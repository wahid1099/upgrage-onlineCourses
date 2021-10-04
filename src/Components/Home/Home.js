import React from 'react';
import Banner from "../Banner/Banner";
import Review from "../Review/Review";
import ServicesComponent from "./ServicesComponent";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServicesComponent></ServicesComponent>
            <Review></Review>

        </div>
    );
};

export default Home;