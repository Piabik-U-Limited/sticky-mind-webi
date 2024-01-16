import * as React from "react";
import PropTypes from "prop-types";
import { Paper, Table, TableBody, TableCell, TableRow } from "@mui/material";
import {
  TableContainer,
  TableHead,
  TablePagination,
  Button,
  Typography,
  Chip,
} from "@mui/material";
import { Menu, MenuItem, ListItemIcon, Collapse } from "@mui/material";
import {
  MoreVert,
  Search,
  Edit,
  Delete,
  Error,
  Clear,
  Visibility,
  OpenInNew,
  Add,
  KeyboardArrowDown,
  KeyboardArrowUp,
  CalendarMonth,
  Percent,
} from "@mui/icons-material";
import { IconButton, InputBase, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import {
//   openproducts,
//   setselectedProduct,
//   toggleEditproducts,
// } from "../../../redux/slices/productSlice";
// import { toggleOpenDelete } from "../../../redux/slices/itemSlice";
import { useNavigate } from "react-router-dom";

function SalesTable({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [filterQuery, setFilterQuery] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event, products) => {
    setAnchorEl(event.currentTarget);
    //update global state for selected products
    // dispatch(setselectedProduct(products));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const viewproducts = () => {
    setAnchorEl(null);
    //dispatch(openproducts());
  };
  const selectproducts = () => {
    // navigate(`/admin/dashboard/product/${selectedProduct.id}`);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function createData(id, customerName, refNo, date, totalAmount, items) {
    return {
      id,
      customerName,
      refNo,
      date,
      totalAmount,
      items,
    };
  }

  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.id.slice(0, 8).toUpperCase()}
          </TableCell>
          <TableCell align="left">{row?.customerName}</TableCell>
          <TableCell align="right">{row?.refNo || "__"}</TableCell>
          <TableCell align="right">{row?.date}</TableCell>
          <TableCell align="right">{row?.totalAmount || "__"}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Chip
                    gutterBottom
                    component="div"
                    label={`Reference: ${row.refNo}`}
                  />
                  <Chip
                    gutterBottom
                    component="div"
                    label={`Total Items Sold: ${row.items.length}`}
                    icon={<Percent />}
                  />
                  <Chip
                    gutterBottom
                    component="div"
                    label={`Date Sold: ${row.date}`}
                    icon={<CalendarMonth />}
                  />
                </div>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Product(s)</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Unit Price</TableCell>
                      <TableCell align="right">Total Price (UGX)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.items.map((itemsRow) => (
                      <TableRow key={itemsRow?.id}>
                        <TableCell>{itemsRow?.product?.name}</TableCell>
                        <TableCell>{itemsRow?.quantity}</TableCell>
                        <TableCell align="right">
                          {itemsRow?.unitPrice}
                        </TableCell>
                        <TableCell align="right">
                          {itemsRow?.totalPrice}
                        </TableCell>
                        {/* <TableCell align="right">
                          {Math.round(itemsRow.quantity * row.unitPrice * 100) /
                            100}
                        </TableCell> */}
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell scope="row" align="right" colSpan={4}>
                        Total:{" "}
                        <Typography sx={{ fontWeight: "bold" }}>
                          {10000}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Button
                  endIcon={<OpenInNew />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#0F9D58",
                    margin: 1,
                    ":hover": { backgroundColor: "#0F9D58c0" },
                  }}
                >
                  Details
                </Button>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  Row.propTypes = {
    row: PropTypes.shape({
      category: PropTypes.number.isRequired,
      carbs: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          amount: PropTypes.number.isRequired,
          customerId: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        })
      ).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      protein: PropTypes.number.isRequired,
    }).isRequired,
  };

  const rows = data.map((item) =>
    createData(
      item.id,
      item.customerName,
      item.refNo,
      item.date,
      item.totalAmount,
      item.items
    )
  );

  const filteredRows = rows.filter((row) => {
    return (
      row.customerName.toLowerCase().includes(filterQuery.toLowerCase()) ||
      row.date.toLowerCase().includes(filterQuery.toLowerCase())
      //row.modularity.toLowerCase().includes(filterQuery.toLowerCase())
      //row.productsTuition.toLowerCase().includes(filterQuery.toLowerCase()) ||
      //row.duration.toLowerCase().includes(filterQuery.toLowerCase())
    );
  });
  return (
    <Paper sx={{ width: "100%", overflow: "scroll", borderRadius: 2 }}>
      {/* <Paper
        style={{
          alignSelf: "auto",
          display: "flex",
          alignItems: "center",
          padding: 5,
          backgroundColor: "#0F9D58",
          color: "#fff",
        }}
      >
        <Search />
        <InputBase
          sx={{ ml: 2, flex: 1, color: "#fff" }}
          placeholder="Filter Products"
          inputProps={{ "aria-label": "search products " }}
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
        />
        <IconButton
          type="button"
          sx={{ p: "10px", alignSelf: "flex-end" }}
          aria-label="search"
          disabled={!filterQuery}
          onClick={() => setFilterQuery("")}
        >
          <Clear />
        </IconButton>
        <Button
          sx={{
            backgroundColor: "#0F9D58",
            ":hover": { backgroundColor: "#0F9D58c0" },
          }}
          endIcon={<Add />}
          variant="contained"
        >
          Add
        </Button>
      </Paper> */}
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table" size="small">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Sale ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell align="right">Refrence Number</TableCell>
              <TableCell align="right">Date Sold</TableCell>
              <TableCell align="right">Total Sale</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default SalesTable;
