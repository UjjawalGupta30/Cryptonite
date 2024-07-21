"use client";

import React, { useState, useEffect } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { Coin, useCoinStore, useRecentSearch } from "@/lib/store";
import { useRouter } from "next/navigation";

const Search = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { coins } = useCoinStore();
  const { recentSearches, addSearch } = useRecentSearch();
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // console.log("coins", coins);

  const handleSearch = (coin: any) => {
    addSearch({ id: coin.coin_id, name: coin.name });
    router.push(`/explore/${coin.id}`);
    setOpen(false);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredRecents = recentSearches
    .map((recent) => coins.find((coin) => coin.coin_id === recent.id))
    .filter(Boolean) as Coin[];

  return (
    <div className="relative">
      <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search recents..."
        className="w-full rounded-lg bg-background pl-8 pr-12 md:w-[300px] lg:w-[400px]"
        onFocus={() => setOpen(true)}
      />
      <kbd className="pointer-events-none absolute right-2 top-2.5 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        <span className="text-xs">⌘</span>K
      </kbd>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type a coin name or symbol..."
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {filteredRecents.length > 0 ? (
            <>
              <CommandGroup heading="Recents">
                {filteredRecents.map((coin) => (
                  <CommandItem
                    key={coin.coin_id}
                    onSelect={() => handleSearch(coin)}
                  >
                    <img
                      src={coin.small}
                      alt={coin.name}
                      className="mr-2 h-4 w-4 rounded-full"
                    />
                    <span>{coin.name}</span>
                    <span className="ml-2 text-muted-foreground">
                      ({coin.symbol})
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </>
          ) : (
            <CommandGroup heading="All">
              {filteredCoins.map((coin) => (
                <CommandItem
                  key={coin.coin_id}
                  onSelect={() => handleSearch(coin)}
                >
                  <img
                    src={coin.small}
                    alt={coin.name}
                    className="mr-2 h-4 w-4 rounded-full"
                  />
                  <span>{coin.name}</span>
                  <span className="ml-2 text-muted-foreground">
                    ({coin.symbol})
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default Search;
