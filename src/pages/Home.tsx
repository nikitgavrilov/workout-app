import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Programs from "../components/Programs/Programs";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Programs />
    </Layout>
  );
};

export default HomePage;
