import { useContext } from 'react';
import StudentContext from '../contexts/StudentContext';

export const useStudentContext = () => {
    const context = useContext(StudentContext);
    if (!context){
        throw Error ('useStudentContext must be wrapped by useStudentContext provider');
    }

    return context;
}