import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Grid from "./components/Grid";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Grid />
      <Newsletter />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
