import { ProjectTable } from "@/Components/project_table/DataTable";
import { Button } from "@/Components/ui/button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({
  projects,
  success,
}: {
  projects: { data: App.Models.Projects[] };
  success: string;
}) {
  return (
    <AuthenticatedLayout
      header={
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
            Projects
          </h2>
          <Link href={route("projects.create")}>
            <Button>Create Project</Button>
          </Link>
        </div>
      }
    >
      <Head title="Projects" />

      <div className="py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 p-6 text-gray-900 dark:text-gray-100">
          {success && (
            <div className="bg-emerald-500 py-2 px-3 mb-3 text-white rounded">
              {success}
            </div>
          )}
          <ProjectTable data={projects.data} />
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
