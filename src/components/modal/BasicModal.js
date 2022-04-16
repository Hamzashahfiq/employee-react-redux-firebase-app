import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Header from '../header/Header'
import TextField from '@mui/material/TextField';
import CircularLoader from '../circularLoader/CircularLoader';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};


export default function BasicModal({updateLoading,submitLoading,resetFormData, updateBtnFlageProp, updateCtaHandlerProps, viewBtnFlageProp, modelopen, modelState, modelclose, submitHandler, formDataValue, setStateFirstName, setStateLastName, setStateEmail, setStatePhoneNo }) {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // console.log(modelFlageProp)

  return (
    <div>
      <Button onClick={modelopen} variant="contained" style={{ textTransform: 'capitalize', backgroundColor: '#002984' }}>Add Employee</Button>
      <Modal
        open={modelState}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Header headerText="Employees Information" />
          </Box>
          <form action="">
            <Box sx={{ py: 2 }}>
              {viewBtnFlageProp ?
                <Box sx={{ p: 1, textAlign: 'center', width: { xs: 'auto', md: '584px' } }}>
                  <TextField type='text' id="outlined-basic" sx={{ m: 1, width: { xs: 'auto', md: '260px' } }} onChange={setStateFirstName}
                    value={formDataValue.firstName} label='First Name' placeholder='First Name' variant="outlined" required />
                  <TextField type='text' id="outlined-basic" onChange={setStateLastName} sx={{ m: 1, width: { xs: 'auto', md: '260px' } }}
                    value={formDataValue.lastName} label='Last Name' placeholder='Last Name' variant="outlined" required />
                  <TextField type='email' id="outlined-basic" onChange={setStateEmail} sx={{ m: 1, width: { xs: 'auto', md: '260px' } }}
                    value={formDataValue.email} label='Email' placeholder='Email' variant="outlined" required />
                  <TextField type='number' id="outlined-basic" onChange={setStatePhoneNo} sx={{ m: 1, width: { xs: 'auto', md: '260px' } }}
                    value={formDataValue.phoneNo} label='Phone No' placeholder='Phone No' variant="outlined" />
                </Box> :
                <Box sx={{ p: 1, textAlign: 'center', width: { xs: 'auto', md: '584px' } }}>
                  <TextField type='text' id="outlined-basic" sx={{ m: 1, width: { xs: 'auto', md: '260px' } }} onChange={setStateFirstName}
                    value={formDataValue.firstName} label='First Name' placeholder='First Name' variant="outlined" required    InputProps={{ readOnly: true,}}/>
                  <TextField type='text' id="outlined-basic" onChange={setStateLastName} sx={{ m: 1, width: { xs: 'auto', md: '260px' } }}
                    value={formDataValue.lastName} label='Last Name' placeholder='Last Name' variant="outlined" required InputProps={{ readOnly: true,}}/>
                  <TextField type='email' id="outlined-basic" onChange={setStateEmail} sx={{ m: 1, width: { xs: 'auto', md: '260px' } }}
                    value={formDataValue.email} label='Email' placeholder='Email' variant="outlined" required InputProps={{ readOnly: true,}}/>
                  <TextField type='number' id="outlined-basic" onChange={setStatePhoneNo} sx={{ m: 1, width: { xs: 'auto', md: '260px' } }}
                    value={formDataValue.phoneNo} label='Phone No' placeholder='Phone No' variant="outlined" InputProps={{ readOnly: true,}} />
                </Box>
              }


              {viewBtnFlageProp ?
                <Box sx={{ p: 1, textAlign: 'center', width: { xs: 'auto', md: '584px' } }}>
                  {updateBtnFlageProp ? updateLoading?<Button disabled variant="contained" style={{ textTransform: 'capitalize', backgroundColor: '#002984', margin: '8px', width: '80px' }}><CircularLoader /> </Button> : <Button onClick={updateCtaHandlerProps} variant="contained" style={{ textTransform: 'capitalize', backgroundColor: '#002984', margin: '8px', width: '80px' }}>Update</Button> 
                  :submitLoading ?<Button disabled variant="contained" style={{ textTransform: 'capitalize', backgroundColor: '#002984', margin: '8px', width: '80px' }}><CircularLoader /> </Button>:<Button onClick={submitHandler} variant="contained" style={{ textTransform: 'capitalize', backgroundColor: '#002984', margin: '8px', width: '80px' }}>Submit</Button>}
                  {updateBtnFlageProp ? null : <Button onClick={resetFormData} variant="contained" style={{ textTransform: 'capitalize', backgroundColor: '#ff6f00', margin: '8px', width: '80px' }}>Clear</Button>}
                </Box> : null}
            </Box>
          </form>

          <Box sx={{ textAlign: 'end' }}>
            <Button onClick={modelclose} variant="contained" style={{ textTransform: 'capitalize', backgroundColor: '#c4001d', margin: '5px' }}>Cancel</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}