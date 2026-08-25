import { Outlet } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
