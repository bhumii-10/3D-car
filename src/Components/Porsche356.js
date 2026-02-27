import React from "react";

export default function Porsche356() {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="Porsche 356C (1966)"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/5ff13db8be984648b391f012a9a0525c/embed"
        style={{
          width: "100%",
          height: "500px",
        }}
      ></iframe>

      <p
        style={{
          fontSize: "13px",
          margin: "5px",
          color: "#4A4A4A",
        }}
      >
        <a
          href="https://sketchfab.com/3d-models/porsche-356c-1966-5ff13db8be984648b391f012a9a0525c"
          target="_blank"
          rel="noreferrer"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          Porsche 356C (1966)
        </a>{" "}
        by{" "}
        <a
          href="https://sketchfab.com/egelsky"
          target="_blank"
          rel="noreferrer"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          Sergey Egelsky
        </a>{" "}
        on{" "}
        <a
          href="https://sketchfab.com"
          target="_blank"
          rel="noreferrer"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
}
