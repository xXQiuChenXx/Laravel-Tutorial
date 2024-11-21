import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/Components/ui/checkbox";
import { Button } from "@/Components/ui/button";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Link } from "@inertiajs/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { STATUS_COLOR_MAP, STATUS_TEXT_MAP } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const columns: ColumnDef<App.Models.Tasks>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="flex items-center px-3"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <CaretSortIcon className="h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize px-3">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-3"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="px-3 line-clamp-2 min-w-52">
        <Link href={route("task.show", row.getValue("id"))}>
          {row.getValue("name")}
        </Link>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-3"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const STATUS = row.getValue("status") as keyof typeof STATUS_TEXT_MAP;
      return (
        <div className="px-3">
          <p
            className={cn(
              STATUS_COLOR_MAP[STATUS],
              "text-sm font-bold border-2 px-2 w-fit whitespace-nowrap"
            )}
          >
            {STATUS_TEXT_MAP[STATUS]}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-3"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created at
          <CaretSortIcon className="h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="px-3">{row.getValue("created_at")}</div>,
  },
  {
    accessorKey: "due_date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-3"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Due Date
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="px-3">{row.getValue("due_date")}</div>,
  },
  {
    accessorKey: "created_by",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-3"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created By
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="px-3">
        {row.getValue<App.Models.Projects>("created_by").name}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const projects = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(projects.name)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
