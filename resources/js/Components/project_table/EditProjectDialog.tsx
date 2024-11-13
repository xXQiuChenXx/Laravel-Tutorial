import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/Components/ui/sheet";
import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { useForm } from "@inertiajs/react";
import { ComponentPropsWithRef, FormEvent } from "react";
import InputError from "@/Components/InputError";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import TextInput from "@/Components/TextInput";
import { Textarea } from "@/Components/ui/textarea";

interface EditProjectDialogProps extends ComponentPropsWithRef<typeof Sheet> {
  project: App.Models.Projects;
}

const EditProjectDialog = ({ project, ...props }: EditProjectDialogProps) => {
  const { data, setData, put, errors, reset, progress } = useForm({
    image: null,
    name: project.name || "",
    status: project.status || "",
    description: project.description || "",
    due_date: project.due_date || "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    put(route("projects.update", project.id));
  };

  return (
    <Sheet {...props}>
      <SheetContent className="w-full max-w-md lg:max-w-lg">
        <SheetHeader>
          <SheetTitle>Edit Project</SheetTitle>
          <SheetDescription>
            You are editing project - {project.name}
          </SheetDescription>
        </SheetHeader>
        <form className="flex flex-col gap-4 py-4" onSubmit={onSubmit}>
          {project.image_path && (
            <div className="max-w-full max-h-36 overflow-auto">
              <img src={project.image_path} alt="project_image" />
            </div>
          )}
          <div>
            <Label htmlFor="name" className="text-right py-2">
              Name:
            </Label>
            <Input
              onChange={(e) => setData("name", e.target.value)}
              id="name"
              value={data.name}
              className="col-span-3"
            />
            <InputError message={errors.name} className="mt-2" />
          </div>
          <div>
            <Label htmlFor="description" className="text-right py-2">
              Description:
            </Label>
            <Textarea
              id="description"
              value={data.description}
              onChange={(e) => setData("description", e.target.value)}
              className="col-span-3 resize-none h-28"
            />
            <InputError message={errors.description} className="mt-2" />
          </div>
          <div>
            <Label htmlFor="status" className="text-right py-2">
              Status:
            </Label>
          <Select
              defaultValue={data.status}
              onValueChange={(value) => setData("status", value)}
              name="status"
            >
              <SelectTrigger className="col-span-3" id="status">
                <SelectValue placeholder="Select a status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <InputError message={errors.status} className="mt-2" />
          </div>
          <div>
            <Label htmlFor="due_date" className="text-right py-2">
              Due Date:
            </Label>
            <TextInput
              id="due_date"
              type="date"
              name="due_date"
              value={data.due_date}
              className="col-span-3 h-9 text-sm block w-full"
              onChange={(e) => setData("due_date", e.target.value)}
            />
            <InputError message={errors.due_date} className="mt-2" />
          </div>
          <div>
            <Label htmlFor="image" className="text-right py-2">
              Image:
            </Label>
            <Input
              id="image"
              type="file"
              name="image"
              className="col-span-3"
              accept=".jpg, .jpeg, .png"
              // @ts-ignore
              onChange={(e) => setData("image", e.target.files[0])}
            />
            <InputError message={errors.image} className="mt-2" />
          </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </SheetClose>
          <Button type="submit">Save Changes</Button>
        </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default EditProjectDialog;
