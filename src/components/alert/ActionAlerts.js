import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';

export default function ActionAlerts({alertOpen,handleClickAlert, handleCloseAlert}) {
  return (
    
    <Stack spacing={2} sx={{ width: '100%'}}>
      <Snackbar open={alertOpen.opened}  anchorOrigin={{ vertical: 'top', horizontal: 'right' }} autoHideDuration={2000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity={alertOpen.type} sx={{ width: '100%', mt:5 }}>
          {alertOpen.massage}
        </Alert>
      </Snackbar>
    </Stack>
  );
}