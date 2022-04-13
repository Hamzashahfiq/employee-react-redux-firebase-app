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
export const SubmitHandler = (inputData, initialState, setFormData, setOpen, setAlertOpen, alertOpen,setSubmitLoading) => async (dispatch) => {
  setSubmitLoading(true)
  try {
    await db.collection("employee-data").add(inputData);
    dispatch({
      type: "INPUTDATA",
      payload: inputData
    })
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
