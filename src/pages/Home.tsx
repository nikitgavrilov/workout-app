import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Programs from "../components/Programs/Programs";
import Results from "../components/Results/Results";
import WhoWe from "../components/WhoWe/WhoWe";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Programs />
      <Results />
      <WhoWe />
    </Layout>
  );
};

export default HomePage;
