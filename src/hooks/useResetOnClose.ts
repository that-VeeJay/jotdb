import { useEffect, useRef, startTransition } from "react";

export function useResetOnClose(
  open: boolean,
  resetAction: (formData: FormData) => void
) {
  const resetActionRef = useRef(resetAction);

  useEffect(() => {
    resetActionRef.current = resetAction;
  }, [resetAction]);

  useEffect(() => {
    if (!open) {
      const resetForm = new FormData();
      resetForm.set("reset", "true");

      startTransition(() => {
        resetActionRef.current(resetForm);
      });
    }
  }, [open]);
}
