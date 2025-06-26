import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui";
import Spinner from "@/components/icons/Spinner";
import { useDeleteNote } from "@/hooks/useDeleteNote";

export default function DeleteNoteDialog({
  open,
  onOpenChange,
  noteId,
}: {
  open: boolean;
  onOpenChange: (val: boolean) => void;
  noteId: string;
}) {
  const { isDeleting, deleteHandler } = useDeleteNote(noteId);

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this note?</AlertDialogTitle>
          <AlertDialogDescription>
            This action is permanent and cannot be undone. The note will be
            permanently removed from your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>No, keep it.</AlertDialogCancel>
          <AlertDialogAction
            disabled={isDeleting}
            onClick={() => deleteHandler(() => onOpenChange(false))}
            className="bg-destructive/90 hover:bg-destructive/80 disabled:opacity-30 text-white"
          >
            {isDeleting ? (
              <>
                <Spinner />
                <span>Please wait...</span>
              </>
            ) : (
              "Yes, delete."
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
