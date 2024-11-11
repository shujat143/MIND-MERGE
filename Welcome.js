import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Welcome.css';

const Welcome = () => {
  return (
    <section className="welcome-section" id="home">
      <Carousel>
      <Carousel.Item>
          <img className="d-block w-100" src={require('./third.png')} alt="Third slide" />
          <Carousel.Caption>
          <h3>Welcome to Mind Merge Soft Tech</h3>
          <p>Your trusted partner in software solutions</p>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={require('./first.png')} alt="First slide" />
          <Carousel.Caption>
          <h3>Dedicated Team</h3>
          <p>Our team is here to ensure your success</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={require('./second.png')} alt="Second slide" />
          <Carousel.Caption>
            <h3>Innovative Solutions</h3>
            <p>Delivering cutting-edge technology tailored to your needs</p>
          </Carousel.Caption>
        </Carousel.Item>

        

        <Carousel.Item>
          <img className="d-block w-100" src={require('./fourth.png')} alt="Fourth slide" />
          <Carousel.Caption>
            <h3>Let’s Build the Future Together</h3>
            <p>Empowering businesses with innovative software solutions</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Welcome;
