import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import CalculateApproximateCost from "./pages/Calculate-Approximate-Cost/CalculateApproximateCost";
import DesignSolutions from "./pages/Design-Solutions/DesignSolutions";
import RedirectToHome from "./components/RedirectToHome";
import Admin from "./pages/Admin/Admin";
import SignIn from "./pages/Admin/SignIn";

function App() {
  const [location,setLocation] = useState('/')
  const UpdateLocation = ()=>{
    const location = useLocation()
    useEffect(()=>{
      setLocation(location.pathname)

    },[location])

  }
  
  return (
    <>
     {location !== '/calculate-approximate-cost' && <Navbar />}
      <UpdateLocation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculate-approximate-cost" element={<CalculateApproximateCost/>}/>
        <Route path="design-solutions/:category" element={<DesignSolutions/>}/>
        <Route path="admin" element={<Admin/>}/>
        <Route path="signin" element={<SignIn/>}/>
        <Route path="*" element={<RedirectToHome/>}/>
      </Routes>
    { location !== '/calculate-approximate-cost' && <Footer/>}
    </>
  );
}

export default App;
