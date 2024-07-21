"use client";

import * as React from "react";
import {
  DropdownMenuCheckboxItemProps,
  DropdownMenuRadioItem,
} from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function Dmenu() {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-20 cursor-pointer text-center">
        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem onClick={() => router.push("/")} value="top">
            Dashboard
          </DropdownMenuRadioItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioItem
            onClick={() => router.push("/explore")}
            value="bottom"
          >
            Explore
          </DropdownMenuRadioItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioItem
            onClick={() => router.push("/watchlist")}
            value="right"
          >
            WatchList
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
