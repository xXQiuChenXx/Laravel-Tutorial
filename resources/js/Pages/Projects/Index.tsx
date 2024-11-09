import { DataTable } from "@/Components/project_table/DataTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({
  projects,
  pagination
}: {
  projects: { data: App.Models.Projects[] };
  pagination: any
}) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Projects
        </h2>
      }
    >
      <Head title="Projects" />

      <DataTable data={projects.data} paginations={pagination}/>
    </AuthenticatedLayout>
  );
}
