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
import { ComponentPropsWithRef } from "react";
import { Input } from "@/Components/ui/input";


interface Item {
  id: number;
  name: string;
  description: string;
  due_date: string;
  created_at: string;
  status: string;
}

interface EditDialogProps extends ComponentPropsWithRef<typeof Sheet> {
  title: string;
  description: string;
  item: Item;
  onSave: () => void;
}

const EditDialog = ({
  title,
  description,
  onSave,
  ...props
}: EditDialogProps) => {
  return (
    <Sheet {...props}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
           
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </SheetClose>
          <Button type="button" onClick={onSave}>
            Save Changes
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default EditDialog;
