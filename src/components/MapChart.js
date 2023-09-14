import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const MapChart = () => {
  return (
    
    <ComposableMap
      projection="geoEquirectangular"
      projectionConfig={{
        // rotate: [-2.0, -32.0, 0],
        // center: [-5, -3],
        scale: 120
      }}
    >
      <Geographies
        geography="../features.json"
        fill="#D6D6DA"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
       {/* [East, North] */}
      <Annotation
        subject={[2.3522, 48.8566]}
        dx={-40}
        dy={5}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="-3" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"France"}
        </text>
       
      </Annotation>

      <Annotation
        subject={[-1.1743, 52.3555]}
        dx={15}
        dy={-25}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="15" y="-5" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"England"}
        </text>
      </Annotation>

      <Annotation
        subject={[-90.2308, 15.7835]}
        dx={-40}
        dy={-3}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="-3" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Guatemala"}
        </text>
      </Annotation>

      <Annotation
        subject={[-3.7837, 52.1307]}
        dx={-20}
        dy={-16}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="4" y="-4" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Wales"}
        </text>
      </Annotation>

      <Annotation
        subject={[104.9910, 12.5657]}
        dx={-40}
        dy={-3}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="-3" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Cambodia"}
        </text>
      </Annotation>

      <Annotation
        subject={[104.1954, 35.8617]}
        dx={-40}
        dy={-3}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="-3" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"China"}
        </text>
      </Annotation>

      <Annotation
        subject={[-106.3468, 56.1304]}
        dx={-40}
        dy={-3}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="-3" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Canada"}
        </text>
      </Annotation>

      <Annotation
        subject={[4.4699, 50.5039]}
        dx={20}
        dy={20}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="37" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Belgium"}
        </text>
      </Annotation>

      <Annotation
        subject={[-7.3055, 53.7798]}
        dx={-25}
        dy={-5}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="-3" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Ireland"}
        </text>
      </Annotation>

      <Annotation
        subject={[5.2913, 52.1326]}
        dx={40}
        dy={-40}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="50" y = "-5" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Netherlands"}
        </text>
      </Annotation>

      <Annotation
        subject={[-102.5528, 23.6345]}
        dx={-40}
        dy={-3}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="-3" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Mexico"}
        </text>
      </Annotation>

      {/* <Annotation
        subject={[2.3522, 48.8566]}
        dx={-40}
        dy={-3}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="-3" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Paris"}
        </text>
      </Annotation> */}
    </ComposableMap>
  );
};

export default MapChart;
