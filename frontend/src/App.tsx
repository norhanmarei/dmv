import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
