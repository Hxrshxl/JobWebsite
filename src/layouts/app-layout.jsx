"use client";
import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";

const AppLayout = () => {
  return (
    <div className="relative min-h-screen">
      <main className="container relative">
        <Header />
        <div className="flex min-h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
          {/* Main content container */}
          <div className="relative w-full z-10">
            <div className="text-center mb-8">
            </div>
            <Outlet />
          </div>

          {/* Dot pattern that covers the entire viewport */}
          <DotPattern
            className={cn(
              "fixed inset-0 w-full h-full z-0",
              "[mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
            )}
          />
        </div>
      </main>
<<<<<<< HEAD
      
      <footer className="relative z-10 p-10 text-center bg-black mt-10">
        <p className="text-white">Made with 💗 by Harshal Bhagat</p>
      </footer>
=======
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made with 💗 by Harshal
      </div>
>>>>>>> 62b3b397afb2e6e77d19604c308f5bc7a896cd69
    </div>
  );
};

export default AppLayout;