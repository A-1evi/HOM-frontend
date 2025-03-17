import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full text-white overflow-hidden">
      <div className="h-screen w-full flex items-center justify-center absolute">
        <img
          src="https://images.unsplash.com/photo-1735825764460-c5dec05d6253?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          loading="lazy"
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center  bg-opacity-50">
        <h1 className=" text-3xl text-gray-900">Welcome to Our Services</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Learn More
        </button>
      </div>
      
    </div>
  );
};

export default HeroSection;
