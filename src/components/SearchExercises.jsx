import { useEffect } from "react"
import React ,{useState} from 'react'
import{Box,Button,Stack,TextField,Typography}from '@mui/material'
import {exerciceOptions,fetchData} from "../utils/fetchData"
import  HorizontalScrollbar from "./HorizontalScrollbar"
export default function SearchExercises({setExercises,bodyPart,setBodyPart}) {
    const [search,setSearch]=useState('')
    const [bodyParts,setBodyParts]=useState([])
    useEffect(()=>{
      const fetshExercisesData =async()=>{
        const bodyPartsData= await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciceOptions
          );
          setBodyParts(['all',...bodyPartsData])
          console.log(bodyParts)
      }
      fetshExercisesData();
    },[])
    const handleSearch = async ()=>{
      
      if(search){
        const exercisesData= await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises?limit=10000',exerciceOptions
        );
        const searchedExercises = exercisesData.filter(
          (exercise) => exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
        
          )
          setSearch('')
          setExercises(searchedExercises)
          console.log("http://:",searchedExercises)
      }
      
    }
  return (
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px"
    >
        <Typography fontWeight='600' sx={{fontSize:{lg:"40px",xs:"30px"}}} lineHeight={"35px"} mb={4}>
        Check out the most effective Excercises
      </Typography>
      <Box position='relative' mb='72px'>
          <TextField
            sx={{
              input:{fontWeight:'600',border:"none",borderRadius:"4px"},
              width:{lg:"800px",xs:'350px'},
              backgroundColor:'#fff',
              borderRadius:'40px'
            }}
            height='76px'
            value={search}
            onChange={(e)=>setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type ='text'
            

          >
            
          </TextField>
          <Button onClick ={handleSearch} style={{height: "55px"}} className="search-btn"  variant="contained" sx={{bgcolor:"#293fab",textTransform:"none",width:{lg:"175px",xs:"80px"},
        fontSize:{lg:"20px",xs:"14px"},position:"absolute"
        }}>Search</Button>
      </Box>
      <Box sx={{position:'relative',width:"100%" ,p:'20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyParts bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>

    </Stack>
  )
}
