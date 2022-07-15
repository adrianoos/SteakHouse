import React from 'react';
import './NavMenu.css';
import MenuButton from './MenuButton/MenuButton';
import UserButton from './UserButton/UserButton';
import MenuPositions from '../assets/menuPositions';
import userButtons from '../assets/userButtons';
import logo from '../assets/miniBull.png';


const NavMenu = () => {
  return (
    <div className='NavMenuMainContainer'>
        <div className='MenuPositionsContainer'>
          <img className='bullLogo' src={logo} alt={'bullLogo'}/>
          {MenuPositions.map(position => <MenuButton key={position} displayName={position}/>)}
        </div>
        <div className='UserButtonsContainer'>
          {userButtons.map(button => <UserButton key={button.name} buttonProps={button}/>)}
        </div>
    </div>
  )
}

export default NavMenu