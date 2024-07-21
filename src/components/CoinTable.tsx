"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Coin, useCoinStore, useWatchlistStore } from "@/lib/store";
import CoinRow from "./CoinRow";
import Link from "next/link";

const getRawPrice = (coin: Coin) => coin.data.price;

function formatNumberWithSuffix(num: string): string {
  // Remove currency symbol ($) and commas
  const cleanedNum = num.replace(/[$,]/g, "");

  // Parse the cleaned string into a float
  const n = parseFloat(cleanedNum);

  // Check if the number is NaN (not a number)
  if (isNaN(n)) {
    return num; // Return the original string if parsing fails
  }

  const thresholds = [
    { value: 1e9, suffix: "B" }, // Billions
    { value: 1e6, suffix: "M" }, // Millions
    { value: 1e3, suffix: "K" }, // Thousands
  ];

  for (const { value, suffix } of thresholds) {
    if (n >= value) {
      return (n / value).toFixed(1) + suffix; // Format with one decimal place and add suffix
    }
  }

  return n.toString(); // Return the number as a string if no thresholds are met
}

export const columns: ColumnDef<Coin>[] = [
  {
    accessorKey: "name",
    header: () => <div className="">Coin</div>,
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <img
          src={row.original.small}
          alt={row.original.name}
          className="h-6 w-6 rounded-full"
        />
        {row.original.name} ({row.original.symbol})
      </div>
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="float-right"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Price
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const price = row.original.data.price;

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 5,
      }).format(price);

      return (
        <div className="text-right">{formatNumberWithSuffix(formatted)}</div>
      );
    },
    sortingFn: (a, b) => {
      const priceA = getRawPrice(a.original);
      const priceB = getRawPrice(b.original);
      if (priceA !== priceB) {
        return priceB - priceA;
      }
      return getRawPrice(a.original) - getRawPrice(b.original);
    },
  },
  {
    accessorKey: "market_cap",
    header: () => <div className="text-right">Market Cap</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right">
          {formatNumberWithSuffix(row.original.data.market_cap)}
        </div>
      );
    },
  },
  {
    accessorKey: "total_volume",
    header: () => (
      <div className="text-right hidden md:block">Total Volume</div>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-right hidden md:block">
          {formatNumberWithSuffix(row.original.data.total_volume)}
        </div>
      );
    },
  },
];

export function DataTableDemo({ page }: { page: string }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const { coins } = useCoinStore();

  const table = useReactTable({
    data: coins,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 20,
      },
    },
  });

  const { addToWatchlist } = useWatchlistStore();
  return (
    <div
      className={`w-full ${
        page == "explore" ? "max-w-3xl" : "max-w-6xl"
      } mx-auto `}
    >
      {/* ... (keep the existing JSX) */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className={
                      header.id === "total_volume" ? "hidden md:table-cell" : ""
                    }
                  >
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
      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="flex-1 text-xs text-muted-foreground">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
