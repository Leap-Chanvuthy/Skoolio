import TotalItems from "../components/dashboard/TotalItems";
import Invoice from "../components/dashboard/Invoice";
import BarChart from "../components/dashboard/Barchart";
import TotalSale from "../components/dashboard/TotalSale";

const Dashboard = () => {
  return (
    <div className="py-8 px-6">
      <h1 className=" text-color2_rose text-2xl font-bold pb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <TotalItems />
          <Invoice />
          <Invoice />
      </div>
        <div className="block justify-center">
                <BarChart />
        </div>
    </div>
  );
};

export default Dashboard;
