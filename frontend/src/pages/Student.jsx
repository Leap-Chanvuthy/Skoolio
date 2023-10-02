import {RiDeleteBin6Line} from "react-icons/ri";
import {FiEdit} from "react-icons/fi";
import { useEffect, useState } from "react";
import { UseStudentContext } from "../hooks/UseStudentHook";
import Search from "../components/Search";

const Student = () => {
    
    const [students , setStudents] = useState([]);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const fetchStudents = async () => {
            const respone = await fetch ('/api/students')
            const data = await respone.json();
            console.log (data);
            if (respone.ok){
                setStudents(data);
                setLoading(false);
            }
        }
        fetchStudents();
        }, 1000);
    }, [students]);
    

    return (
      <div className="w-full h-[42rem]">
        <div className="flex justify-between items-center">
            <Search/>
        </div>
        <div className="px-4 w-full h-[34rem] overflow-y-scroll">
          <div className="overflow-x-auto">
            <table className="table text-center">
              <thead>
                <tr className="bg-base-200 text-lg">
                  <th>Student's ID</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Date of Birth</th>
                  <th>Major</th>
                  <th>Generation</th>
                  <th>Photo</th>
                  <th>Action</th>
                </tr>
              </thead>
    
              <tbody className="text-md font-semibold">
                {loading && 
                  <div className="max-w-lg h-full flex justify-center items-center">
                    <span className="loading loading-dots w-[8rem]"></span>
                  </div>
                 }
                {students && students.map((student) => (
                  <tr key={student._id}>
                    <td>{student._id}</td>
                    <td>{student.firstname}</td>
                    <td>{student.lastname}</td>
                    <td>{student.date_of_birth}</td>
                    <td>{student.major}</td>
                    <td>{student.generation}</td>
                    <td>
                      <div class="avatar">
                        <div class="w-16 rounded">
                          <img src={`../upload/items/${student.photo}`} />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-center gap-4 text-lg">
                        <button
                          className="text-error"
                         
                        >
                          <RiDeleteBin6Line />
                        </button>
                        <button
                          className="text-info"
                         
                        >
                          <FiEdit />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      );
}
 
export default Student;