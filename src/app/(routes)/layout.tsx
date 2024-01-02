import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-xl text-center py-6 bg-red-400 text-white">
        Hello, This is a friendly reminder that we are still building this web
        app UI. Will be completed soon.
      </div>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
