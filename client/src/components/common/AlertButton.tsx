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

interface Props {
  triggerTitle: string;
  dialogTitle: string;
  description?: string;
  onConfirm: () => void;
  onCancle?: () => void;
  triggerClassName?: string;
  DialogClassName?: string;
}

export function AlertButton({
  triggerTitle,
  dialogTitle,
  onCancle,
  onConfirm,
  description,
  DialogClassName,
  triggerClassName,
}: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" className={triggerClassName}>
          {triggerTitle}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className={DialogClassName}>
        <AlertDialogHeader>
          <AlertDialogTitle>{dialogTitle}</AlertDialogTitle>
          {description ? <AlertDialogDescription>{description}</AlertDialogDescription> : null}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancle}>취소</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>확인</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
