const initialState = {
    employeeData: []
}


export default function EmployeeReducer(state = initialState, action) {
    switch (action.type) {
        case "FATCHDATA": {
            return {
                ...state,
                employeeData: action.payload
            }
        }

        case "INPUTDATA": {
            let newEmployeeData = [...state.employeeData, action.payload]
            return {
                ...state,
                employeeData: newEmployeeData
            }
        }
        case "DELETEDATA": {
            let newEmployeeData = state.employeeData.filter((item) => item.docId !== action.payload)
            return {
                ...state,
                employeeData: newEmployeeData
            }
        }
        case "UPDATEDATA": {
            let newEmployeeData = state.employeeData.map((item) => {
               if (item.docId === action.payload.docId) {
                   return action.payload
               }else{
                   return item
               }
            })

            return {
                ...state,
                employeeData: newEmployeeData
            }
        }

        default:
            return state
    }
}


