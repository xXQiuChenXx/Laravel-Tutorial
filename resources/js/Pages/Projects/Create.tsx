import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Create = () => {
  const { data, setData, post, errors, reset } = useForm({
    image: "",
    name: "",
    status: "",
    description: "",
    due_date: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post(route("projects.store"));
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Create New Project
        </h2>
      }
    >
      <Head title="Projects" />
      <div className="py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 p-6 text-gray-900 dark:text-gray-100">
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div>
              <InputLabel
                htmlFor="project_image"
                value="Project Image: "
                className="font-bold text-lg mb-1"
              />
              <TextInput
                id="project_image"
                type="file"
                name="image"
                value={data.image}
                className="mt-1 block w-full"
                onChange={(e) => setData("image", e.target.value)}
              />
              <InputError message={errors.image} className="mt-2" />
            </div>
            <div>
              <InputLabel
                htmlFor="project_name"
                value="Project name:"
                className="font-bold text-lg mb-1"
              />
              <TextInput
                id="project_name"
                type="text"
                name="name"
                value={data.name}
                className="mt-1 block w-full"
                onChange={(e) => setData("name", e.target.value)}
              />
              <InputError message={errors.image} className="mt-2" />
            </div>
            <div>
              <InputLabel
                htmlFor="project_description"
                value="Project description:"
                className="font-bold text-lg mb-1"
              />
              <TextInput
                id="project_description"
                type="text"
                name="description"
                value={data.name}
                className="mt-1 block w-full"
                onChange={(e) => setData("description", e.target.value)}
              />
              <InputError message={errors.description} className="mt-2" />
            </div>
          </form>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Create;
