import React from 'react';
import NavigationBar from "./partials/NavigationBar";
import '../css/landingPage.css';
import Judul from './partials/Judul';
import Description from './partials/Description'


function DescriptionPage() {
  return (
    <div>
        <div className='section'>
          <NavigationBar />
          <Judul />
          {/* <Description /> */}
        </div>
      </div>
  );
};

export default DescriptionPage;