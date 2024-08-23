import React, { FunctionComponent } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { Card, CardContent, CardDescription, CardTitle } from "./card";

console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY + "hello world");
const GoogleMap: FunctionComponent<Record<string, unknown>> = () => (
  <>
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <Card className="w-8/12 m-auto">
        <CardTitle className="text-center m-6">Find Us</CardTitle>
        <CardContent>
          <Map
            style={{ width: "100%", height: "500px" }}
            center={{ lat: 51.546484, lng: -0.157013 }}
            zoom={18}
          >
            <Marker position={{ lat: 51.54653, lng: -0.15706 }} />
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
