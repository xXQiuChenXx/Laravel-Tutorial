import { ProjectTable } from "@/Components/ProjectsTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({
  projects,
}: {
  projects: { data: App.Models.Projects[] };
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

      <ProjectTable projects={projects.data} />
    </AuthenticatedLayout>
  );
}
