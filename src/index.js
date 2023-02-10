import React from "react";
import ReactDOM from "react-dom";



function Card (props){
  return <div>
     <h2>{props.name}</h2>
 <img src={props.img}/>
<p>{props.tel}</p>
<p>{props.email}</p>
  </div>
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
<Card  name="beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" tel="123 456 789" email="b@beyonce.com"/>
 <input id="fName"  />
 
  
  
<Card  name="shakira" img="https://scontent.flis8-1.fna.fbcdn.net/v/t39.30808-6/312176451_691037719052640_6952748126994168923_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=vHqdKiAA81UAX96EdWH&_nc_ht=scontent.flis8-1.fna&oh=00_AfCHS5JuvV90pVX4dCpEIsxmUFX3hyefApYg8rjIVG-R6Q&oe=63EC60B4" email="byt@beyonce.com"/>
 <input id="fDoble"  />
  </div>
  ,
  document.getElementById("root")
);
