import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";
import { BsPeopleFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { BsFillPlusSquareFill } from "react-icons/bs";
import {AiFillHome} from 'react-icons/ai'
;
const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between text-gray-400 bg-neutral h-[42rem] px-8 py-4 items-center sticky top-0">
      <div>
      <Link to="/">
          <div className="flex justify-start items-center gap-4 text-lg sticky bottom-0 hover:text-warning   py-5 ">
            <AiFillHome />
            <h3>Home</h3>
          </div>
        </Link>
        <Link to="/dashboard">
          <div className="flex justify-start items-center gap-4 text-lg sticky bottom-0 hover:text-warning   py-5 ">
            <MdDashboard />
            <h3>Dashboard</h3>
          </div>
        </Link>
        <Link to="/student">
          <div className="flex justify-start items-center gap-4 text-lg sticky bottom-0 hover:text-warning   py-5 ">
            <PiStudentDuotone />
            <h3>Student</h3>
          </div>
        </Link>
        <Link to="/employee">
          <div className="flex justify-start items-center gap-4 text-lg sticky bottom-0 hover:text-warning   py-5 ">
            <BsPeopleFill />
            <h3>Employee</h3>
          </div>
        </Link>
        <Link to="/add-to-list">
          <div className="flex justify-start items-center gap-4 text-lg sticky bottom-0 hover:text-warning   py-5 ">
            <BsFillPlusSquareFill />
            <h3>Add to list</h3>
          </div>
        </Link>
        <Link to="/logout">
          <div className="flex justify-start items-center gap-4 text-lg sticky bottom-0 hover:text-error  py-5 ">
            <BiLogOut />
            <h3>Logout</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
