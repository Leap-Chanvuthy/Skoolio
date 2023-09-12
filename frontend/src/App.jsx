import { BrowserRouter , Routes , Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Menu from "./pages/Menu";
import Sale from "./pages/Sale";
import Setting from "./pages/Setting";
function App() {
  return (
    <BrowserRouter>

      <div className="App">
      <div>
        <div className="flex">
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/sale" element={<Sale/>} />
            <Route path="/setting" element={<Setting/>} />
          </Routes>
        </div>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
