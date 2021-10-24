import React from 'react';
import api from '../lib/api';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TableComponent from './Table/TableComponent';


export const App = () => {
  return (
    <Container className="app" fixed>
      <Box data-testid="app-box" m={2}>
        <TableComponent request={api.getUsersDiff} name={"User"}/>
      </Box>
      <Box data-testid="app-box" m={2}>
        <TableComponent request={api.getProjectsDiff} name={"Projects"}/>
      </Box>
    </Container>
  );
};

export default App;
