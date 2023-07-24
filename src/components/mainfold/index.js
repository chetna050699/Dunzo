import React from 'react';
import './mainfold.css';
import { ITEM_TYPES, ORDER_CARTSDATA, ORDER_CARTS_DATA } from '../../common/data';

const Mainfold = () => {
  return (
    <div className='mainfold'>
      <div className='top-strip'>
        <div className='max-width flex strip-inner'>
          <div className='inner-left flex'>
            <div className='paan-image-bg flex absolute-center'>
<img src='https://resources.dunzo.com/web-assets/prod/_next/static/images/paan-3514c1ca4be5af789addd127f4c24308.png'
  alt='Paan Illustration'
  height={32}
  width={32}
  className='paan-image'
/>
            </div>
            <div className='order-text'>
              Order Paan items, munchies and much more on our new Dunzo Mo app
            </div>
          </div>
          <div className='cur-po flex absolute-center strip-download'>
            Download Dunzo Mo app now
            <div className='flex absolute-center'>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b37a" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 6l6 6l-6 6" />
</svg>
            </div>
            
          </div>
        </div>
      </div>
      <div className='mainfold-main'>
        <div className='mainfold-location flex max-width'>
        <div className='mainfold-address-1'>Home</div>
        <div className='flex absolute-center location-arrow'>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#c9cdd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 12l14 0" />
  <path d="M15 16l4 -4" />
  <path d="M15 8l4 4" />
</svg></div>
      <div className='mainfold-address-2'>Mumbai</div>
        </div>
        <div className='mainfold-info max-width'>
        <div className='mainfold-city'>Mumbai</div>
        <div className='mainfold-description'>Why step out when you can get everything delivered home with the tap of a button? Bangalore’s favourite delivery app gets you Food, Grocery, Medicine, Pet Supplies, Fruits & Vegetables, Meat & Fish, Health & Wellness, Gifts and Send Packages from one end of the city to the other. From your local kirana stores to your favourite brands, grocery shopping to your forgotten charger, we are always on the move for you. Why worry about your chores, when you can get it all Dun!</div>
        </div>
        <div className='order-cards max-width flex'>
          {ORDER_CARTS_DATA.map((card)=>{
            return <div className='order-cards-container'>
              <img src={card.banner} alt={card.banner} className='cur-po order-cards-container'/>
            </div>
          })}
        </div>
        <div className='items-cards flex max-width'>
          {ITEM_TYPES.map((item)=>{
            return <div className='items-card curpo'>
              <img src={item.banner} alt={item.title} className='item-cards-banner '/>
              <div>{item.title}</div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Mainfold