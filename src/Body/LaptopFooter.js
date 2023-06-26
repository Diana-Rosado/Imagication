import React from 'react'
import {Grid} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord,faLinkedin} from '@fortawesome/free-brands-svg-icons';


export default function LaptopFooter() {

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


                    <Grid container direction='row' justifyContent='space-around' >
                        <Grid >
                            <div style={{color: '#666666'}}>
                                Imagication Virtual Technologies LLC
                            </div>
                        </Grid>
                        <Grid columnGap={3} justifyContent='flex-end' container direction='row' style={{width:'20%'}} >
                            <div >
                                <a href= './' style={{color: '#666666'}}>Home</a>
                            </div>
                            <div>
                                <a style={{color: '#666666'}} href= 'https://drive.google.com/file/d/18mnsjP4Kg8e2NYAeU0twS3YqXjuitt36/view' target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                            </div>
                        </Grid>
                        <Grid columnGap={3} container direction='row' justifyContent='center'  style={{ width:'20%'}}>
                            {links.map((link, index) => (
                                <div key={index} >
                                    <a href={link.link}target="_blank" rel="noopener noreferrer" style={{cursor:'pointer'}}>{link.avatar}</a>
                                </div>
                                ))}
                        </Grid>
   
                    </Grid>
        </div>
    )
}