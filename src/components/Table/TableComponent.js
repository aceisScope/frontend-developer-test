import React from 'react';
import { Paper } from '@material-ui/core';
import TableFooter from './TableFooter';
import UserTable from './UserTable';

const TableComponent = () => {
  return (
    <Paper>
      <UserTable/>
      <TableFooter/>
    </Paper>
  )
}

export default TableComponent;