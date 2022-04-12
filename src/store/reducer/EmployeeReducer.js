const initialState =  {
    employeeData :[""]
}


export default function EmployeeReducer (state= initialState, action) {
    switch (action.type){
        case "INPUTDATA" : {
               console.log(state)
               return{
                state
               }
        }
    }
}


