import React from "react";
import Avatar from "./Avatar";


function Card(props){
  return (
    <div>
    <h2>{props.id}</h2>
      <h2>{props.name}</h2>
      <Avatar img={props.img} />
      <p>{props.tel}</p>
      <p>{props.email}</p>

    </div>
  )
}

function Header(props){
  return (
    <h1>{props.title}</h1>
  )
}

export default Card;
export {Header}