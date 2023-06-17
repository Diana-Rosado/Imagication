import { Typography, Box, Grid, Card, CardContent,  Container} from '@mui/material'
import Diana from '../images/jpg/Diana.png'
import Bryan from '../images/jpg/Bryan.png'
import React from 'react'; 

export default function Team() {
    const team = [
        {
            name: 'Diana Rosado',
            title: 'CEO & Co-Founder',
            img: Diana,
        },
        {
            name: 'Bryan Pinos',
            title: 'CTO & Co-Founder',
            img: Bryan,
        },
    ]

    const listTeam = team.map((team,i)=>
    <Grid container className='pb-48'
    justifyContent="center"
    alignItems="center"
    >
        <Card key ={i} style={{boxShadow: '-5px 3px 11px 1px rgba(0,0,0,0.1)'}} >
            <CardContent>
                <Typography variant='subtitle2'>
                    {team.title}
                </Typography>
                <Typography variant='h6'>
                    {team.name}
                </Typography>
            </CardContent>
            <div className='team-card'>
                <img src={team.img} width={230} height={270} alt={"pictures"} ></img>
            </div>
        </Card>
    </Grid>
);
    return(
        <Box className='pt-48 pb-48'>
        <div className="team pb-48">
            Meet the Team
        </div>
        <Container className='container-team'>
            {listTeam}
        </Container>
    </Box>
    )
}