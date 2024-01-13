import React from "react";
// import List from "./List";
import List from "./List";
function Item(props){
  return (
<div  className="item-style card">
  <img src="https://picsum.photos/200" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Information about something</h5>
    <p className="card-text">Some quick example text to say something about the image down</p>
  </div>
  {/* make this ul list a component to be reuse  */}
  <ul className="list-group list-group-flush">
    <List item={props.itemone} />
    <List item={props.itemtwo} />
    <List item={props.itemthree} />
  </ul>
  <div className="card-body">
    <a href="google.com" className="card-link">Card link</a>
    <a href={props.link} className="card-link">Another link</a>
  </div>
</div>
  )
}

export default Item;