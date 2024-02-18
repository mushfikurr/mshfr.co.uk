import { ChevronDown } from "lucide-react";
import { IconButton } from "./components/IconButton";
import { LandingSection } from "./components/LandingSection";
import { Navbar } from "./components/Navbar";
import { NowPlaying } from "./components/NowPlaying";
import { RecentActivity } from "./components/RecentActivity";

export function RootLayout() {
  return (
    <div>
      <Navbar />
      <NowPlaying className="pl-8" />
      <div className="min-h-screen flex flex-col relative w-full">
        <div className="flex flex-col items-center min-h-screen pt-20 py-8 gap-10 px-8">
          <div className="max-w-screen-xl py-24">
            <LandingSection />
          </div>
          <div className="flex flex-col gap-12 w-full h-full max-w-screen-xl grow">
            <RecentActivity />
            <div className="flex items-center justify-center w-full">
              <IconButton Icon={ChevronDown} iconClassnames="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
