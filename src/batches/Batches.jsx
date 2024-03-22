import React, { useEffect } from "react";
import { Grid, Paper, Button, Typography } from "@mui/material";
import { Add, NotAccessible } from "@mui/icons-material";
import useBatches from "../api/hooks/useBatches";
import { useSelector, useDispatch } from "react-redux";
import { AddBatchForm } from "../forms";
import { FormModal } from "../components";
import { toggleShowAddBatchModal } from "../redux/slices/batches.slice";
import { ScaleLoader } from "react-spinners";
import Batch from "./components/Batch";

function Batches() {
  const { handleFetchBatches } = useBatches();
  const { batches, loading, showAddBatchModal } = useSelector(
    (state) => state.batches
  );
  const dispatch = useDispatch();
  useEffect(() => {
    handleFetchBatches();
  }, []);
  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <ScaleLoader color="#00C49F" height={100} width={15} />
        </div>
      ) : (
        <div>
          <Button
            sx={{
              backgroundColor: "#00C49F",
              margin: 1,
              ":hover": { backgroundColor: "#00C49Fc0" },
            }}
            endIcon={<Add />}
            variant="contained"
            onClick={() => dispatch(toggleShowAddBatchModal())}
          >
            Add new Batch
          </Button>
          <Paper sx={{ borderRadius: 1 }}>
            {batches.length > 0 ? (
              <Grid container spacing={0}>
                {batches.map((batch, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Batch batch={batch} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "30vh",
                }}
              >
                <NotAccessible />
                <Typography variant="h6">No batches are avalibale</Typography>
              </div>
            )}
          </Paper>
        </div>
      )}
      <FormModal
        title="Add new batch"
        open={showAddBatchModal}
        handleClose={() => dispatch(toggleShowAddBatchModal())}
      >
        <AddBatchForm />
      </FormModal>
    </div>
  );
}

export default Batches;
