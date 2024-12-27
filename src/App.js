import React, {useState, useEffect} from "react";
import Navbar from "./Components/Navbar";
import AppNavbar from "./Components/AppNavbar";
import Loader from "./Components/Loader";
import Hero from "./Components/Hero";
import Events from "./Components/Events";
import Services from "./Components/Services";
import Enquary from "./Components/Enquary";
import Plans from "./Components/Plans";
import Footer from "./Components/Footer";

function App() {
  const [screenLoading , setScreenLoading] = useState(false);// make it false

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 10000);
  }, []);

  return(
      screenLoading ? (<Loader/>) :
      ( <div className="App">
      <Navbar/>
      <AppNavbar/>
      <Hero/>
      <Events />
      <Services/>
      <Enquary/>
      <Plans/>
      {/* <DynamicForm/> */}
      <Footer/>
      



    </div>)
    
  );
}

export default App;
