// In a React component file (e.g., PorscheViewer.js)
import React from "react";

export default function PorscheViewer() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <iframe
        title="Porsche 911 Carrera 4S"
        width="100%"
        height="100%"
        src="https://sketchfab.com/3d-models/free-porsche-911-carrera-4s-d01b254483794de3819786d93e0e1ebf/embed"
        frameBorder="0"
        allow="autoplay; fullscreen; vr"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    </div>
  );
}