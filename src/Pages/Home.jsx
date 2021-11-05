import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Tree from "../components/TreeView";
import Auth from "../components/Auth";
const Home = () => {
  return (
    <Grid container spacing={0} columns={16} >
      <Grid
        item
        xs={4}
        sx={{
          backgroundImage: `url("https://wallpapercave.com/wp/wp8930920.jpg")`,
          backgroundSize: "cover",
          overflow:'auto'
        }}
      >
        <Container
          sx={{
            minHeight: "100vh",
            backdropFilter: "blur(9px) saturate(180%)",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            border: "1px solid rgba(209, 213, 219, 0.3)",
            overflowY:'auto'
          }}
        >
          <Auth />

          <Tree />
        </Container>
      </Grid>
      <Grid item xs={12} sx={{ minHeight: "100vh", background: "black" }} >
        <Container sx={{ minHeight: "100vh", background: "black" }} />
      </Grid>
    </Grid>
  );
};

export default Home;
