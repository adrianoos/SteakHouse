import React from 'react';
import './MenuButton.css';

const MenuButton = ({displayName}) => {
  return (
    <div className='MenuButtonItem'>{displayName}</div>
  )
}

export default MenuButton;
