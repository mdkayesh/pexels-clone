import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
