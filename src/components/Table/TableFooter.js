import React from 'react';
import { Button, CircularProgress, Typography, Box, Grid } from '@material-ui/core';
import styled from '@emotion/styled';

const FooterBox = styled(Box)`
  justify-content: center;
  padding: 10px;
`

const FooterTypography = styled(Typography)`
  text-align: center;
  padding: 15px;
`

const TableFooter = () =>{
  return (
    <FooterBox>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <FooterTypography color="error">
            We had problems fetching your data. Please try again.
          </FooterTypography>
        </Grid>
        <Grid item>
          <CircularProgress/>
        </Grid>
        <Grid item>
          <Button color="primary" variant="contained">Load More</Button>
        </Grid>
      </Grid>
    </FooterBox>
  )
}

export default TableFooter;

