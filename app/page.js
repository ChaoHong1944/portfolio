'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Image from "next/image";
import About from "./components/About";



export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    {/* Add more components as needed */}
    </>
  );
}
