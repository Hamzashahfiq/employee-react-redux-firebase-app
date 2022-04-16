import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularLoader from '../circularLoader/CircularLoader';


export default function AlertDialog({ alertDialogOpen,deleteLoading, handleClickAlertDialog, handleCloseAlertDialog, dialogDeleteHandler, dialogDisDeleteHandler }) {
  return (
    <div>
      <Dialog
        open={alertDialogOpen.opened}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {alertDialogOpen.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {alertDialogOpen.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogDisDeleteHandler}>Disagree</Button>
          {deleteLoading ? <Button disabled autoFocus><CircularLoader color="Red" size="18px" /></Button> :
            <Button onClick={dialogDeleteHandler} autoFocus>Agree</Button>
          }
        </DialogActions>
      </Dialog>
    </div>
  );
}
