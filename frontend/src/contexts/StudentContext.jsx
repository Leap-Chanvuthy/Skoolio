import { createContext, useContext, useReducer } from "react";

export const StudentContext = createContext();

export const studentReducer = (state, action) => {
  switch (action.type) {
    case "SET_STUDENTS":
      return { students: action.payload };
    case "CREATE_STUDENTS":
      return { students: [action.payload, ...state.students] };
    case "DELETE_STUDENTS":
      return { students: state.students.filter((w) => w._id !== action.payload._id) };
    case "UPDATE_STUDENT":
      return { students: state };
    default:
      return state;
  }
};

export const StudentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, {
    students : null
  });

  return (
    <StudentContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};
