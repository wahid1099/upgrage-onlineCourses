import React from 'react';
import {Link} from "react-router-dom";
import { FaMobileAlt ,FaMailBulk,FaFacebookSquare,FaGithub,FaInstagramSquare,FaTwitterSquare,FaYoutube} from "react-icons/fa";
import {Form,Button} from "react-bootstrap";
import './footer.css';
const Footer = () => {
    return (
        <div className="footer-container">
          <div className="container">
              <div className="row">
                  <div className="col-md-4">
                      <h3>HELPFUL LINKS
                      </h3>
                      <Link to='/faq' className="item">
                          <h5>FAQ</h5>
                      </Link>
                      <Link to='/terms' className="item" >
                          <h5>Terms and Conditions</h5>
                      </Link>
                      <Link to='/privacy' className="item">
                          <h5>Privacy Statement</h5>
                      </Link>
                      <Link to='/Polcies' className="item">
                          <h5>Polcies</h5>
                      </Link>
                  </div>
                  <div className="col-md-4">
                      <h3>CONTACT</h3>
                          <p>Upskill, Level 3, House 9
                              Lane - 17/E, Dhaka 1213</p>
                      <p><FaMobileAlt/> 01879439753</p>
                      <p><FaMailBulk/> tasfia.upskill@gmail.com</p>
                      <div className="socail-icons">
                          <FaFacebookSquare/>  <FaGithub/> <FaInstagramSquare/> <FaTwitterSquare/> <FaYoutube/></div>
                  </div>
                  <div className="col-md-4">
                      <h4>SUBSCRIBE TO OUR NEWSLETTER
                      </h4>
                      <Form>
                          <Form.Group className="mb-3" controlId="formBasicEmail">

                              <Form.Control type="email" placeholder="Enter You'r email" />
                              <Form.Text className="text-muted">
                                  We'll never share your email with anyone else.
                              </Form.Text>

                          </Form.Group>
                          <Button variant="outline-success" className="pe-5 ps-5">Subscribe</Button>{' '}
                      </Form>
                  </div>

              </div>
          </div>
        </div>
    );
};

export default Footer;