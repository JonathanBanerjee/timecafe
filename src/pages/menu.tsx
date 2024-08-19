import React from "react";
import Layout from "../app/display";
import { cn } from "@/lib/utils";
const MenuPage: React.FC = () => {
  return (
    <>
      <Layout />
      <div className="p-8">
        <h1 className="text-3xl font-bold">Menu Page</h1>
      </div>
    </>
  );
};

export default MenuPage;
