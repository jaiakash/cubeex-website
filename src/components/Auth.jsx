import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
const style = {
  width: "100%",
  height: "6.5em",
  marginTop: "2em",
  marginBottom: "2em",
  background: "blue",
  borderRadius: "10px",
  backdropFilter: "blur(9px) saturate(180%)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  overflow:"hidden"
};
const Auth = (props) => {
  return (
    <Box sx={style}>
      <Grid container columns={12}>
        <Grid item xs={5} sx={{display:"grid",placeContent:"center"}}>
          <img src={props.image||"https://img.atcoder.jp/icons/d59a98dfc912987828adf450b07ce795.jpg"} width="60px" height="60px" style={{borderRadius:"5px"}} alt=""/>
        </Grid>
        <Grid item xs={7} sx={{color:"white"}}>
          <h3 style={{marginBottom:0}}>
           {props.name|| "Jimmy Jabs"}
          </h3>
          <span>{props.authority||"Student"}</span>

        </Grid>
      </Grid>
    </Box>
  );
};

export default Auth;
