import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularLoader() {
  return (
    <Stack sx={{ color: 'white' }} spacing={2} direction="row">
      <CircularProgress color="inherit" size= '20px' />
    </Stack>
  );
}