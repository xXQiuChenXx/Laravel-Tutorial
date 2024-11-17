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
      
    </AuthenticatedLayout>
  );
};

export default Show;
