import React,{useEffect,useState} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box,Stack,Typography} from "@mui/material"
import {exerciceOptions,fetchData} from "../utils/fetchData"
import ExerciseCard from './ExerciseCard'


export default function Exercises({exercises,setExercises,bodyPart}){
  

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=10000', exerciceOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=10000`, exerciceOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  const [currentPage,setCurrentPage]= useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage 
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise)

  const paginate=(e,value)=>{
    setCurrentPage(value);
    window.scrollTo({top:1300,behavior:'smooth'})
  }

  
  
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
            {currentExercises.map((exercise)=>(
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
