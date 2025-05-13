import React from 'react'
import './Main.css'
import banner from '../Assets/banner.png'


const Main = () => {
  return (
    <div className='main'>
      <div className='main-banner'>
        <img src={banner} alt='Banner' />
      </div>
    </div>
  );
};

export default Main
