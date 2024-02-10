import React,{useEffect,useState} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box,Stack,Typography} from "@mui/material"
import {exerciceOptions,fetchData} from "../utils/fetchData"
import ExerciseCard from './ExerciseCard'


export default function Exercises({exercises,setExercises,bodyPart}){
  return (
    <Box id='exercises'
      sx={{mt:{lg:'110px'}}}
      mt='50px'
      p='20px'
      >
        <Typography variant='h4' mb='46px' fontWeight='bold'>
          Showing results 
        </Typography>
        <Stack
          direction='row' sx={{gap:{lg:"90px",xs:"50px"}}}
          flexWrap='wrap' justifyContent='center'
        >
            {exercises.map((exercise)=>(
              <ExerciseCard  exercise={exercise}/>
            ))}
        </Stack>
        <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}
