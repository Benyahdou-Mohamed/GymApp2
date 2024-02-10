import React,{useState} from 'react'
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner.jsx'
import SearchExercises from '../components/SearchExercises.jsx'
import Exercises from '../components/Exercises.jsx'

export default function Home() {
  const [exercises,setExercises]=useState([])
  const [bodyPart,setBodyPart]=useState('all')
  return (
    
      <Box>
        <HeroBanner />
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
      </Box>
  )
}
