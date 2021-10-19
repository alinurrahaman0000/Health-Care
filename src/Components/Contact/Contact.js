import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './Contact.css';
import map from './map.jpg'
const Contact = () => {
    return (
        <div className=" row">
      

          
           <h1>Get In Touch With Us</h1>
           <br /><br />
           <br /><br />
           <p className="contact-text">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p> 
           <br /><br />
           <br /><br />
                <div className="map">
                    
                
                        <div>
                        <h3>Leave us a Message</h3>
                    <p>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>            
                        <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button className="btn" type="submit">
    Submit
  </Button>
</Form>
                        </div>
                        
                        <div className="maps">
                        <h3>Visit our Office</h3>
                        <p>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                           <img src={map} alt="" /> 
                         </div>
                </div>


           <div className="phone">
                <div>
                    <h3>ADDERSS</h3>
                    <p>73 Canal Street,</p>
                    <p>   New York, NY</p>
                </div>
                <div>
                    <h3>OPENING HOURS</h3>
                    <p>Monday-Friday: 8:00 AM – 5:00 PM
                        Saturday: 9:00 AM – 4:00 PM
                        Sunday: Closed</p>
                </div>
                <div>
                    <h3>PHONE/FAX</h3>
                    <p>+1 123 456 789</p>
                       <p>+1 123 456 789</p>
                </div>
                <div> 
                    <h3>EMAIL
                     </h3>
                    <p>support@dentalcare.com
                      info@dentalcare.com</p>
                    
                </div>
                <br /><br />
           <br /><br />
           </div>
        </div>
    );
};

export default Contact;