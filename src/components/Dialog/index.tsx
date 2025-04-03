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
  confirmLabel?: string;
  confirmAction?: () => void;
  enableFooter?: boolean;
}

const Dialog: FC<IDialog> = ({
  dialogContent,
  dialogTitle,
  dialogDescription,
  children,
  confirmLabel,
  confirmAction,
  enableFooter = true,
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
        {enableFooter && (
          <DialogFooter className="sm:justify-start pt-2 mt-4 flex items-center gap-6">
            <DialogClose asChild>
              <Button
                label="Cancel"
                size="sm"
                variant="secondary"
                type="button"
              />
            </DialogClose>
            <DialogClose asChild>
              <Button
                label={confirmLabel || "Confirm"}
                size="sm"
                onClick={confirmAction}
                type="button"
              />
            </DialogClose>
          </DialogFooter>
        )}
      </DialogContent>
    </ShadCNDialog>
  );
};

export default Dialog;
