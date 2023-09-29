import {createContext , useReducer} from "react";

const StudentContext = createContext ();
const studentReducer = (state , action) => {
    switch(action.type){
        case 'SET_STUDENTS' :
            return {
                students : action.payload
            }
    }
}


export const StudentContextProvider = ({children}) => {
    const [state , dispatch] = useReducer(studentReducer , {
        students : null
    })
    
    return (
        <StudentContext.Provider value={{...state , dispatch}}>
            {children}
        </StudentContext.Provider>
    )
}