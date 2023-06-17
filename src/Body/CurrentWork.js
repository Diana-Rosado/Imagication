import React from 'react'
import {Grid, Divider} from '@mui/material';
import Stevens from './images/jpg/Stevens.jpg'

export default function CurrentWork() {

    const works = [
        {
            image: Stevens,
            name: 'Stevens Institute of Technology',
            link: 'https://bryanapinos.github.io/ImagicationUnityBuilds/'
        },
    ]

    return(
        <div >
            <Grid >
                <div className='works-title pt-48'>
                Check out what we're working on 
                </div>
            {works.map((work, index) => (
                <div key={index} className="works pt-48 pb-48">
                    <a href={work.link} target="_blank" rel="noopener noreferrer">
                        <img src={work.image} alt={work.name} />
                    </a>
                    <h3>{work.name}</h3>
                </div>
                ))}
            </Grid>
            <Divider/>
        </div>
    )
}