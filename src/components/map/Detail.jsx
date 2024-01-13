import React from "react";

// i am creating a components for the emojipedia
// but the component will be return in the function that is going to be pass to map function in App.js

// so this will be imported in App.js 
// then the function to be passed in map will be created
// then we pass the function to emojipedia.map(function) 

// the map function will be located where i want the data to show 

function Detail(props){
  return (
    <div className="dictionary">
   
      {/* <span className="emoji-title">emojipedia</span> */}

      <dl className="term">
        <dt className="emoji">{props.emoji}</dt>
        <dd>{props.name}</dd>

        <dt>{props.meaning}</dt>
        
      </dl>
    </div>
  )
}

export default Detail;