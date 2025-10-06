// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout: React.FC = () => {
  return (
    <>
      <Header />       {/* Nav bar shown on all pages */}
      <main>
        <Outlet />     {/* Renders the current page */}
      </main>
    </>
  );
};

export default Layout;
