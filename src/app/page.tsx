import { DataTableDemo } from "@/components/CoinTable";
import { GlobalMarketCapChart } from "@/components/MultiLineChart";
import WatchList from "@/components/WatchList";
import Ticker from "@/components/Ticker";
import LiveUpdatesTicker from "@/components/LiveUpdatesTicker";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <LiveUpdatesTicker>
      <main className="">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="pt-5 mb-5">
            <Ticker />
          </div>
          <div className="flex flex-col md:flex-row gap-6 mb-10">
            <div className="flex-1">
              <GlobalMarketCapChart />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 max-w-7xl">
            <div className="flex-1 md:flex-[2]">
              <DataTableDemo page="explore" />
            </div>
            <div className="flex-1 md:flex-[1]">
              <WatchList />
            </div>
          </div>
        </div>
      </main>
    </LiveUpdatesTicker>
  );
}
