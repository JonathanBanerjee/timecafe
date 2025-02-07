import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Display from "./display";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Separate viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://timeartcafe.com"),
  title: {
    default: "Time Art Café | Belsize Park, London",
    template: "%s | Time Art Café",
  },
  description:
    "A unique café experience in Belsize Park, London. Serving artisanal coffee, fresh food, and showcasing local art in a welcoming atmosphere.",
  keywords: [
    "café",
    "coffee shop",
    "Belsize Park",
    "London café",
    "art café",
    "artisanal coffee",
    "healthy food",
    "bagels",
    "local art",
    "brunch",
    "lunch",
    "NW3",
  ],
  authors: [{ name: "Time Art Café" }],
  creator: "Time Art Café",
  publisher: "Time Art Café",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://timeartcafe.com",
    siteName: "Time Art Café",
    title: "Time Art Café | Artisanal Coffee & Fresh Food in Belsize Park",
    description:
      "Experience the perfect blend of art and coffee culture in the heart of Belsize Park, London.",
    images: [
      {
        url: "/og-image.jpg", // Add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Time Art Café Interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Time Art Café | Belsize Park, London",
    description: "Artisanal coffee, fresh food, and local art in Belsize Park",
    images: ["/twitter-image.jpg"], // Add this image to your public folder
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification", // Add your Google verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Time Art Café",
              image: "https://timeartcafe.com/timeocafe.jpg",
              "@id": "https://timeartcafe.com",
              url: "https://timeartcafe.com",
              telephone: "020 1234 5678",
              address: {
                "@type": "PostalAddress",
                streetAddress: "76 Haverstock Hill",
                addressLocality: "London",
                postalCode: "NW3 2BE",
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 51.546484,
                longitude: -0.157013,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "07:30",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday", "Sunday"],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
              servesCuisine: ["Coffee", "Café", "Healthy Food", "Bagels"],
              priceRange: "££",
            }),
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Display />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-emerald-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
                <p>Monday - Friday: 7:30 AM - 6:00 PM</p>
                <p>Saturday - Sunday: 8:00 AM - 6:00 PM</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p>76 Haverstock Hill</p>
                <p>London NW3 2BE</p>
                <p>Tel: 020 1234 5678</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {/* Add social media icons/links here */}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
