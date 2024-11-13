import { TaskTable } from "@/Components/task_table/DataTable";
import { PaginationProps } from "@/Components/task_table/TablePagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({
  tasks,
  pagination,
  queryParams = {},
}: {
  tasks: { data: App.Models.Tasks[] };
  queryParams: { [key: string]: any };
  pagination: PaginationProps;
}) {
  const searchFiledChanged = (name: string, value: string) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Tasks
        </h2>
      }
    >
      <Head title="Tasks" />

      <TaskTable
        data={tasks.data}
        paginations={pagination}
        searchFiledChanged={searchFiledChanged}
      />
    </AuthenticatedLayout>
  );
}
