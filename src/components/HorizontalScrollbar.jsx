import React from 'react'
import{Box,Stack,Typography}from '@mui/material'
import BodyParts from './BodyParts'
export default function HorizontalScrollbar ({data,bodyPart,setBodyPart}){
  return (
    <div className="div">
    {data.map((item)=>(
        <Box key={item.id || item} itemID={item.id || item} title={item.id || item} m="0 40px">
            <BodyParts item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>

    )
    
    )}
    </div>
  )
  
}
