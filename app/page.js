"use client"
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Slider from "./components/Slider";
import UserDashboard from "./components/UserDashboard";
import SignIn from "./components/SignIn";
import BlogPage from "./components/BlogPage";
import Navbar from "./components/Navbar";
import { useState } from "react";

export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const [showSignInModal, setSignInShowModal] = useState(false);

  return (
    <>
      <Header showModal={showModal} setShowModal={setShowModal} showSignInModal={showSignInModal} setSignInShowModal={setSignInShowModal}/>
      <Slider showModal={showModal} showSignInModal={showSignInModal}/>
      <Card />
      <Footer />
      <Slider showModal={showModal} showSignInModal={showSignInModal}/>
      {/* <SignIn />
      <SignUp /> */}
      {/* <BlogPage /> */}
      {/* <UserDashboard /> */}
    </>
  );
}
