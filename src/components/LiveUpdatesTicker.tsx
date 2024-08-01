"use client";

import { useEffect } from "react";
import { startLiveUpdates } from "@/lib/serverMock";

const LiveUpdatesWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    startLiveUpdates();
  }, []);

  return <>{children}</>;
};

export default LiveUpdatesWrapper;
