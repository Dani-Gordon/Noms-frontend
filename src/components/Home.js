import React from 'react';
// import logo from '../images/Noms.jpeg';

const Home = () => {
  return (
    <>
      <section className="home-section">
        <div className="hero">
          <div className="hero-text">
            <div className="hero-text-logo">
              <h1>Noms</h1>
            </div>
            {/* <img src={logo} alt="Food" /> */}
          </div>
        </div>
        <footer id="home-footer">Created by Dani Gordon &copy; 2022</footer>
      </section>
    </>
  );
};

export default Home;
