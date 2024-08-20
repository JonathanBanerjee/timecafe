import React from "react";
import { Button } from "@/components/ui/button";

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="p-8">
        <h1
          className="text-4xl font-bold 
text-blue-900"
        >
          About Page
        </h1>
        <Button>Big Button</Button>
      </div>
    </>
  );
};

export default AboutPage;
