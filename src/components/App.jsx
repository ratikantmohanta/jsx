import Heading from "./Heading";
import Images from "./Images";

const name = "Rati";
const currentDate = new Date();
const year = currentDate.getFullYear();

const customStyle = {
    color: "red",
    fontSize: "20px",
    border: "1px solid black"
};

customStyle.color = "blue";



export default function App() {
    return <div>
        <div style={customStyle}>
            <Heading />
        </div>
        <p style={{ color: "red" }}>Check the styling</p>

        <Images />

        <p className="heading" contentEditable="true" spellCheck="false">
            Created By {name}
        </p>
        <p>Copyright {year}</p>
    </div>
};

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
