import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Show = ({
  project: { data },
}: {
  project: { data: App.Models.Projects };
}) => {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          {`Project - ${data.name}`}
        </h2>
      }
    >
      <Head title="Projects" />
    </AuthenticatedLayout>
  );
};

export default Show;
