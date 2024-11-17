import { TaskTable } from "@/Components/task_table/DataTable";
import { PaginationProps } from "@/Components/task_table/TablePagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PROJECT_FIELD } from "@/lib/constants";
import { Head, router } from "@inertiajs/react";

const Show = ({
  project: { data },
  queryParams,
  pagination,
  tasks,
}: {
  project: { data: App.Models.Projects };
  queryParams: { [key: string]: any };
  pagination: PaginationProps;
  tasks: { data: App.Models.Tasks[] };
}) => {
  const searchFiledChanged = (name: string, value: string) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }

    router.get(route("task.index", queryParams));
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          {`Project - ${data.name}`}
        </h2>
      }
    >
      <Head title="Projects" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800">
            <img
              src={data.image_path}
              alt="image"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
                {PROJECT_FIELD({ project: data }).map((field, i) => (
                  <div
                    key={`field-${i}`}
                    className={
                      field.label === "Project Description" ? "col-span-2" : ""
                    }
                  >
                    <p className="font-bold text-lg">{field.label}</p>
                    <p>{field.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <TaskTable
            data={tasks.data}
            paginations={pagination}
            searchFiledChanged={searchFiledChanged}
          />
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Show;
