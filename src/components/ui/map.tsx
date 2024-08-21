import React, { FunctionComponent } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { Card, CardContent, CardTitle } from "./card";

console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY + "hello world");
const GoogleMap: FunctionComponent<Record<string, unknown>> = () => (
  <>
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <Card className="w-8/12 m-auto">
        <CardTitle className="text-center m-6">Find Us</CardTitle>
        <CardContent>
          <Map
            style={{ width: "100%", height: "500px" }}
            center={{ lat: 53.54992, lng: 10.00678 }}
          >
            <Marker position={{ lat: 53.54992, lng: 10.00678 }} />
          </Map>
        </CardContent>
      </Card>
    </APIProvider>
  </>
);

export default GoogleMap;
