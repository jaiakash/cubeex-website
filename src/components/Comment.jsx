import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

const Comment = (props) => {
  
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        color: "white",
      }}
    >
      <Grid container columns={16}>
        <Grid
          item
          xs={2}
          sx={{ minHeight: "7em", display: "flex", justifyContent: "center" }}
        >
          <img
            src={`https://i.pravatar.cc/150?img=${(props.item.id%10)}`}
            width="50px"
            height="50px"
            style={{ borderRadius: "10px", marginTop: "15px" }}
            alt=""
          />
        </Grid>
        <Grid item xs={14} sx={{ height: "10em", color: "white" }}>
          <h4 style={{ marginBottom: 0 }}>{props.item.name}</h4>
          <p style={{ marginTop: 2 }}>{props.item.body}</p>
        </Grid>
      </Grid>
      <div style={{ width: "100%", height: "1px", backgroundColor: "grey" }}></div>
    </Box>
  );
};

export default Comment;
