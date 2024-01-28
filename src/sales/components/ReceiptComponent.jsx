// ReceiptComponent.jsx

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const ReceiptComponent = ({ items }) => {
  return (
    <div>
      <Typography variant="h6">Summary of the Sale</Typography>
      <TableContainer component={Paper} style={{ marginTop: '1rem' }}>
        <Table size='small' sx={{fontSize: 10}}>
          <TableHead>
            <TableRow>
              <TableCell>Product </TableCell>
              <TableCell>Batch</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell align="right">QTY</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item?.product?.name}</TableCell>
                <TableCell>{item?.product?.category?.batch?.name}</TableCell>
                <TableCell>{item?.product?.quantity-item?.quantity}</TableCell>
                <TableCell align="right">{item?.quantity}</TableCell>
                <TableCell align="right">{item?.unitPrice * item?.quantity}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={4} align="right">Total</TableCell>
              <TableCell align="right">{items.reduce((total, item) => total + item.unitPrice * item.quantity, 0)}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ReceiptComponent;
