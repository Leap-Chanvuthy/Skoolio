import TotalItems from "../components/dashboard/TotalItems";
import Earning from "../components/dashboard/Earning";
import BarChart from "../components/dashboard/Barchart";
import TotalSale from "../components/dashboard/TotalSale";
import PieChart from "../components/dashboard/Piechar";
const Dashboard = () => {
    return ( 
        <div className="px-3">
            <h1 className=" text-color3_orange ">Dashboard</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <TotalItems/>
                <Earning/>
                <TotalSale/>
           </div>
          <div >
            <BarChart/>
            {/* <PieChart/> */}
          </div>
         
        </div>
     );
}
 
export default Dashboard;