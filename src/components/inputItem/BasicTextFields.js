import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField type={props.inputType} id="outlined-basic" onChange={props.inputChange} 
       value={props.inputValue} label={props.inputLabel}  
       placeholder={props. placeholder} variant="outlined" required />
    </Box>
  );
}