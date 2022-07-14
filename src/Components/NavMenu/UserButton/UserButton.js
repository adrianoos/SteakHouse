import React from 'react';
import './UserButton.css';
import personLogo from '../../assets/mojekonto.svg';
import cartLogo from '../../assets/koszyk.svg';
import orderLogo from '../../assets/zamow.svg'


const UserButton = ({buttonProps}) => {

 const displayButtonImage = (buttonProps) => {
    if (buttonProps.icon === 'person') {
        return (
            <img src={personLogo} alt='person'></img>
          )
    } else if (buttonProps.icon === 'cart') {
        return (
            <img src={cartLogo} alt='cart'></img>
          )
    } else if (buttonProps.icon === 'menu') {
        return (
            <img src={orderLogo} alt='menu'></img>
          )
    }

 };


  return (
    <div className='UserButtonMainContainer'>
       {displayButtonImage(buttonProps)}
       <p className='userButtonText'>{buttonProps.name}</p>
    </div>
  )
}

export default UserButton;