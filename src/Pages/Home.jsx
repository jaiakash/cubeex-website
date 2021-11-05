import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
const Home = () => {
  return (
    <Grid container spacing={0} columns={16}>
      <Grid
        item
        xs={4}
        sx={{
          backgroundImage: `url("https://wallpapercave.com/wp/wp8930920.jpg")`,
          backgroundSize: "cover",
        }}
      >
        <Container
          sx={{
            minHeight: "100vh",
            backdropFilter: "blur(9px) saturate(180%)",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            border: "1px solid rgba(209, 213, 219, 0.3)",
            boxShadow: "7px 3px 21px -3px rgba(74,73,73,0.74)",
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Container sx={{ minHeight: "100vh", background: "black" }} />
      </Grid>
    </Grid>
  );
};

export default Home;
