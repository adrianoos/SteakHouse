import React from 'react';
import './NavMenu.css';
import MenuButton from './MenuButton/MenuButton'
import logo from '../../assets/l.png'
import MenuPositions from '../../assets/menuPositions';


const NavMenu = () => {
  return (
    <div className='NavMenuMainContainer'>
        <div className='MenuPositionsContainer'>
          <picture className='bullLogo' src={logo} alt="bullLogo">obrazek</picture>
          {MenuPositions.map(position => <MenuButton key={position} displayName={position}/>)}
        </div>
        <div className='UserButtonsContainer'>

        </div>


    </div>
  )
}

export default NavMenu