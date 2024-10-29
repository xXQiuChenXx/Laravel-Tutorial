import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({
  tasks,
  queryParams,
}: {
  tasks: { data: App.Models.Tasks[] };
  queryParams: any;
}) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Tasks
        </h2>
      }
    >
      <Head title="Tasks" />
      Task table
    </AuthenticatedLayout>
  );
}
