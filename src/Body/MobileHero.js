import React from 'react'
import {Grid} from '@mui/material';
import Video from './Videos/LandingPageVideo.gif';

export default function MobileHero() {

    const handleButtonClick = () => {
        window.open('https://unityanalytics-525cb.web.app/', '_blank');
      };
    
  
    return(
        
        <div style={{ position: 'relative', maxWidth: '100%', overflow: 'hidden' }}>
            <img src={Video} alt='Imagication Scenery' autoPlay style={{ width: '100%', height: '700px', objectFit: 'cover', filter: 'blur(2px) brightness(35%)' }}/>
            <Grid className='header' container rowGap={2} justifyContent='flex-start' alignItems='center' direction='column'>
                <div className='header-main'>Explore Without Limits</div>
                <div className='header-subtext'>Visit college campuses in the metaverse</div>
                <button onClick={handleButtonClick} className ='contact-btn' style={{fontSize:'16px'}}>
                        Visit a college
                    </button>
            </Grid>
        </div>
    )
}