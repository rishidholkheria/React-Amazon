import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home_row">
        <Product
          id="12345678"
          title="One Plus brand new Phone"
          price={45000}
          rating={5}
          image="https://5.imimg.com/data5/WA/IN/MY-11183377/the-alchemist-500x500.png"
        ></Product>

        <Product
          id="12345678"
          title="One Plus brand new Phone"
          price={45000}
          rating={5}
          image="https://5.imimg.com/data5/WA/IN/MY-11183377/the-alchemist-500x500.png"
        ></Product>
      </div>

      <div className="home_row">
        <Product
          id="12345678"
          title="One Plus brand new Phone"
          price={45000}
          rating={5}
          image="https://5.imimg.com/data5/WA/IN/MY-11183377/the-alchemist-500x500.png"
        ></Product>

        <Product
          id="12345678"
          title="One Plus brand new Phone"
          price={45000}
          rating={5}
          image="https://5.imimg.com/data5/WA/IN/MY-11183377/the-alchemist-500x500.png"
        ></Product>

        <Product
          id="12345678"
          title="One Plus brand new Phone"
          price={45000}
          rating={5}
          image="https://5.imimg.com/data5/WA/IN/MY-11183377/the-alchemist-500x500.png"
        ></Product>
      </div>

      <div className="home_row">
        <Product
          id="12345678"
          title="One Plus brand new Phone"
          price={45000}
          rating={5}
          image="https://5.imimg.com/data5/WA/IN/MY-11183377/the-alchemist-500x500.png"
        ></Product>

       
      </div>


    </div>
  );
}

export default Home;
