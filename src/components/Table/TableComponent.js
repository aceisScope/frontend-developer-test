import React from 'react';
import { Paper } from '@material-ui/core';
import TableFooter from './TableFooter';
import UserTable from './UserTable';

const TableComponent = () => {
  return (
    <Paper>
      <UserTable/>
      <TableFooter loading={false} error={true}/>
    </Paper>
  )
}

export default TableComponent;