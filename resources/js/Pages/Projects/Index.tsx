import { ProjectTable } from "@/Components/project_table/DataTable";
import { Button } from "@/Components/ui/button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({
  projects,
}: {
  projects: { data: App.Models.Projects[] };
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

      <ProjectTable data={projects.data} />
    </AuthenticatedLayout>
  );
}
