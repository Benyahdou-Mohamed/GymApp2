import React from 'react'
import { Box,Stack,Typography,Button} from '@mui/material';
import HeroBannerPhoto from "../assets/images/banner.png"
export default function HeroBanner(){
  return (
    <Box sx={{mt:{lg:'175px',xs:'70px'},ml:{sm:"50px"}}}>
      <Typography color='#293fab'
      fontWeight="600"
      fontSize="26px"
      >
         FitFlex Hub
      </Typography>
      <Typography fontWeight="700"
      sx={{fontSize:{lg:'44px',xs:'40px'}}}
      >
         Flex Your Fitness Potential!
      </Typography>
      <Typography fontSize="22px" lineHeight={"35px"} mb={3}>
        Check out the most effective Excercises
      </Typography>
      <Button variant="contained" color="error">Explore Excercises</Button>
      <Typography color='#293fab' 
      fontWeight="600" 
      fontSize="200px" 
      
       mb={3}
       sx={{opacity:'0.2',display:{lg:"block",xs:"none"}}}
       >
        Excercises
      </Typography>
    <img src={HeroBannerPhoto} alt='banner' className='hero-banner-img'/>      
    
    </Box>
  )
}

