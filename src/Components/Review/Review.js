import React from 'react';
import './reviews.css';
import {Card,Button} from "react-bootstrap";
import fistimg from '../../images/img-1.jpg';
import secod from '../../images/img-2.6685949b.jpg';
import third from '../../images/img-3.jpg';

const Review = () => {
    return (
        <div className="reviews container mb-5">
            <h2 className="mb-5">What Our Learners Are Saying
            </h2>
            <div className="row" >
                <div className="col-md-4">
                    <Card >
                        <Card.Img variant="top" src={fistimg} className="w-25 mx-auto d-block" />
                        <Card.Body>
                            <Card.Title>
                                <h3 className="text-black">Dr. Ismail Sayeed
                                </h3>
                                <h5>Physician Entrepreneur & Amazon Author
                                </h5>
                            </Card.Title>
                            <Card.Text>
                                <p><small>
                                    Through immersive interaction with Upskill courses and exclusive masterclasses, I learned many valuable concepts such as MVP, growth hacking, pitching to investors and most importantly how to be connected with a network of dedicated industry experts. I highly recommend aspiring entrepreneurs, consultants and growth mindset professionals to attend their courses. Thank you Upskill for upskilling my entrepreneur skills!
                                </small></p>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card  >
                        <Card.Img variant="top" src={secod} className="w-25 mx-auto d-block" />
                        <Card.Body>
                            <Card.Title>
                                <h3 className="text-black">Omar Farhan Khan
                                </h3>
                                <h5>Business Consultant, LightCastle Partners

                                </h5>
                            </Card.Title>
                            <Card.Text>
                                <p><small>
                                    My learning experience with Upskill has been a delight since day one. The highly experienced mentors and unwavering cooperation from Upskill team has made the learning a breeze for me. Mentoring and guidance from industry veterans and interacting with them even post sessions is a privilege you cannot afford to miss.
                                </small></p>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style={{ width: '28rem' }} >
                        <Card.Img variant="top" src={third} className="w-25 mx-auto d-block" />
                        <Card.Body>
                            <Card.Title>
                                <h3 className="text-black">Nazmul Haque

                                </h3>
                                <h5>AGM Quality, Sharmin Group

                                </h5>
                            </Card.Title>
                            <Card.Text>
                                <p><small>
                                    I had a wonderful experience attending a session with Upskill. It has given me a great scope for improving my thought process about my social life which will enrich my communication with my family, and in my professional life.
                                </small></p>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>


            </div>

        </div>
    );
};

export default Review;