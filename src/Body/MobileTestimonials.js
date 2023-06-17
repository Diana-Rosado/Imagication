import React, {useState, useEffect} from 'react'
import {Grid, Box, IconButton} from '@mui/material';
import Eli from './images/jpg/Eli.jpg'
import Gabe from './images/jpg/Gabe.jpg'
import Koudjedji from './images/jpg/Koudjedji.jpg'
import Katherine from './images/jpg/Katherine.jpg'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';

export default function MobileTestimonials() {

    const testimonials = [
        {
            avatar: Gabe,
            quote: 'I like that it is interactive and that you can talk with your friends.',
            name: 'Gabe, Freshman in High school'
        },
        {
            avatar: Katherine,
            quote: 'Thank you for giving future students a chance to visit college tours online in such a fun and easy way!',
            name: 'Katherine'
        },
        {
            avatar: Eli,
            quote: '"An incredible initiative - really important to create accessibility for all!”',
            name: 'Eli'
        },
        {
            avatar: Koudjedji,
            quote: '"I wish I had this when I was college searching"',
            name: 'Koudjedji, High School Senior'
        }
        
    ]

    const [currentSlide, setCurrentSlide] = useState(0);

    function handlePrevSlide() {
        setCurrentSlide(currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1);
      }
      
      function handleNextSlide() {
        setCurrentSlide(currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1);
      }

      useEffect(() => {
        const interval = setInterval(() => {
          handleNextSlide();
        }, 5000);
        return () => clearInterval(interval);
      }, [currentSlide]);

    return(
        <div >
            <div className="carousel-container pt-48">

               

            <Box className="carousel-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>

                {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial">
                    <img src={testimonial.avatar} alt={testimonial.name} />
                    <p className ="testimonial-quote">{testimonial.quote}</p>
                    <h4>{testimonial.name}</h4>
                </div>
                ))}

            </Box>
            <Grid container justifyContent='center'>
                <IconButton onClick={handlePrevSlide}>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton onClick={handleNextSlide}>
                    <ChevronRightIcon />
                </IconButton>
            </Grid>
            <Divider/>
            </div>
        </div>
    )
}