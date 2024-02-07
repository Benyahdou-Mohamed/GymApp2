import React from 'react'
import { Box,Stack,Typography,Button} from '@mui/material';
export default function HeroBanner(){
  return (
    <Box sx={{mt:{lg:'212px',xs:'70px'},ml:{sm:"50px"}}}>
      <Typography color='#FF2625'
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
        Check out the most effective Excersises
      </Typography>
      <Button variant="contained" color="error">Explore Excercices</Button>
    </Box>
  )
}

