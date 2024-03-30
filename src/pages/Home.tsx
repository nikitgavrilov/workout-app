import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Programs from "../components/Programs/Programs";
import Results from "../components/Results/Results";
import WhoWe from "../components/WhoWe/WhoWe";
import Welcome from "../components/Welcome/Welcome";
import Doubts from "../components/Doubts/Doubts";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Programs />
      <Results />
      <WhoWe />
      <Welcome />
      <Doubts />
    </Layout>
  );
};

export default HomePage;
