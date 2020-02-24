import React, {
  Component
} from "react";
import "./style.css";
import PropTypes from 'prop-types';

function Card(props) {
  return ( <
    span onClick = {
      () => props.clickedCards(props.id)
    }
    className = "card" >
    <
    div className = "img-container" >
    <
    img alt = {
      props.title
    }
    src = {
      props.image
    }
    /> <
    /div> <
    /span>
  );
}


export default Card;