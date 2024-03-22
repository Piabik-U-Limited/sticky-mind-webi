import React from "react";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
function FormSubmitButton({
  loading,
  title,
  loadingTitle,
  handleSubmit,
  icon,
}) {
  return (
    <div className="form-grid">
      {loading ? (
        <LoadingButton
          className="btnNext"
          loading
          color="secondary"
          loadingPosition="start"
          variant="contained"
          sx={{
            fontSize: "14px",
            padding: "8px 40px",
            borderRadius: "15px",
          }}
        >
          {loadingTitle}
        </LoadingButton>
      ) : (
        <Button
          type="submit"
          className="submit-btn"
          sx={{
            fontSize: "14px",
            padding: "8px 40px",
            backgroundColor: "#00C49F",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
            border: "none",
            "&:hover": {
              backgroundColor: "#00C49Fc0",
            },
          }}
          onClick={handleSubmit}
          endIcon={icon}
        >
          {title}
        </Button>
      )}
    </div>
  );
}

export default FormSubmitButton;
