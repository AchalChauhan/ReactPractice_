import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handelUpperCase = () => {
    let updatedText = text.toUpperCase();
    setText(updatedText);
  };

  const handelLowerCase = () => {
    let updatedText = text.toLowerCase();
    setText(updatedText);
  };

  const handelClearText = () => {
    setText("");
  };

  const handelCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      props.showAlert("Text Copied", "success")
      console.log("text coppied");
    } catch (error) {
      props.showAlert("Failed to Copy text", "danger")
      console.log("failed to copy");
    }
  };

  const handelonChnage = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter  text here"
            value={text}
            onChange={handelonChnage}
            id="text-box"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#43434b",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handelUpperCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handelLowerCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handelClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handelCopy}>
          Copy to Clipboard
        </button>
      </div>
      <div className="container my-4">
        <h3>Text summary</h3>
        <p>
          <strong>
            {text.split(" ").filter((element)=>{return element.length != 0}).length} words,{text.length} Charaters{" "}
          </strong>
        </p>
        <p>
          <strong>{text.split(" ").filter((element)=>{return element.length != 0}).length * 0.008} Minutes to read it.</strong>
        </p>
        <h3>Preview</h3>
        <p>{text.length >0 ? text: "Enter text to preview"}</p>
      </div>
    </>
  );
}
