import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import ContentSection from './components/ContentSection/ContentSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Body />
      <ContentSection />
      <Footer />
    </div>
  );
}

export default App;