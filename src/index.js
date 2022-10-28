import React from "react";
import { createRoot } from "react-dom/client";

const name = "Rati";
const currentDate = new Date();
const year = currentDate.getFullYear();

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "blue";

createRoot(document.getElementById("root")).render(
  <div>
    <h1 style={customStyle}>Favourite Food</h1>
    <p style={{ color: "red" }}>Check the styling</p>
    <img
      src="https://i.pinimg.com/736x/ce/d8/81/ced881cfeb57c5380898ab1dce78cba1.jpg"
      alt=""
    />
    <img
      src="https://www.secondrecipe.com/wp-content/uploads/2020/05/paneer-biryani-720x692.jpg"
      alt=""
    />
    <img
      src="https://www.thechaipress.com/wp-content/uploads/2017/08/Palak-Paneer.jpg"
      alt=""
    />

    <p className="heading" contentEditable="true" spellCheck="false">
      Created By {name}
    </p>
    <p>Copyright {year}</p>
  </div>
);

//<---------JavaScript expressions in jsx---------->//

// const fname = "jack";
// const lname = "bro";

// const number = 7;

// ReactDOM.render(
//   <div>
//     <h1>Hello {fname + " " + lname}!</h1>
//     <p>Lucky number is {number}.</p>
//   </div>,
//   document.getElementById("root")
// );

//<-------------Html tags via dom----------->//

// ReactDOM.render(
//   <div>
//     <h1>My Favourite Foods</h1>
//     <ul>
//       <li>Paneer</li>
//       <li>Dum Aaloo</li>
//       <li>Biryani</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );
