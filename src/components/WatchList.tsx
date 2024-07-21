"use client";

import React, { useState } from "react";
import { Coin, useWatchlistStore } from "@/lib/store";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  ColumnFiltersState,
} from "@tanstack/react-table";
import { useDrop } from "react-dnd";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import CoinRow from "./CoinRow";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";

export const columns: ColumnDef<Coin>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-right">Coin</div>,
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <img
          src={row.original.small}
          alt={row.original.name}
          className="h-6 w-6 rounded-full"
        />
        {row.original.symbol}
      </div>
    ),
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const price = row.original.data.price;

      // Format the price as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      }).format(price);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "market_cap",
    header: () => <div className="text-right">Market Cap</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">
          {row.original.data.market_cap}
        </div>
      );
    },
  },
  {
    accessorKey: "total_volume",
    header: () => <div className="text-right">Total Volume</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">
          {row.original.data.total_volume}
        </div>
      );
    },
  },
];

const Watchlist: React.FC = () => {
  const { watchlist, addToWatchlist } = useWatchlistStore();
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: watchlist,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    state: {
      columnFilters,
    },
  });

  const [, drop] = useDrop(() => ({
    accept: "COIN",
    drop: (item: { coin: Coin }) => {},
  }));

  return (
    <div
      className="h-[500px]"
      ref={drop as unknown as React.RefObject<HTMLDivElement>}
    >
      <div className="flex items-center justify-between">
        {/* <h1 className="text-2xl font-semibold">Watch List</h1>
        <Link
          className="text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out"
          href="/watchlist"
        >
          Expand
        </Link> */}
        <Link
          href="/watchlist"
          className="text-2xl underline font-semibold text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out"
        >
          Watch List
        </Link>
      </div>
      <div className="flex items-center py-4 ">
        <Input
          placeholder="Filter coins..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-xs"
        />
        <DropdownMenu>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border h-full overflow-y-scroll no-scrollbar">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table
                .getRowModel()
                .rows.map((row) => (
                  <CoinRow
                    row={row}
                    coin={row.original}
                    addToWatchlist={addToWatchlist}
                    key={row.id}
                  />
                ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Watchlist;
