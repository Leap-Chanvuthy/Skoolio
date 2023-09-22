import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";
import { BiLogOut } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import {AiFillHome} from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between text-gray-400 bg-color1_dark h-screen px-4 py-8 items-center sticky top-0">
      <div>
        <Link to="/">
          <div className="flex justify-start items-center gap-4 text-lg sticky bottom-0 hover:text-color2_rose   py-5 ">
            <MdDashboard />
            <h3>Dashboard</h3>
          </div>
        </Link>
        <Link to="/menu">
          <div className="flex justify-start items-center gap-4 text-lg sticky bottom-0 hover:text-color2_rose   py-5 ">
            <MdOutlineRestaurantMenu />
            <h3>Menu</h3>
          </div>
        </Link>
        <Link to="/sale">
          <div className="flex justify-start items-center gap-4 text-lg sticky bottom-0 hover:text-color2_rose   py-5 ">
            <VscGraphLine />
            <h3>Sale</h3>
          </div>
        </Link>
        <Link to="/setting">
          <div className="flex justify-start items-center gap-4 text-lg sticky bottom-0 hover:text-color2_rose   py-5 ">
            <AiFillSetting />
            <h3>Setting</h3>
          </div>
        </Link>
        <Link to="/logout">
          <div className="flex justify-start items-center gap-4 text-lg sticky bottom-0 hover:text-color2_rose   py-5 ">
            <BiLogOut />
            <h3>Logout</h3>
          </div>
        </Link>
      </div>
      <div className="text-center text-sm">
        <h3>Copyright © 2023</h3>
        <p>My Shop , All Right Reserved</p>
        <span className="flex justify-center items-center gap-2">
            <AiFillHome/>
            <p>Phnom Penh , Cambodia .</p>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
