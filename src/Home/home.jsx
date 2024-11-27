import React from "react";
import Navebar from "../componetes/navebar";
import Banner from "../componetes/banner";
import Freebook from "../componetes/freebook";
import Footer from "../componetes/footer";

function Home({getusers}) {
  return (
    <>
      <Navebar getuser={getusers} />
      <Banner />
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;
