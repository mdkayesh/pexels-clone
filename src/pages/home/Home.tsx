import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="home pb-[400px]">
      <Hero />
      <Nav />
      <Outlet />
    </div>
  );
};

export default Home;
