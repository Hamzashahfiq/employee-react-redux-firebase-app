import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BasicModal from '../components/modal/BasicModal';
import Header from '../components/header/Header';
// import CustomizedTables from '../components/table/CustomizedTables'
// import ActionAlerts from '../components/alert/ActionAlerts';
// import AlertDialog from '../components/dialogBox/AlertDialog';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
}


export default function Home() {
    const [formData, setFormData] = useState(initialState);
    const [EmployeeData, setEmployeeData] = useState([])
    const [open, setOpen] = useState(false);
    const [updateBtnFlage, setupdateBtnFlage] = useState(false)
    const [viewBtnFlage, setViewBtnFlage] = useState(true)
    const [updateUuid, setUpdateUuid] = useState(0);
    const [alertOpen, setAlertOpen] = useState({ opened: false, massage: "Employee form will be close", type: "info" });
    const [alertDialogOpen, setAlertDialogOpen] = useState({ opened: false, title: "Deletion Confirmation", text: "Do you want to delete this record?" });
    const [deleteUuid, setDeleteUuid] = useState("");


    // // Handler function of alert
    // const handleClickAlertDialog = () => {
    //     setAlertDialogOpen({ ...alertDialogOpen, opened: true });
    // };

    // const handleCloseAlertDialog = () => {
    //     setAlertDialogOpen({ ...alertDialogOpen, opened: false });
    // };


    // // Handler function of alert
    // const handleClickAlert = () => {
    //     setAlertOpen({ ...alertOpen, opened: true });
    // };

    // const handleCloseAlert = () => {
    //     setAlertOpen({ ...alertOpen, opened: false });
    // };


    // // Handler function of model
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => {
    //     setOpen(false)
    //     setFormData(initialState)
    //     setViewBtnFlage(true)
    //     setupdateBtnFlage(false)
    //     setAlertOpen({ ...alertOpen, opened: true,massage: "Employee form will be close", type: "info" });
    // };

    const resetFormDataHandler = () => {
        setFormData(initialState)
    }
    const setStateDataFirsName = (e) => {
        setFormData({ ...formData, firstName: e.target.value })
    }
    const setStateDataLastName = (e) => {
        setFormData({ ...formData, lastName: e.target.value })
    }
    const setStateDataEmail = (e) => {
        setFormData({ ...formData, email: e.target.value })
    }
    const setStateDataPhoneNo = (e) => {
        setFormData({ ...formData, phoneNo: e.target.value })
    }
    // const onSubmitHandler = () => {
    //     const emailVerification = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    //     if (!formData.firstName || !formData.lastName || !formData.email) {
    //         setAlertOpen({ ...alertOpen, opened: true,massage: "Please input all required data first", type: "error"  });
    //         return;
    //     }
    //     if (!emailVerification.test(formData.email)) {
    //         setAlertOpen({ ...alertOpen, opened: true,massage: "Please enter a valid email", type: "error"  });

    //         return;
    //     } else {
    //         let employee = {
    //             First_Name: formData.firstName,
    //             Last_Name: formData.lastName,
    //             Email: formData.email,
    //             Phone_No: formData.phoneNo,
    //         }
    //         // setEmployeeData([...EmployeeData, employee])
    //         setFormData(initialState)
    //         setOpen(false)
    //         setAlertOpen({ ...alertOpen, opened: true,massage: "Employee data will be submitted", type: "success"  });
    //     }
    // }
    // const deleteHandler = (uuid) => {
    //     setAlertDialogOpen({...alertDialogOpen,opened:true,title: "Deletion Confirmation", text: "Do you want to delete this record?"})
    //     setDeleteUuid(uuid)
    // }

    // const dialogDeleteHandler= () => {
    //     let newEmployeeData = EmployeeData.filter((item) => item.uuid !== deleteUuid)
    //     setEmployeeData(newEmployeeData)
    //     setAlertDialogOpen({ ...alertDialogOpen, opened: false });
    //     setAlertOpen({ ...alertOpen, opened: true,massage: "Clicked record will be deleted", type: "success"  });

    // }
    // const dialogDisDeleteHandler= () => {
    //     setAlertDialogOpen({ ...alertDialogOpen, opened: false });
    //     // setAlertOpen({ ...alertOpen, opened: true,massage:"", type: "info"  });

    // }
    // const updateHandler = (row) => {
    //     let empdata = {
    //         firstName: row.First_Name,
    //         lastName: row.Last_Name,
    //         email: row.Email,
    //         phoneNo: row.Phone_No
    //     }
    //     setUpdateUuid(row.uuid)
    //     setFormData({ ...formData, ...empdata });
    //     setOpen(true)
    //     setupdateBtnFlage(true)
    // }
    // const viewHandler = (row) => {
    //     let empdata = {
    //         firstName: row.First_Name,
    //         lastName: row.Last_Name,
    //         email: row.Email,
    //         phoneNo: row.Phone_No
    //     }
    //     setFormData({ ...formData, ...empdata });
    //     setOpen(true)
    //     setViewBtnFlage(false)

    // }

    // const updateCtaHandler = () => {
    //     let employee = {
    //         uuid: updateUuid,
    //         First_Name: formData.firstName,
    //         Last_Name: formData.lastName,
    //         Email: formData.email,
    //         Phone_No: formData.phoneNo,
    //     }
    //     let newEmployee = EmployeeData.map((item) => {

    //         if (item.uuid === updateUuid) {
    //             return employee
    //         }
    //         else {
    //             return item
    //         }
    //     })
    //     setEmployeeData(newEmployee);
    //     setOpen(false)
    //     setFormData(initialState)
    //     setupdateBtnFlage(false)
    //     setAlertOpen({ ...alertOpen, opened: true,massage: "Clicked record will be update", type: "success"  });


    // }

    return (
        <Box>
            <Header headerText="Employees List" />
            <Container fixed style={{ padding: '10px 0px', margin: '50px auto' }}>
                {/* <BasicModal resetFormData={resetFormDataHandler} setStateFirstName={setStateDataFirsName} setStateLastName={setStateDataLastName}
                    setStateEmail={setStateDataEmail} setStatePhoneNo={setStateDataPhoneNo} submitHandler={onSubmitHandler}
                    formDataValue={formData} modelState={open} modelopen={handleOpen} modelclose={handleClose}
                    updateBtnFlageProp={updateBtnFlage} viewBtnFlageProp={viewBtnFlage} updateCtaHandlerProps={updateCtaHandler} /> */}
                {/* <BasicModal resetFormData={resetFormDataHandler} setStateFirstName={setStateDataFirsName} setStateLastName={setStateDataLastName}
                    setStateEmail={setStateDataEmail} setStatePhoneNo={setStateDataPhoneNo} submitHandler={onSubmitHandler}
                    formDataValue={formData} modelState={open} modelopen={handleOpen} modelclose={handleClose}
                    updateBtnFlageProp={updateBtnFlage} viewBtnFlageProp={viewBtnFlage} updateCtaHandlerProps={updateCtaHandler} /> */}
                {/* <Box sx={{ my: 3 }}>
                    <CustomizedTables tableData={EmployeeData} deleteHandlerProp={deleteHandler} updateHandlerProp={updateHandler} viewHandlerprop={viewHandler} />
                </Box> */}
                test
            </Container>
            {/* <ActionAlerts alertOpen={alertOpen} handleClickAlert={handleClickAlert} handleCloseAlert={handleCloseAlert} />
            <AlertDialog alertDialogOpen={alertDialogOpen} dialogDeleteHandler={dialogDeleteHandler} dialogDisDeleteHandler={dialogDisDeleteHandler}
            handleClickAlertDialog={handleClickAlertDialog} handleCloseAlertDialog={handleCloseAlertDialog}/> */}
        </Box>
    )
}
