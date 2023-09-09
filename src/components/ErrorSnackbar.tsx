import React from "react";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";

type ErrorSnackbarProps = {
  errorMessage: string | null;
  onClose: () => void;
};

const ErrorSnackbar: React.FC<ErrorSnackbarProps> = ({
  errorMessage,
  onClose,
}) => {
  if (errorMessage === null) {
    return null;
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={true}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <Alert severity="error" variant="filled" onClose={onClose}>
        <AlertTitle>خطا</AlertTitle>
        {errorMessage}
      </Alert>
    </Snackbar>
  );
};

export default ErrorSnackbar;
