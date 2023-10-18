import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Slider from "./components/Slider";
import UserDashboard from "./components/UserDashboard";
import SignIn from "./components/SignIn";
import BlogPage from "./components/BlogPage";

export default function Home() {
  return (
    <>
      <Header />
      <Card />
      <Footer />
      <Slider />
      <SignIn />
      <SignUp />
      {/* <BlogPage /> */}
      {/* <UserDashboard /> */}
    </>
  );
}
