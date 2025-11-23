import React from "react";
import { Link } from "react-router-dom";
import bgVideo from "../assets/V1.mp4";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,0,200,0.9)]">
          Computer Society Meetups
        </h1>

        <p className="mt-6 text-2xl md:text-3xl font-semibold text-pink-200 drop-shadow-[0_0_10px_rgb(255,0,130)]">
          An initiative by NISB | IEEE
        </p>

        <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl drop-shadow-[0_0_5px_black]">
          Weekly knowledge-sharing sessions designed to help CS students
          explore, learn, and grow in exciting technical domains.
        </p>

        <Link
          to="/meetups"
          className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-10 py-4 mt-12 rounded-2xl text-white font-bold text-lg shadow-[0_0_20px_rgba(255,0,200,0.6)] hover:shadow-[0_0_35px_rgba(255,0,250,0.9)] transition-all duration-300"
        >
          Explore Meetups →
        </Link>
      </div>
    </div>
  );
}
