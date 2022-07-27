import React from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import './style/landingPage.css';
import Judul from './components/Judul';
import CardGame from './components/CardGame';
import Description from './components/Description';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div>
        <div className='section'>
          <NavigationBar />
          <Judul />
          {/* <CardGame /> */}
          <Description />
        </div>
      </div>
  );
};

function Page1() {
  return (
      <div>
        <div className='section'>
          <NavigationBar />
          <Judul />
          <CardGame />
          {/* <Description /> */}
        </div>
      </div>
  );
};

function Page2() {
  return (
    <div>
        <div className='section'>
          <NavigationBar />
          <Judul />
          {/* <CardGame /> */}
          <Description />
        </div>
      </div>
  );
};

// function App() {
//   return (
//     <BrowserRouter>
//     <div>
//       <main>
//         <Route path='/' exact component={Page1} />>
//         <Route path='/users' exact component={Page2} />>
//       </main>
//     </div>
//     </BrowserRouter>
//   );
// };

export default App;
