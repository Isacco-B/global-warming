import { TooltipProvider } from "@/components/ui/tooltip";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

export default function Layout() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased max-w-4xl mx-auto pt-12 pb-20 sm:py-24 px-6">
      <TooltipProvider delayDuration={0}>
        <Outlet />
        <Navbar />
      </TooltipProvider>
    </main>
  );
}
