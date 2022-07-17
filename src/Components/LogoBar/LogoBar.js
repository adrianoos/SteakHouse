import React from 'react';
import './LogoBar.css';
import pyszne from '../assets/pyszne.png';
import deligoo from '../assets/deligoo.png';
import glovo from '../assets/glovo.png';
import ubereats from '../assets/ubereats.png';
import boltfood from '../assets/boltfood.png';




const LogoBar = () => {
  return (
    <div className='LogoBarMainContainer'>
      <img className='DeliveryLogo' src={pyszne} alt='pyszne.pl'/>
      <img className='DeliveryLogo' src={deligoo} alt='deligoo.pl'/>
      <img className='DeliveryLogo' src={glovo} alt='glovo.pl'/>
      <img className='DeliveryLogo' src={ubereats} alt='ubereats.pl'/>
      <img className='DeliveryLogo' src={boltfood} alt='boltfood.pl'/>
    </div>
  )
}

export default LogoBar