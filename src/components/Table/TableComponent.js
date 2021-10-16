import React from 'react';
import { Paper } from '@material-ui/core';
import TableFooter from './TableFooter';
import UserTable from './UserTable';
import { usersDiff } from '../../lib/api/data'

const TableComponent = () => {
  return (
    <Paper>
      <UserTable data={usersDiff} tableName={"Projects"}/>
      <TableFooter loading={false} error={true}/>
    </Paper>
  )
}

export default TableComponent;