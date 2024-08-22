import { useState, useCallback } from "react";
import { Alert, Snackbar, AlertColor } from "@mui/material";

type AlertOptions = {
  message: string;
  severity?: AlertColor;
  duration?: number;
};

export function useAlert() {
  const [open, setOpen] = useState(false);
  const [alertOptions, setAlertOptions] = useState<AlertOptions>({
    message: "",
    severity: "info",
    duration: 3000,
  });

  const triggerAlert = useCallback(
    ({ message, severity = "info", duration = 3000 }: AlertOptions) => {
      setAlertOptions({ message, severity, duration });
      setOpen(true);
    },
    []
  );

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const AlertComponent = (
    <Snackbar
      open={open}
      autoHideDuration={alertOptions.duration}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity={alertOptions.severity}
        variant="filled"
      >
        {alertOptions.message}
      </Alert>
    </Snackbar>
  );

  return { triggerAlert, AlertComponent };
}
