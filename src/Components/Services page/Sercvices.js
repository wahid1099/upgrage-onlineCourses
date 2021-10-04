import React from 'react';
import UseServices from '../../hooks/UseServices';
import {Card, Col, Row} from "react-bootstrap";
import Courses from "../Home/Courses";
const Sercvices = () => {
    const [services,setService]=UseServices();
    return (
        <div className="Services">
            <h1>Our Courses</h1>
            <div className="coursses container">
                <Row xs={1} md={4} className="g-4">
                    {
                        services.map(course=><Courses
                            course={course}></Courses>

                        )}
                </Row>
            </div>


        </div>
    );
};

export default Sercvices;