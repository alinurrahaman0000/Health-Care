import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../Home/saider/slider-1.png';
import img2 from '../Home/saider/slider-2.png';
import img3 from '../Home/saider/slider-3.png'
import Services from '../services/Services';


import './Home.css'
import Wellcome from './Wellcome/Wellcome';

const Home = () => {
    
    return (
        < div>
         <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="texts">Dr. Farhana Rahman</h3>
      <p className="text">MBBS, DCH, FCPS (Paediatrics), Child Specialist, Paediatrics, Central Hospital Limited</p>
      <h4 className="text">Bd Doctor’s list is a doctor’s directory website that helps you with accessing the best doctors in your area. We have the best list highly professional doctors who are not only experienced but also very dedicated with their work.</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="texts">Abida Sultana</h3>
      <p className="text">MBBS, FCPS, MS, Gynaecology & Obstetrics
        cat-iconMirpur Industrial Plot # 4-5, Section-07, Mirpur-11, Dhaka-121</p>
        <h4 className="text">
        Outreach dental missions. Wisdom teeth removal is free for ages 15-25. Outreach Dental Missions free dental days, coming up in California. Experienced team. Brands: Decades of experience, low cost, wisdom tooth removal.
        </h4 >
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="texts">Specialist Doctor</h3>
      <p className="text">information of a doctor just to book an appointment with them. Well, not anymore as our team has come up with this website which contains all the valid information that one would need to find a doctor. Now booking an appointment with Dhaka’s best doctors are just a phone call away</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<Wellcome></Wellcome>
<Services></Services>
        </div>

        
    );
};


export default Home;