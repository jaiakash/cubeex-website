import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import {withRouter } from "react-router"
const User = (props) => {
  
  return (
      <Grid item xs={12} sx={{ minHeight: "100vh", background: "black" }} >
        <Container sx={{ minHeight: "100vh", background: "black",color:"white" }} >
         {props.match.params.id}
        </Container>
      </Grid>

  );
};

export default withRouter(User);
