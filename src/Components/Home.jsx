import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import TrendingProducts from "./TrendingProducts";
import SuitsTimer from "./SuitsTimer";
import SeasonalDresses from "./SeasonalDresses";
import OfferTimer from "./OfferTimer";
import Marquee from "./Marquee";
import NewsLetter from "./NewsLetter";
import About from "./About";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <TrendingProducts />
      <SuitsTimer />
      <SeasonalDresses />
      <OfferTimer />
      <Marquee />
      <div className=" px-3">
        <NewsLetter />
      </div>
      <About />
      <Footer />
    </>
  );
};

export default Home;
