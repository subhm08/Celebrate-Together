import React, {useState, useEffect} from "react";
import Navbar from "./Components/Navbar";
import AppNavbar from "./Components/AppNavbar";
import Loader from "./Components/Loader";
import Home from "./Components/Home";
import Catering from "./Components/Catering";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import AboutUs from "./Components/About";
import Booking from "./Components/Booking";
import Videography from "./Components/Videography";
import Error from "./Components/Home/Error";
import Customize from "./Components/Customize";
// import Test from "./Test";
import DishList from "./Components/DishList";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";

function App() {
  const [screenLoading , setScreenLoading] = useState(false);// make it false

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 10000);
  }, []);
  return(
    <>
      {screenLoading ? (
        <Loader />
        ) : (
          <Router>
            <AppNavbar />
            <Navbar />
            {/* <Test/> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catering" element={<Catering />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/videography" element={<Videography />} />
              <Route path="/customize" element={<Customize/>}/>
              <Route path="*" element={<Error/>}/>
            </Routes>
            <Footer/>
          </Router>
         
              )}
            
            </>
    );
    }

export default App;
