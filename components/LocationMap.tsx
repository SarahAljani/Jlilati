"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom CSS for the flashing neon marker
const flashingMarkerStyle = `
  .flashing-marker {
    width: 12px;
    height: 12px;
    background: #00ffff;
    border-radius: 50%;
    box-shadow: 0 0 15px #00ffff, 0 0 30px #00ffff;
    position: relative;
  }
  .flashing-marker::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    width: 16px;
    height: 16px;
    border: 2px solid #00ffff;
    border-radius: 50%;
    animation: pulse-radar 1.5s infinite ease-out;
  }
  @keyframes pulse-radar {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(4); opacity: 0; }
  }
`;

// Create the custom neon icon
const neonIcon =
  typeof window !== "undefined"
    ? L.divIcon({
        className: "custom-div-icon",
        html: `<div class="flashing-marker"></div>`,
        iconSize: [12, 12],
        iconAnchor: [6, 6],
      })
    : null;

const LocationMap = () => {
  const position: [number, number] = [33.483, 36.353]; // Damascus Coordinates

  return (
    <section className="py-24 bg-white overflow-hidden">
      <style>{flashingMarkerStyle}</style>
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6 text-right">
          <div className="order-2 md:order-1">
            <div className="px-4 py-1 border border-teal-500/30 rounded-full text-teal-400 font-mono text-xs mb-4 inline-block">
              LIVE ROAD MAP: DAMASCUS, SYRIA
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              موقعنا في دمشق
            </h2>
            <p className="text-gray-600 text-lg max-w-xl">
              نحن متواجدون في قلب العاصمة لنضمن أسرع استجابة لبلاغات الأعطال في
              مطعمك.
            </p>
          </div>
        </div>

        {/* Map UI with Glow Container */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-700"></div>

          <div className="relative bg-white rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl h-[350px] md:h-[400px] z-10">
            <MapContainer
              center={position}
              zoom={15}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%", background: "#fff" }}
            >
              {/* Neon "Dark Matter" Road Tiles */}
              <TileLayer
                attribution="&copy; CartoDB"
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />

              {/* The Flashing Point */}
              {neonIcon && <Marker position={position} icon={neonIcon} />}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
