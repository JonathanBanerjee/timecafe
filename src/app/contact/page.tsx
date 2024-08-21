"use client";
import React from "react";
import GoogleMap from "@/components/ui/map";

const ContactPage: React.FC = () => {
  return (
    <>
      <div className="p-8">
        <h1 className="text-3xl font-bold">Contact Us Page</h1>
      </div>
      <GoogleMap />
    </>
  );
};

export default ContactPage;
