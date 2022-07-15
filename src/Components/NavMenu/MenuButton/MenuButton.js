import React from 'react';
import './MenuButton.css';

const MenuButton = ({displayName}) => {
  return (
    <a href='/' className='MenuButtonItem'>{displayName}</a>
  )
}

export default MenuButton;
