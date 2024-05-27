import React, { useState } from "react";
// import { textrea } from "../App";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("text changed to uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("text changed to lowercase", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("text coppied", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#191818",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="12"
          ></textarea>
        </div>
        <div>
          <button
            className={`btn btn-outline-${
              props.mode === "light" ? "dark" : "light"
            } type="submit mx-1 my-1`}
            onClick={handleUpClick}
            disabled={text.length === 0}
          >
            Convert to UpperCase
          </button>
          <button
            className={`btn btn-outline-${
              props.mode === "light" ? "dark" : "light"
            } type="submit mx-1 my-1`}
            onClick={handleLoClick}
            disabled={text.length === 0}
          >
            Convert to Lower Case
          </button>

          <button
            className={`btn btn-outline-${
              props.mode === "light" ? "dark" : "light"
            } type="submit mx-1 my-1`}
            onClick={handleExtraSpaces}
            disabled={text.length === 0}
          >
            Remove Extra Spaces
          </button>
          <button
            className={`btn btn-outline-${
              props.mode === "light" ? "dark" : "light"
            } type="submit mx-1 my-1`}
            onClick={handleCopyClick}
            disabled={text.length === 0}
          >
            Copy Text
          </button>
          <button
            className={`btn btn-outline-${
              props.mode === "light" ? "dark" : "light"
            } type="submit mx-1 my-1`}
            onClick={handleClearClick}
            disabled={text.length === 0}
          >
            Clear
          </button>
        </div>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your text summry</h1>
        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => element.length !== 0)
              .length}{" "}
          Minutes read
        </p>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Preview Here</h1>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box above to Preview it here"}
        </p>
      </div>
    </>
  );
}
