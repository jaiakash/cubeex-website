import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { withRouter } from "react-router-dom";
import Comment from "./Comment";
import Loading from "./Loading";
const ContainerStyle = {
  height: "100vh",
  width: "100%",
  background: "black",
  position: "relative",
  overflow: "auto",
};
const LoadingStyle = {
  ...ContainerStyle,
  display: "grid",
  placeContent: "center",
};
const style1 = { ...ContainerStyle, color: "white", marginBottom: 0 };
const MailDescription = (props) => {
  const [mailDescription, setMailDescription] = useState(null);
  const [comments, setComments] = useState(null);
  useEffect(() => {
    FetchData();
    //eslint-disable-next-line
  }, []);
  const FetchData = async () => {
    const id = props.match.params.id;
    const post = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post_data = await post.json();

    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();
    setMailDescription(post_data);
    setComments(data);
  };
  return mailDescription && comments ? (
    <Grid item xs={12} sx={ContainerStyle}>
      <Container sx={style1}>
        <Box
          sx={{
            width: "100%",
            height: "9em",
            position: "relative",
          }}
        >
          <Grid container columns={16}>
            <Grid
              item
              xs={2}
              sx={{
                height: "9em",
              }}
            >
              <img
                src={`https://i.pravatar.cc/150?img=${mailDescription.id % 10}`}
                width="100px"
                height="100px"
                style={{ borderRadius: "5px", marginTop: "15px" }}
                alt=""
              />
            </Grid>
            <Grid item xs={14} sx={{ height: "9em" }}>
              <h2 style={{ marginBottom: 0 }}>Author</h2>
              <span style={{ fontSize: "13px", marginTop: 0 }}>sdhaoh</span>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ width: "100%" }}>
          <h3>Shikhar Gupta</h3>
          <p> {mailDescription.body}</p>
          <h4>Thankyou,regards</h4>
          <p>{mailDescription.title}</p>
        </Box>
        <Container sx={{ ...style1, height: "fit-content" }}>
          { 
             comments.map((item, index) =>(<Comment key={index} item={item} />))
         
          }
        </Container>
      </Container>
    </Grid>
  ) : (
    <Grid item xs={12} sx={LoadingStyle}>
      <Loading />
    </Grid>
  );
};

export default withRouter(MailDescription);
