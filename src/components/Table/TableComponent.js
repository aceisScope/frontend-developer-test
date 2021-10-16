import React, { useEffect, useState, useCallback } from 'react';
import { Paper } from '@material-ui/core';
import TableFooter from './TableFooter';
import UserTable from './UserTable';

const TableComponent = ({request, name}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchAPI = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await request();
      if (response.code === 200) {
        setData(data => [...data, ...response.data]);
        setError(false);
      } else {
        setError(response.error);
      }
    } catch (error) {
      setError('Unknown error');
    }

    setLoading(false);
  }, [request]);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  return (
    <Paper>
      <UserTable data={data} tableName={name}/>
      <TableFooter loading={loading} error={error} fetchData={fetchAPI}/>
    </Paper>
  )
}

export default TableComponent;