import React from "react";
import Layout from "../app/display";
import { cn } from "@/lib/utils";

const AboutPage: React.FC = () => {
  return (
    <>
      <Layout />
      <div className="p-8">
        <h1 className="text-3xl font-bold">About Page</h1>
      </div>
    </>
  );
};

export default AboutPage;
