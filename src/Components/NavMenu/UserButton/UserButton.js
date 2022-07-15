import React from 'react';
import './UserButton.css';
import personLogo from '../../assets/mojekonto.svg';
import cartLogo from '../../assets/koszyk.svg';
import orderLogo from '../../assets/zamow.svg'


const UserButton = ({buttonProps}) => {

 const displayButtonImage = (buttonProps) => {
    if (buttonProps.icon === 'person') {
        return (
            <img className='UserButtonIcon' src={personLogo} alt='person'></img>
          )
    } else if (buttonProps.icon === 'cart') {
        return (
            <img className='UserButtonIcon'  src={cartLogo} alt='cart'></img>
          )
    } else if (buttonProps.icon === 'menu') {
        return (
            <img className='UserButtonIcon' src={orderLogo} alt='menu'></img>
          )
    }
 };


  return (
    <div className={buttonProps.name === 'Zamów' ? 'UserButtonMainContainerRedBackGround' : 'UserButtonMainContainer'}>
       {displayButtonImage(buttonProps)}
       <a href='/' className={buttonProps.name === 'Zamów' ? 'userButtonTextOrder' : 'userButtonText'}>{buttonProps.name}</a>
    </div>
  )
}

export default UserButton;