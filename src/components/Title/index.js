import React from "react";
import "./style.css";

function Title(props) {
  return <div className = "title alert alert-danger" >
    <
    div >
    <
    div className = "container-fluid" >
    <
    h1 className = "badge badge-primary" > Score: {
      props.score
    } < /h1> <
    /div> <
    div >
    <
    h1 className = "badge badge-primary" > Top Score: {
      props.topScore
    } < /h1> <
    /div> <
    /div> <
    /div>;
}

export default Title;