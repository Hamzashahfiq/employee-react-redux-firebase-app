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

        default:
            return state
    }
}


