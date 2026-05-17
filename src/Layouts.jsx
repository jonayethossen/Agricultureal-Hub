import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import Footer from "./components/Footer";

export default function Layouts() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
