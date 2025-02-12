"use client";
import React from "react";
import { TabsDemo } from "@/components/ui/tabmenu";

const MenuPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-emerald-600/20 via-emerald-50 to-[#fff8e7]">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 text-center mb-2">
            Our Menu
          </h1>
          <p className="text-emerald-600 text-center text-lg">
            Fresh food & artisanal coffee in Belsize Park
          </p>
        </div>
        <TabsDemo />
      </div>
    </>
  );
};

export default MenuPage;
