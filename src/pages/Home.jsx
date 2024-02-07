import React,{useState} from 'react'
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner.jsx'
import SearchExercises from '../components/SearchExercises.jsx'
import Exercises from '../components/Exercises.jsx'

export default function Home() {
  return (
    
      <Box>
        <HeroBanner />
        <SearchExercises/>
        <Exercises/>
      </Box>
  )
}
