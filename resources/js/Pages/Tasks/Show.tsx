import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Show = ({ task: { data } }: { task: { data: App.Models.Tasks } }) => {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          {`Task - ${data.name}`}
        </h2>
      }
    >
      <Head title={`Task - ${data.name}`} />

      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-12">
        <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800 mx-6">
          <img
            src={data.image_path}
            alt="image"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-gray-900 dark:text-gray-100">
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
                
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Show;
