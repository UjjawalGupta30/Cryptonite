import { DataTableDemo } from "@/components/CoinTable";
import Watchlist from "@/components/WatchList";
import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl flex flex-col md:flex-row gap-6">
      <div className="flex-1 md:flex-[2]">
        <DataTableDemo page="explore" />
      </div>
      <div className="flex-1 md:flex-[1]">
        <Watchlist />
      </div>
    </div>
  );
};

export default Page;
