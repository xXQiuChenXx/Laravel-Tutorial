import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Index = () => {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Users
        </h2>
      }
    >
      <Head title="Users" />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-12">
        <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800 mx-6 p-10">
          <h1>To be continue...</h1>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Index;
