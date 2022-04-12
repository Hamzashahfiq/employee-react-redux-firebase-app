import React from 'react'
import Box from '@mui/material/Box';

export default function Header(props) {
    return (
        <Box component='h2' varient='h1' sx={{ fontWeight: 'medium', textAlign: 'center', m: '10px 0', p: '10px', backgroundColor: '#002984', color: 'white'}}>
          {props.headerText || 'Employees' }
        </Box>
    )
}
