import React from "react";

export default function About(props) {
  // const [mystyle, setmystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  //   border: "1px solid black",
  // });

  // const [btntext, setbtntext] = useState("Enable Light Mode");

  // const toggleStyle = () => {
  //   if (mystyle.color === "white") {
  //     setmystyle({
  //       color: "black",
  //       backgroundColor: "white",
  //       border: "1px solid black",
  //     });
  //     setbtntext("Enable Dark Mode");
  //   } else {
  //     setmystyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid black",
  //     });
  //     setbtntext("Enable Light Mode");
  //   }
  // };
  // const [text, setText] = useState("");
  let mystyle = {
    color: props.mode === "dark" ? "white" : "#191818",
    backgroundColor: props.mode === "dark" ? "#191818" : "white",
  };
  let ourstyle = {
    color: props.mode === "dark" ? "white" : "#191818",
    backgroundColor: props.mode === "dark" ? "rgb(59, 57, 57)" : "white",
    border: "1px solid",
    borderColor: props.mode === "dark" ? "rgb(72, 71, 71)" : "#191818",
  };
  let yourstyle = {
    color: props.mode === "dark" ? "white" : "#191818",
    backgroundColor: props.mode === "dark" ? "rgb(48, 46, 46)" : "white",
    border: "1px solid",
    borderColor: props.mode === "dark" ? "rgb(72, 71, 71)" : "#191818",
  };

  return (
    <div className="container" style={mystyle}>
      {/* <h1>Preview Here</h1> */}
      <div className="container my-2">
        {/*<p>
          {text.length > 0
            ? text
            : "Enter something in the text box above to Preview it here"}
        </p> */}
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" style={mystyle}>
              <button
                className="accordion-button my-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={yourstyle}
              >
                Analyse Your Text
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={ourstyle}>
                Here you can analise your text
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed my-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={yourstyle}
              >
                Free to use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={ourstyle}>
                its free to use
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed my-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={yourstyle}
              >
                Browser Compatible
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={ourstyle}>
                you can use it on you phone and pc both
              </div>
            </div>
          </div>
        </div>
        {/* <button
          onClick={toggleStyle}
          type="button"
          className="btn btn-outline-light"
          style={mystyle}
        >
          {btntext}
        </button> */}
      </div>
    </div>
  );
}
