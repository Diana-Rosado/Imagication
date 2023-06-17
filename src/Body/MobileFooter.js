import React from 'react'
import {Grid} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord,faLinkedin} from '@fortawesome/free-brands-svg-icons';


export default function MobileFooter() {

    const links = [
        {
            avatar:<FontAwesomeIcon icon={faDiscord} size ="lg" style={{color: "#666666",}} />,
            link: 'https://discord.gg/DQc4C2Wpcq',
        },
        {
            avatar: <FontAwesomeIcon icon={faLinkedin} size ="lg" style={{color: "#666666",}} />,
            link: 'https://www.linkedin.com/company/imagication',
        },
        
    ]


    return(
        <div className="pt-48 pb-48" >
               <Grid container rowGap={2}>


                    <Grid container justifyContent='center' columnGap={2} >
                        <div>
                            <a href= './' style={{color: '#666666'}}>Home</a>
                        </div>
                        <div>
                            <a style={{color: '#666666'}} href= 'https://drive.google.com/file/d/18mnsjP4Kg8e2NYAeU0twS3YqXjuitt36/view' target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                        </div>
                    </Grid>
                <Grid container justifyContent='center' columnGap={4} >

                    {links.map((link, index) => (
                    <div key={index} >
                        <a href={link.link}target="_blank" rel="noopener noreferrer" style={{cursor:'pointer'}}>{link.avatar}</a>
                    </div>
                    ))}
                    </Grid>
                    <Grid container justifyContent='center'>
                        <div style={{color: '#666666'}}>
                            Imagication
                        </div>
                    </Grid>
            </Grid>
        </div>
    )
}