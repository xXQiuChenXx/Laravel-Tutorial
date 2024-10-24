import { DataTableDemo } from "@/Components/DataTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

type Props = {
  projects: {
    id: number;
    name: string;
    description: string;
    due_date: string;
    status: string;
    image_path: string;
    created_at: string;
    updated_at: string;
    created_by: number;
    updated_by: number;
  };
};

export default function Index({ projects }: Props) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Projects
        </h2>
      }
    >
      <Head title="Projects" />

      <DataTableDemo />
      
    </AuthenticatedLayout>
  );
}
