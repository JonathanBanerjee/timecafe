import React from "react";
import Layout from "./display";
import { cn } from "@/lib/utils";
const ContactPage: React.FC = () => {
  return (
    <>
      <Layout />
      <div className="p-8">
        <h1 className="text-3xl font-bold">Contact Us Page</h1>
      </div>
    </>
  );
};

export default ContactPage;
