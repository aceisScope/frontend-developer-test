import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TableSortLabel } from '@material-ui/core';
import styled from '@emotion/styled';

const HeaderTypography = styled(Typography) `
  font-weight: 700;
`

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const UserTable = () => {
  return (
    <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <HeaderTypography variant="subtitle2">
              <TableSortLabel>
                Date
              </TableSortLabel>
            </HeaderTypography>
          </TableCell>
          <TableCell>
            <HeaderTypography variant="subtitle2">
              User ID
            </HeaderTypography>
          </TableCell>
          <TableCell>
            <HeaderTypography variant="subtitle2">
              Old Value
            </HeaderTypography>
          </TableCell>
          <TableCell>
            <HeaderTypography variant="subtitle2">
              New Value
            </HeaderTypography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell>{row.calories}</TableCell>
            <TableCell>{row.fat}</TableCell>
            <TableCell >{row.carbs}</TableCell>
            <TableCell>{row.protein}</TableCell>
          </TableRow>
        ))}
        </TableBody>
    </Table>
  </TableContainer>
  );
}

export default UserTable;