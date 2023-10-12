import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import UserDashboard from "./components/UserDashboard";

export default function Home() {
  return (
    <>
      <Header />
      <Card />
      <Footer />
      <SignUp />
      {/* <UserDashboard /> */}
    </>
  );
}
