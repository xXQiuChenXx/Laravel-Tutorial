import { DataTable } from "@/Components/task_table/DataTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({
  tasks,
  pagination
}: {
  tasks: { data: App.Models.Tasks[] };
  pagination: any
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
      
      <DataTable data={tasks.data} paginations={pagination}/>
    </AuthenticatedLayout>
  );
}
