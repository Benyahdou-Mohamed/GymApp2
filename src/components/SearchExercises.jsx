import { useEffect } from "react"
import React ,{useState} from 'react'
import{Box,Button,Stack,TextField,Typography}from '@mui/material'
export default function SearchExercises() {
    
  return (
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px"
    >
        <Typography fontWright='700' sx={{fontSize:{lg:"44px",xs:"30px"}}} lineHeight={"35px"} mb={3}>
        Check out the most effective Excercises
      </Typography>
      <Box position='relative' mb='72px'>
          <TextField
            sx={{
              input:{fontWeight:'700',border:"none",borderRadius:"4px"},
              width:{lg:"1170px",xs:'350px'},
              backgroundColor:'#fff',
              borderRadius:'40px'
            }}
            height='76px'
            value=''
            onChange={(e)=>{}}
            placeholder="Search Exercises"
            type ='text'
          >

          </TextField>
      </Box>

    </Stack>
  )
}
