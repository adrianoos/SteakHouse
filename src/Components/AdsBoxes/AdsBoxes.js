import React from 'react';
import './AdsBoxes.css';
import BigOrderButton from '../BigOrderButton/BigOrderButton';
import appStore from '../assets/appStore.svg';
import huawei from '../assets/huawei.svg';
import playStore from '../assets/playStore.svg';


const AdsBoxes = () => {
  return (
    <div className='AdsBoxesMainContainer'>
      <div className='AddBox1'>
         <h1 className='AddBoxHeader'>Zestaw dla 3 osób</h1>
            <p className='AddBoxInfoText'>Razem smakuje lepiej! Zamów zestawy obiadowy dla 3 osób</p>
              <p className='AddBoxInfoText'> już od <span className='AddBox1Price'>39 zł</span></p>
             <div className='OrderButtonAddBox'>
               <BigOrderButton />
             </div>
      </div>
      <div className='AddBox2'>
        <h1 className='AddBoxHeader'>UberEats</h1>
          <p className='AddBoxInfoText'>Zamawiaj w aplikacji <span className='AddBox2DiscountInfo'>10% taniej.</span> Pobierz aplikację UberEats już dziś.</p>
            <div className='AppShopsLogos'>
              <img className='AppStoresLogos' src={playStore} alt='appStoresLogos'/>
              <img className='AppStoresLogos' src={appStore} alt='appStoresLogos'/>
              <img className='AppStoresLogos' src={huawei} alt='appStoresLogos'/>
            </div>
            <div className='OrderButtonAddBox'>
               <BigOrderButton />
             </div>
      </div>
    </div>
  )
}

export default AdsBoxes