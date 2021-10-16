import React, { useEffect, useState, useCallback } from 'react';
import { Paper } from '@material-ui/core';
import TableFooter from './TableFooter';
import UserTable from './UserTable';

const TableComponent = ({request, name}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const fetchAPI = useCallback(async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await request();
      if (response.code === 200) {
        setData(data => [...data, ...response.data]);
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  });

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <Paper>
      <UserTable data={data} tableName={name}/>
      <TableFooter loading={loading} error={error} fetchData={fetchAPI}/>
    </Paper>
  )
}

export default TableComponent;