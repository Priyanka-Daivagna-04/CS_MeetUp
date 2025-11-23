import React from "react";
import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";

export default function App() {
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  return (
    <>
      <Header />

      {isHome ? (
        // Home page (no container, full screen)
        <Outlet />
      ) : (
        // Other pages (normal container)
        <main className="max-w-6xl mx-auto p-6">
          <Outlet />
        </main>
      )}
    </>
  );
}
