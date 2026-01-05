import { Outlet } from "react-router-dom";
import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";

export default function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}
