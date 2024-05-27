// import React from 'react';
import './Main.css';
// import Ecommerce from './Ecommerce';
import Crm from './Crm';

function Main({isDarkMode}) {
  return (
    <>
      <div className={`mainContent overflow-auto`}>
        <Crm isDarkMode={isDarkMode} />    
      </div> 
    </>       
  )
}

export default Main;