import React from 'react';
import NavigationBar from "./partials/NavigationBar";
import '../css/landingPage.css';
import Judul from './partials/Judul';
import CardGame from './partials/CardGame';


function HomePage() {
  return (
    <div>
        <div className='section'>
          <NavigationBar />
          <Judul />
          {/* <CardGame /> */}
        </div>
      </div>
  );
};


export default HomePage;