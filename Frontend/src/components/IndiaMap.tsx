import React, { useState } from "react";
// @ts-ignore
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import gemImage from '../assets/GeM.png'

const indiaGeo = "/data/india-composite.geojson";   // whole country outline
const statesGeo = "/data/Admin2.geojson";     // state boundaries

type Place = { name: string; coordinates: [number, number] };

const places: Place[] = [
  { name: "Leh", coordinates: [77.5772, 34.1526] },
  { name: "Jammu", coordinates: [74.8570, 32.7266] },
  { name: "Kangra", coordinates: [76.2731, 32.1015] },
  { name: "Delhi", coordinates: [77.1025, 28.7041] },
  { name: "Dehradun", coordinates: [78.0322, 30.3165] },
  { name: "Rishikesh", coordinates: [78.2853, 30.1158] },
  { name: "Ralwala", coordinates: [78.2147, 30.0222] },
  { name: "Lansdowne", coordinates: [78.6871, 29.8377] },
  { name: "Ranikhet", coordinates: [79.4322, 29.6434] },
  { name: "Dwarahat", coordinates: [79.4268, 29.7760] },
  { name: "Chandigarh", coordinates: [76.7794, 30.7333] },
  { name: "Meerut", coordinates: [77.7064, 28.9845] },
  { name: "Lucknow", coordinates: [80.9462, 26.8467] },
  { name: "Assam (Guwahati)", coordinates: [92.9376, 26.2006] },
  { name: "Sri Ganganagar", coordinates: [73.8800, 29.9094] },
  { name: "Amritsar", coordinates: [74.8723, 31.6340] },
  { name: "Sagar", coordinates: [78.7378, 23.8388] },
  { name: "Bhopal", coordinates: [77.4126, 23.2599] },
  { name: "Jabalpur", coordinates: [79.9339, 23.1686] },
  { name: "Pune", coordinates: [73.8786, 18.5246] },
  { name: "Thane", coordinates: [72.9772, 19.2123] },
  { name: "Mumbai", coordinates: [72.8321, 18.9582] },
  { name: "Aurangabad", coordinates: [75.3393, 19.8758] },
  { name: "Faridkot", coordinates: [74.7539, 30.6774] },
  { name: "Visakhapatnam", coordinates: [83.2185, 17.6868] },
  { name: "Goa", coordinates: [74.1240, 15.2993] },
  { name: "Hyderabad", coordinates: [78.4772, 17.4065] },
  { name: "Bangalore", coordinates: [77.5775, 12.9629] },
  { name: "Kochi", coordinates: [76.2673, 9.9312] },
];

const IndiaMap: React.FC<{ width?: number; height?: number }> = ({
  width = 900,
  height = 900,
}) => {
  const [selected, setSelected] = useState<Place | null>(null);

  return (
    <>
      <div style={{ maxWidth: width, margin: "0 auto" }}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 850,
            center: [82.8, 25],
          }}
          width={900}
          height={900}
        >
          {/* Whole India outline */}
          <Geographies geography={indiaGeo}>
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo: any) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#ffffff"
                  stroke="#000"
                  strokeWidth={1}
                />
              ))
            }
          </Geographies>

          {/* State boundaries */}
          <Geographies geography={statesGeo}>
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo: any) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="none"
                  stroke="#333"
                  strokeWidth={0.6}
                />
              ))
            }
          </Geographies>

          {/* Markers */}
          {places.map((p, i) => (
            <Marker key={i} coordinates={p.coordinates} onClick={() => setSelected(p)}>
              <circle r={5} fill="#d62828" stroke="#900" strokeWidth={0.8} cursor="pointer" />
              {/* If this place is selected, show name above it */}
              {selected?.name === p.name && (
                <text
                  textAnchor="middle"
                  y={-10}
                  style={{ fontFamily: "Arial", fontSize: "15px", fill: "#111" }}
                >
                  {p.name}
                </text>
              )}
            </Marker>
          ))}
        </ComposableMap>
      </div>

    </>
  );
};

export default IndiaMap;
