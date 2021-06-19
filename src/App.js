import React from 'react'; 

import Header from './components/header';
import Mainpage from './components/main';
import Content from './components/content';
import ContactUs from './components/contact-us';



import './App.css';

function App() {
  return (
    <>
    <div className="App">
    <div id="overlayer"></div>
  <div className="loader">
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>

  <div className="site-wrap"  id="home-section">

<Header/>
<Mainpage />
<Content />
<ContactUs />

  </div>
    
    </div>
    </>
  );
}

export default App;
