import React from 'react';
import {Row, Col, Card, Button} from "react-bootstrap";
import "./Course.css";
const Courses = (props) => {
    const{name,fee,img,description,category}=props.course;
    return (
        <div>
            <Col>
                <Card className="mb-5">
                    <Card.Img variant="top" src={img} className="mx-auto p-4 image" />
                    <Card.Body>
                        <Card.Title>Course name: {name}</Card.Title>
                        <Card.Text>
                            <p>{description.slice(0,150)}</p>
                            <h5>Course Fee: {fee}</h5>
                            <h6>Course type:{category}</h6>
                        </Card.Text>
                        <Button variant="outline-danger" className="mt-3 w-75">Enroll Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Courses;