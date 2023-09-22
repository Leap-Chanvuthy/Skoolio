import { BrowserRouter , Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/Student";
import Add from "./pages/Add";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
      <div>
        <div className="flex">
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/student" element={<Student/>} />
            <Route path="/add-to-list" element={<Add/>} />
          </Routes>
        </div>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
