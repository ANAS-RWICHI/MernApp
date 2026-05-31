import EmpCreate from "./components/EmpCreate";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <h1>Employee Management System</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/employees/new" element={<EmpCreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
