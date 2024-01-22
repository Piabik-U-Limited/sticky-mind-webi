import React from "react";
import { Typography, Card, Grid } from "@mui/material";
import { products, income, sales, stock } from "../../../assets/icons";
import { PulseLoader } from "react-spinners";
import { useSelector } from "react-redux";
function SummeryData() {
  const state = useSelector((state) => state.dashboard);

  return (
    <Grid container spacing={2} alignItems="stretch">
      {/* Alumni Card */}
      <Grid item xs={12} sm={6} md={3}>
        <Card
          className="card-content"
          sx={{ borderRadius: 1, backgroundColor: "purple", padding: 1 }}
        >
          {state.loading ? (
            <PulseLoader color="#fff" height={50} width={15} />
          ) : (
            <div
              style={{
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="left">
                <img src={sales} alt="Sales" width={50} />
              </div>
              <div>
                <Typography variant="subtitle1">Sales</Typography>
                <Typography variant="h6">
                  {state.dashboardData?.totalSales}
                </Typography>
              </div>
            </div>
          )}
        </Card>
      </Grid>

      {/* Students Card */}
      <Grid item xs={12} sm={6} md={3}>
        <Card
          className="card-content"
          sx={{ borderRadius: 1, backgroundColor: "#87CEEB", padding: 1 }}
        >
          {state.loading ? (
            <PulseLoader color="#fff" height={50} width={15} />
          ) : (
            <div
              style={{
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="left">
                <img src={products} alt="products" width={50} />
              </div>
              <div className="right students">
                <Typography variant="subtitle1">Products</Typography>
                <Typography variant="h6">
                  {state.dashboardData?.totalProducts}
                </Typography>
              </div>
            </div>
          )}
        </Card>
      </Grid>

      {/* Programs Card */}
      <Grid item xs={12} sm={6} md={3}>
        <Card
          className="card-content"
          sx={{
            borderRadius: 1,
            backgroundColor: "#0F9D58",
            padding: 1,
          }}
        >
          {state.loading ? (
            <PulseLoader color="#fff" height={50} width={15} />
          ) : (
            <div
              style={{
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="left">
                <img src={income} alt="Income" width={50} />
              </div>
              <div>
                <Typography variant="subtitle1">Gross Sales</Typography>
                <Typography variant="h6">
                  UGX. {state.dashboardData?.netIncome}
                </Typography>
              </div>
            </div>
          )}
        </Card>
      </Grid>

      {/* Applicants Card */}
      <Grid item xs={12} sm={6} md={3}>
        <Card
          className="card-content"
          sx={{
            borderRadius: 1,
            backgroundColor: "#FFBB28",
            padding: 1,
          }}
        >
          {state.loading ? (
            <PulseLoader color="#fff" height={50} width={15} />
          ) : (
            <div
              style={{
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="left">
                <img src={stock} alt="Stock" width={50} />
              </div>
              <div className="right staff">
                <Typography variant="subtitle1">Stock</Typography>
                <Typography variant="h6">
                  UGX. {state.dashboardData?.stock}
                </Typography>
              </div>
            </div>
          )}
        </Card>
      </Grid>
    </Grid>
  );
}

export default SummeryData;
