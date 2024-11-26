import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  triggerTitle: string;
  dialogTitle: string;
  description?: string;
  onConfirm: () => void;
  onCancle?: () => void;
  triggerClassName?: string;
  DialogClassName?: string;
  disabled?: boolean;
}

export function AlertButton({
  triggerTitle,
  dialogTitle,
  onCancle,
  onConfirm,
  description,
  DialogClassName,
  triggerClassName,
  disabled,
}: Props) {
  return (
    <AlertDialog>
      {disabled ? (
        <Button variant="ghost" className={cn("cursor-not-allowed opacity-50", triggerClassName)}>
          {triggerTitle}
        </Button>
      ) : (
        <AlertDialogTrigger asChild>
          <Button variant="ghost" className={triggerClassName}>
            {triggerTitle}
          </Button>
        </AlertDialogTrigger>
      )}
      <AlertDialogContent className={cn("whitespace-pre-wrap", DialogClassName)}>
        <AlertDialogHeader>
          <AlertDialogTitle>{dialogTitle}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancle}>취소</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>확인</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
