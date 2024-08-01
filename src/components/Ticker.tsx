"use client";

import React, { useEffect, useState } from "react";
import pubSub from "@/lib/pubsub";
import { startLiveUpdates } from "@/lib/serverMock";
import { cn } from "@/lib/utils";

export const Ticker = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const [holdings, setHoldings] = useState<any[]>([]);
  const [start, setStart] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleHoldingsUpdate = (data: any[]) => {
      setHoldings(data);
    };

    pubSub.subscribe("holdingsUpdate", handleHoldingsUpdate);
    startLiveUpdates();

    return () => {
      pubSub.unsubscribe("holdingsUpdate", handleHoldingsUpdate);
    };
  }, []);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "120s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 mx-auto max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {holdings.map((item, idx) => (
          <li
            className="flex items-center justify-center w-[150px] sm:w-[200px] md:w-[250px] max-w-full flex-shrink-0 px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 rounded-md"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
              border: "1px solid #444",
              height: "auto",
            }}
            key={`${item.name}-${idx}`}
          >
            <div className="flex flex-col w-full">
              <span className="text-xs sm:text-sm leading-[1.6] text-primary font-semibold truncate">
                {item.name} ({item.coin})
              </span>
              <div className="relative z-20 mt-1 sm:mt-2 flex flex-row items-center justify-between">
                <span className="text-xs sm:text-sm leading-[1.6] font-normal">
                  {item.symbol}
                </span>
                <span className="text-xs sm:text-sm leading-[1.6] font-normal truncate">
                  ${Number(item.total_current_value_usd).toLocaleString()} USD
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ticker;
