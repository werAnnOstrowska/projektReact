import TheHeader from "./components/Header+Nav/TheHeader";
import TheNavbar from "./components/Header+Nav/TheNavbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <TheHeader />
      <TheNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;