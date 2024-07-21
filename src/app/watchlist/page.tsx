import Watchlist from "@/components/WatchList";
import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto px-4 max-w-7xl pt-10">
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <div className="flex-1">
          <Watchlist />
        </div>
      </div>
    </div>
  );
};

export default Page;
