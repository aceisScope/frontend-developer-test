import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TableSortLabel } from '@material-ui/core';
import styled from '@emotion/styled';
import { sortByDate, formatToDate } from '../../utils';

const HeaderTypography = styled(Typography) `
  font-weight: 700;
`

const UserTable = ({data = [], tableName}) => {
  const [sortOrder, setSortOrder] =  useState('desc');

  const sortedData = sortByDate(data, sortOrder);

  const sort = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
  }

  return (
    <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <HeaderTypography variant="subtitle2">
              <TableSortLabel onClick={sort} direction={sortOrder}>
                Date
              </TableSortLabel>
            </HeaderTypography>
          </TableCell>
          <TableCell>
            <HeaderTypography variant="subtitle2">
              {tableName} ID
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
        { //TODO: separate row into a component
        sortedData.map((row) => ( 
          <TableRow key={row.id}>
            <TableCell>{formatToDate(row.timestamp)}</TableCell>
            <TableCell>{row.id}</TableCell>
            <TableCell >{row.diff[0].oldValue}</TableCell>
            <TableCell>{row.diff[0].newValue}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}

export default UserTable;