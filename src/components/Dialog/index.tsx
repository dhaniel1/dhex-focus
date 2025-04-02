import { FC } from "react";

import {
  Dialog as ShadCNDialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "..";

interface IDialog {
  dialogContent: React.ReactElement;
  children: React.ReactNode;
  dialogTitle: React.ReactNode;
  dialogDescription?: React.ReactNode;
  footer: boolean;
}

const Dialog: FC<IDialog> = ({
  dialogContent,
  dialogTitle,
  dialogDescription,
  children,
  footer = true,
}) => {
  return (
    <ShadCNDialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        {dialogContent}
        {footer && (
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        )}
      </DialogContent>
    </ShadCNDialog>
  );
};

export default Dialog;
