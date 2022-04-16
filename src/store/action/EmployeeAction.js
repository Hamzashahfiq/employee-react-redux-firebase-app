import { db } from '../../config/Firebase'

export const FatchData = (setTableLoading) => async (dispatch) => {
  setTableLoading(true)
  try {
    let employeeData = await db.collection("employee-data").get();
    let employee = []
    employeeData.forEach((doc) => {
      employee.push({
        docId: doc.id,
        ...doc.data()
      })
    })
    dispatch({
      type: "FATCHDATA",
      payload: employee
    })
  }
  catch (error) {
    alert(error)
  }
  finally {
    setTableLoading(false)
  }
}
export const SubmitHandler = (inputData, setSubmittedUuid,initialState, setFormData, setOpen, setAlertOpen, alertOpen,setSubmitLoading) => async (dispatch) => {
  setSubmitLoading(true)
  try {
    await db.collection("employee-data").add(inputData);
    dispatch({
      type: "INPUTDATA",
      payload: inputData
    })
    setSubmittedUuid(inputData.uuid)
    setFormData(initialState)
    setOpen(false)
    setAlertOpen({ ...alertOpen, opened: true, massage: "Employee data will be submitted", type: "success" });
  }
  catch (error) {
    alert(error)
  }
  finally {
    setSubmitLoading(false)
  }
}
export const DeleteHandler = (docId,setDeleteLoading,setAlertDialogOpen,alertDialogOpen,setAlertOpen,alertOpen) => async (dispatch) => {
  setDeleteLoading(true)
  try {
    await db.collection("employee-data").doc(docId).delete();
    dispatch({
      type: "DELETEDATA",
      payload: docId
    })
    setAlertDialogOpen({ ...alertDialogOpen, opened: false });
    setAlertOpen({ ...alertOpen, opened: true,massage: "Clicked record will be deleted", type: "success"  });
  }
  catch (error) {
    alert(error)
  }
  finally {
    setDeleteLoading(false)
  }
}
export const UpdateHandler = (employeeUpdatedData,docId,setupdateLoading,setOpen,setFormData,initialState,setupdateBtnFlage,setAlertOpen,alertOpen) => async (dispatch) => {
   setupdateLoading(true)
  try {
    await db.collection("employee-data").doc(docId).update(employeeUpdatedData);
    dispatch({
      type: "UPDATEDATA",
      payload: {...employeeUpdatedData,docId}
    })
    setOpen(false)
    setFormData(initialState)
    setupdateBtnFlage(false)
    setAlertOpen({ ...alertOpen, opened: true,massage: "Clicked record will be update", type: "success"  });

  }
  catch (error) {
    alert(error)
  }
  finally {
    setupdateLoading(false)
  }
}
