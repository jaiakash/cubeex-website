import React,{useState,useEffect}from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import {withRouter } from "react-router"
import Mail from "../components/Mail"
import Loading from "../components/Loading"
const style1={ height: "100vh", background: "black",color:"white",position:"relative",overflowY: "auto" }
const ContainerStyle={ minHeight: "100vh", background: "black" ,position:"relative",overflow: "auto"}

const User = (props) => {
  const [userMails,setMails]=useState(null);
  useEffect(()=>{
    FetchData();
  },[]);
  const FetchData=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts");
    const data=await res.json();

    setMails(data);
  }
  return userMails?(
      <Grid item xs={12} sx={ContainerStyle} >
        <Container sx={style1} >
        <h1 style={{textAlign:"center"}}> {props.match.params.id} </h1>
         {
           userMails.map((item,index)=>{console.log(item);return <Mail key={index} item={item}  />}) 
         }
        </Container>
      </Grid>

  ):( <Grid item xs={12} sx={{...ContainerStyle, display:"grid",placeContent: "center"}} ><Loading /></Grid>);
};

export default withRouter(User);
