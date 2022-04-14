import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularLoader({color, size}) {
  return (
    <Stack sx={{ color: color || 'white' ,pr:'3px'}} spacing={2} direction="row">
      <CircularProgress color="inherit" size= {size ||'20px'}  />
    </Stack>
  );
}