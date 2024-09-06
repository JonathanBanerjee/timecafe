"use client";
import React from "react";

import { TabsDemo } from "@/components/ui/tabmenu";

const MenuPage: React.FC = () => {
  return (
    <>
      <div className="p-8">
        <h1 className="text-3xl font-bold">Menu Page</h1>
      </div>
      <TabsDemo />
    </>
  );
};

export default MenuPage;
