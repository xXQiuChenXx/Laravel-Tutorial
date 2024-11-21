import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/Components/ui/checkbox";
import { Button } from "@/Components/ui/button";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Link, router } from "@inertiajs/react";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { STATUS_COLOR_MAP, STATUS_TEXT_MAP } from "@/lib/constants";
import { cn } from "@/lib/utils";
import DeleteDialog from "../action-dialog/DeleteDialog";
import { useState } from "react";
import EditProjectDialog from "./EditProjectDialog";

export const columns: ColumnDef<App.Models.Projects>[] = [
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
          className="flex items-center px-3"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <CaretSortIcon className="h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <Link
        href={route("projects.show", row.getValue("id"))}
        className="hover:underline px-3 whitespace-nowrap"
      >
        {row.getValue("name")}
      </Link>
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
          <CaretSortIcon className="h-4 w-4" />
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
          <CaretSortIcon className="h-4 w-4" />
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
          <CaretSortIcon className="h-4 w-4" />
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
      const project = row.original;
      const [showDeleteDialog, setShowDeleteDialog] = useState(false);
      const [showEditDialog, setShowEditDialog] = useState(false);
      const { toast } = useToast();

      const onDelete = () => {
        router.delete(route("projects.destroy", project.id));
      };

      return (
        <>
          <DeleteDialog
            title="Delete Project Confirm"
            description={`Are you sure you want to delete project - ${project.name}`}
            onOpenChange={setShowDeleteDialog}
            onDelete={onDelete}
            open={showDeleteDialog}
          />
          <EditProjectDialog
            project={project}
            open={showEditDialog}
            onOpenChange={setShowEditDialog}
          />
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
                onClick={() => {
                  navigator.clipboard.writeText(
                    route("projects.show", row.getValue("id"))
                  );
                  toast({
                    title: "Copied project link to clipboard",
                  });
                }}
              >
                Share project
              </DropdownMenuItem>
              <DropdownMenuItem onClick={(e) => setShowDeleteDialog(true)}>
                Delete
              </DropdownMenuItem>
              <DropdownMenuItem onClick={(e) => setShowEditDialog(true)}>
                Edit
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      );
    },
  },
];
