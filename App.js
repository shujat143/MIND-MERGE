import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Welcome from './Components/Welcome/Welcome';
import ContentSection from './Components/ContentSection/ContentSection';
import Testimonials from './Components/Testimonials/Testimonials';
import FAQ from './Components/FAQ/FAQ';
import ContactForm from './Components/ContactForm/ContactForm';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <ContentSection />
      <Testimonials/>
      <FAQ/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;

