import React from 'react';
import './MenuButton.css';

const MenuButton = ({displayName}) => {
  return (
    <li className='MenuButtonItem'>{displayName}</li>
  )
}

export default MenuButton