import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-emerald-800 mb-8">
        About Time Art Café
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg leading-relaxed mb-6">
            Time Art Café was established in 2024 with a vision to create a
            unique space where art, great coffee, and community come together.
            Located in the heart of Belsize Park, we pride ourselves on serving
            exceptional coffee and fresh, healthy food in an inspiring
            atmosphere.
          </p>
          <p className="text-lg leading-relaxed">
            Our café features rotating art exhibitions from local artists,
            creating a dynamic environment that changes with time - just like
            the perfect cup of coffee.
          </p>
        </div>
        <div className="relative h-[400px]">
          <Image
            src="/about-cafe.jpg"
            alt="Inside Time Art Café"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

export const metadata = {
  title: "About Us | Our Story & Vision",
  description:
    "Learn about Time Art Café's journey, our commitment to great coffee, fresh food, and supporting local artists in Belsize Park, London.",
};
