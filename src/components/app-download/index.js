import React from 'react';
import './app-download.css';

const AppDownload = () => {
  return (
    <div className='app-download flex absolute-center'>
    <img src='https://resources.dunzo.com/web-assets/prod/_next/static/images/dunzo-daily-app-preview-7c97560e963bcd173c11c470b2ff63ed.png'
      alt='app download'
      height={237}
      width={205}
    />
    <div className='flex column download-btns'>
      <div className='download-text'>
      All this from the convenience of your phone.<br />
Download the Dunzo mobile app.
      </div>
      <div>
        <img src='https://resources.dunzo.com/web-assets/prod/_next/static/images/playstore-ee5b43e66d1583a6066423fb42fb69d8.svg'
        alt='download-icon'
        />
        <img src='https://resources.dunzo.com/web-assets/prod/_next/static/images/appstore-078da620a293bb95473ae21624a55872.svg'
        alt='download-icon'
        />
      </div>
    </div>
    </div>
  )
}

export default AppDownload