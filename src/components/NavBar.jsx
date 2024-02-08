import React from 'react'
import { Link } from 'react-router-dom'

import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'
import Logo2 from '../assets/images/l.png'
import { NoEncryption } from '@mui/icons-material'

export default function NavBar() {
  return (
    <Stack 
    direction="row"
    justifyContent="space-around"
    sx={{gap:{sm:'122px', xs: '40px'}, mt: {sm: '15px', xs: '10px'}, justifyContent: 'none'}}
    >
      <Link to="/">
        <img src={Logo} style={{margin:"0 20px"}}/>

      </Link>
      <Stack 
        direction="row"
        gap="40px"
        fontSize='18px'
        alignItems="flex"
      >
        
        <Link to='/' style={{textDecoration:'none',borderBottom:'3px solid #293fab',color:'Black'}}>Home</Link>
        <a href="#exercises" style={{textDecoration:'none',color:'Black'}}>Exercice</a>
      </Stack>
    </Stack>
    
    

  )
}
