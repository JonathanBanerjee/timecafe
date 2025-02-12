import React, { FunctionComponent } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { Card, CardContent, CardDescription, CardTitle } from "./card";

const GoogleMap: FunctionComponent = () => (
  <>
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <Card className="w-8/12 m-auto">
        <CardTitle className="text-center m-6">Find Us</CardTitle>
        <CardContent>
          <Map
            style={{ width: "100%", height: "500px" }}
            center={{ lat: 51.546484, lng: -0.157013 }}
            zoom={16}
            gestureHandling="cooperative"
            zoomControl={true}
            scrollwheel={true}
          >
            {/* Time Art Café */}
            <Marker
              position={{ lat: 51.546484, lng: -0.157013 }}
              title="Time Art Café"
              icon={{
                url: `data:image/svg+xml,${encodeURIComponent(`
                  <svg viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Cup Body -->
                    <path d="M4 7h12v8a4 4 0 01-4 4H8a4 4 0 01-4-4V7z" fill="#ffffff" stroke="#065f46" stroke-width="1.5"/>
                    <!-- Handle -->
                    <path d="M16 8h2a2 2 0 012 2v2a2 2 0 01-2 2h-2" fill="none" stroke="#065f46" stroke-width="1.5"/>
                    <!-- Saucer -->
                    <path d="M3 19h14" stroke="#065f46" stroke-width="1.5" stroke-linecap="round"/>
                    <!-- Steam -->
                    <path d="M7 4.5c.5-1 1.5-1 2 0" stroke="#065f46" stroke-width="1" stroke-linecap="round"/>
                    <path d="M10 3.5c.5-1 1.5-1 2 0" stroke="#065f46" stroke-width="1" stroke-linecap="round"/>
                    <path d="M13 4.5c.5-1 1.5-1 2 0" stroke="#065f46" stroke-width="1" stroke-linecap="round"/>
                    <!-- Coffee Surface -->
                    <path d="M5 9h10v1H5z" fill="#065f46"/>
                    <!-- Text -->
                    <text x="12" y="28" text-anchor="middle" fill="#065f46" font-size="4" font-family="Arial, sans-serif" font-weight="bold">
                      Time Art Café
                    </text>
                  </svg>
                `)}`,
                scaledSize: { width: 40, height: 50 },
              }}
            />

            {/* Belsize Park Station */}
            <Marker
              position={{ lat: 51.5503, lng: -0.1642 }}
              title="Belsize Park Underground Station"
              icon={{
                url: "/tube-icon.png",
                scaledSize: { width: 30, height: 30 },
              }}
            />

            {/* Chalk Farm Station */}
            <Marker
              position={{ lat: 51.5441, lng: -0.1538 }}
              title="Chalk Farm Underground Station"
              icon={{
                url: "/tube-icon.png",
                scaledSize: { width: 30, height: 30 },
              }}
            />
          </Map>
        </CardContent>
        <CardDescription>
          76 Haverstock Hill London NW3 2BE, United Kingdom
        </CardDescription>
      </Card>
    </APIProvider>
  </>
);

export default GoogleMap;
