import React from 'react';
import './Testimonials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faUser } from '@fortawesome/free-solid-svg-icons';

const testimonialsData = [
  { name: 'Mrs. Singamsetty Deepika', title: 'Manager', icon: faUserTie, description: 'Deepika is the manager and founder of Mind Merge Soft Tech, a company she has led for the past two years. In her role, she is responsible for overseeing all aspects of the company, from strategic planning and business development to day-to-day operations. Her leadership has helped establish Mind Merge Soft Tech as a competitive entity in its industry. As both a manager and founder, Deepika drives innovation, fosters a productive work culture, and ensures the company’s goals align with client needs and market trends, contributing to the company’s growth and stability.' },
  { name: 'Mr. Shaikh Aref', title: 'Software Developer', icon: faUser, description: 'Shaikh Aref has been a Senior Software Developer for the past two years. In his role, he brings extensive expertise in software development, contributing to complex projects and enhancing system functionalities. With a strong technical background, Aref is skilled in designing, implementing, and optimizing code to meet high standards of performance and efficiency. His experience and leadership in development help streamline workflows, mentor junior developers, and ensure the delivery of robust software solutions tailored to client and organizational needs.' },
  { name: 'Mr. Umar Farooq', title: 'Jr. Software Developer', icon: faUser, description: 'Umar Farooq has been working as a Junior Software Developer for the past two years. In his role, he focuses on developing and maintaining software applications, assisting in coding, debugging, and testing under the guidance of senior developers. Umar is dedicated to enhancing his technical skills and contributing to the team by working on various aspects of software development projects. His commitment to learning and attention to detail support the overall success of development initiatives, making him a valuable member of the team.' },
  { name: 'Mr. Shujat Khan', title: 'FrontEnd Developer', icon: faUser, description: 'Shujat Khan is a fresher front-end developer and a recent addition to the team. With a focus on building user interfaces, he is eager to apply his skills in HTML, CSS, JavaScript, and other front-end technologies to create engaging and functional web experiences. As a new joinee, Shujat is enthusiastic about learning and contributing to projects, aiming to develop his expertise and make a positive impact in his role.' },
  { name: 'Mr. Parvez Shaikh', title: 'BackEnd Developer', icon: faUser, description: 'Parvez Shaikh is a fresher Java developer and a new joinee in the team. He is excited to embark on his journey in software development, focusing on building robust applications using Java and related technologies. As a newcomer, Parvez is eager to learn from his colleagues and apply his knowledge to contribute to the team’s projects. His enthusiasm for coding and commitment to developing his skills will help him grow in his role as a Java developer.' },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials"> 
      <h2 className='testimonials-section'>Testimonials</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <FontAwesomeIcon icon={testimonial.icon} className="icon" />
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.title}</h4>
            <p>{testimonial.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
