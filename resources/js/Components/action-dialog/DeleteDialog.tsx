import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog";
import { ComponentPropsWithRef } from "react";

interface DeleteDialogProps extends ComponentPropsWithRef<typeof Dialog> {
  title: string;
  description: string;
  onDelete: () => void;
}

const DeleteDialog = ({
  title,
  description,
  onDelete,
  ...props
}: DeleteDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="justify-end gap-2">
          <DialogClose asChild>
            <Button type="button" className="shadow" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button className="shadow" type="button" onClick={onDelete}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialog;
