import React from 'react';
import UseServices from '../../hooks/UseServices';
import {Row,Col,Card} from "react-bootstrap";
import Courses from "./Courses";

const ServicesComponent = () => {
    const [services,setService]=UseServices();
   // console.log(services.slice(3))

    return (
        <div className="Services m-4">
            <h1>Our Courses</h1>
            <div className="coursses container ">
                <Row xs={1} md={4} className="g-4 mb-5">
                {
                    services.slice(0,4).map(course=><Courses
                    course={course}>

                    </Courses>)
                }
                </Row>
                    </div>


        </div>
    );
};

export default ServicesComponent;