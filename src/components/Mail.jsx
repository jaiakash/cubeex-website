import React from "react";
import { withRouter } from "react-router-dom"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
const style = {
  width: "100%",
  height: "6.5em",
  marginTop: "2em",
  marginBottom: "2em",
  borderRadius: "10px",
  backgroundColor: "#2f3030",
  overflow: "hidden",
  textTransform: "capitalize"
};
const Mail = (props) => {
    const handleClick=()=>{
        props.history.push(`/mail/${props.item.id}`);
      }
  return (
    <Box sx={style} onClick={handleClick} >
      <Grid container columns={16} spacing={1}>
        <Grid
          item
          xs={2}
          sx={{
            height: "7em",
            display: "grid",
            placeContent: "center",
          }}
        >
          <img
            src={`https://i.pravatar.cc/150?img=${props.item.id%10}`}
            width="70px"
            height="70px"
            style={{ borderRadius: "5px" }}
            alt=""
          
          />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ display: "flex", flexDirection: "column", height: "7em" }}
        >
          <h3 style={{ marginBottom: 0, marginTop: 9 }}>{props.item.title}</h3>
          <span style={{ marginBottom: 0, marginTop: 4, fontSize: "15px" }}>
            {props.item.title}
          </span>
          <p
            style={{
              marginTop: 7,
              opacity: 0.5,
              textOverflow: "ellipsis",
              fontSize: "13px",
            }}
          >
            {props.item.body}
          </p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default withRouter(Mail);
