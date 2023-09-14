import Create from "../components/menu/Create";
import BarChart from "../components/dashboard/Barchart";
const Menu = () => {
  return (
    <div className="py-8 px-6">
      <h1 className=" text-color2_rose text-2xl font-bold pb-4">Menu</h1> 
      <div className="flex justify-between ">
     
        <Create/>
      </div>
    </div>
   );
}
 
export default Menu;