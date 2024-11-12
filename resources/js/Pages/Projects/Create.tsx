import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import { Progress } from "@/Components/ui/progress";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Create = () => {
  const { data, setData, post, errors, reset, progress } = useForm({
    image: null,
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
                accept=".jpg, .jpeg, .png"
                className="mt-1 block w-full"
                onChange={(e) => {
                  if (e.target.files) {
                    //@ts-ignore
                    setData("image", e.target.files[0]);
                  }
                }}
              />
              {progress && (
                <Progress value={progress.percentage} className="my-2" />
              )}
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
              <InputError message={errors.name} className="mt-2" />
            </div>
            <div>
              <InputLabel
                htmlFor="project_description"
                value="Project description:"
                className="font-bold text-lg mb-1"
              />
              <TextAreaInput
                id="project_description"
                type="text"
                name="description"
                value={data.description}
                className="mt-1 block w-full"
                onChange={(e) => setData("description", e.target.value)}
              />
              <InputError message={errors.description} className="mt-2" />
            </div>
            <div>
              <InputLabel
                htmlFor="project_due_date"
                value="Project Deadline:"
                className="font-bold text-lg mb-1"
              />
              <TextInput
                id="project_due_date"
                type="date"
                name="due_date"
                value={data.due_date}
                className="mt-1 block w-full"
                onChange={(e) => setData("due_date", e.target.value)}
              />
              <InputError message={errors.due_date} className="mt-2" />
            </div>
            <div>
              <InputLabel
                htmlFor="project_status"
                value="Project Status:"
                className="font-bold text-lg mb-1"
              />
              <SelectInput
                id="project_status"
                type="date"
                name="status"
                value={data.status}
                className="mt-1 block w-full"
                onChange={(e) => setData("status", e.target.value)}
              >
                <option value="">Select Status</option>
                <option value="pending">Pending</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
              </SelectInput>
              <InputError message={errors.status} className="mt-2" />
            </div>
            <div className="ml-auto">
              <div className="flex items-center gap-3">
                <Link href={route("projects.index")}>
                  <Button variant="outline">Cancel</Button>
                </Link>
                <Button type="submit">Create</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Create;
