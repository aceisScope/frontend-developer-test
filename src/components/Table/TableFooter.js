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

const TableFooter = ({loading, error, fetchData}) =>{
  return (
    <FooterBox>
      <Grid container direction="column" alignItems="center">
        { error && (
          <Grid item>
            <FooterTypography color="error" id="error-text">
              We had problems fetching your data. Please try again.
            </FooterTypography>
          </Grid>
          )
        }
        { loading ? (
          <Grid item>
            <CircularProgress/>
          </Grid>
          ) : (
          <Grid item>
            <Button color="primary" variant="contained" onClick={fetchData}>{error ? "Retry" : "Load More"}</Button>
          </Grid>
          )
        }
      </Grid>
    </FooterBox>
  )
}

export default TableFooter;

