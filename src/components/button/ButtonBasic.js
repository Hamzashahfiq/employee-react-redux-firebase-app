import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonBasic(props) {
  console.log(props)
  return (
      <Button variant="contained" style={props.buttonStyle}>{props.buttonName}</Button>
  );
}