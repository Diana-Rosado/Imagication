import React from 'react'
import {Grid} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function FAQ() {



    const questions = [
        {
            question: "What are exterior buildings?",
            answer: "When you request an exterior building to be made, it is only whatever is seen on the outside of the building. The user will not be able to go inside unless the interior of the building. "
        }, 
        {
          question: "What are interiors?",
          answer: "When you request an interior to be made, you get to select which room in a building gets created. Depending on the location, users get to go inside a building and enter the interior.",
        },
        {
          question: "What are info hubs?",
          answer: "Info hubs are information zones where users can learn more about the building or school. Info hubs can vary in design. We offer video key points or text key points",
        },
        {
          question: "What is meant by server",
          answer: "The server is what allows users to communicate and see each other. It also allows us to host the site"
        },
        {
          question: "Who owns the 3D models?",
          answer: "As per our licensing agreement, we own the 3D models."
        },
        {
          question: "Is the server cost included in the Base Package?",
          answer: "No. To allow users to join the world and communicate with others costs $8,000 per year."
        },
    ]

    return(
        <div className='pt-48 pb-48'  >
          <div  className='FAQ-title pb-48'>
            FAQ
          </div>
         <Grid style={{ margin: '0 auto',  maxWidth: '70vw'}}>
         {questions.map((FAQ, index) => (
                <Grid  key={index} style={{ width: '100%' }}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography style={{fontWeight:'600'}}>{FAQ.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {FAQ.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
                ))}  
         </Grid>
    
        </div>
    )
}