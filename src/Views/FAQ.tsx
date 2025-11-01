import React from "react";
import { Button } from "@mui/material";

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen bg-white">
     <nav className="flex items-center justify-between px-40 py-4 border-b border-gray-200">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img src= "/images/logoCIPSP.png" alt=" Logo" className="h-10 w-auto" />
      </a>

      {/* Navigation Links */}
      <ul className="flex space-x-6 font-medium text-gray-700">
        <li className="hover:text-black cursor-pointer">Home</li>
        <li className="hover:text-black cursor-pointer">About Us</li>
        <li className="hover:text-black cursor-pointer">Blogs</li>
        <li className="hover:text-black cursor-pointer">Thematic Areas</li>
        <li className="hover:text-black cursor-pointer">Publications</li>
      </ul>

      {/* Contact Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#002c5f',
          '&:hover': {
            backgroundColor: '#001f45',
          },
          color: '#fff',
          textTransform: 'none',
        }}
      >
        Contact Us
      </Button>
    </nav>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-40 py-20">
        {/* Left Content */}
        <div className="mb-10 md:mb-0">
          <p className="text-sm text-blue-700 font-semibold mb-2">
            GoPro Digital Marketing Agency
          </p>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            For An Improved <br /> Business <br /> Experience!
          </h1>
          <p className="text-gray-600 mb-6">
            We take pride in equipping digital marketers to become experts in
            their field, providing them with the tools and necessary resources
            to stay ahead of the curve in an ever-evolving digital landscape.
          </p>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#002c5f',
              '&:hover': {
                backgroundColor: '#001f45',
              },
              color: '#fff',
              textTransform: 'none',
            }}
          >
            Contact Us
      </Button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/images/hero1.svg" 
            alt="Marketing"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
