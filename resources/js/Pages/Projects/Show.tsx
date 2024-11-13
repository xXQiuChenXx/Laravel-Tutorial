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

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800">
            <img
              src={data.image_path}
              alt="image"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-1 grid-cols-2">
                <div>
                  <div>
                    <label htmlFor="" className="font-bold text-lg">
                      Project ID
                    </label>
                    <p className="mt-1">{data.id}</p>
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold text-lg">
                      Project Name
                    </label>
                    <p className="mt-1">{data.name}</p>
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold text-lg">
                      Project Status
                    </label>
                    <p className="mt-1">{data.status}</p>
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold text-lg">
                      Created By
                    </label>
                    <p className="mt-1">{data.created_by?.name}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor="" className="font-bold text-lg">
                      Due Date
                    </label>
                    <p className="mt-1">{data.due_date}</p>
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold text-lg">
                      Create Date
                    </label>
                    <p className="mt-1">{data.created_at}</p>
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold text-lg">
                      Updated By
                    </label>
                    <p className="mt-1">{data.updated_by.name}</p>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="" className="font-bold text-lg">
                  Project Description
                </label>
                <p className="mt-1">{data.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Show;
