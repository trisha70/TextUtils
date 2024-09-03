import React, { useState } from "react";

export default function About() {
    const [myStyle,setMyStyle]=useState({
         color:'black',
        backgroundColor:'white'
    })
    const[btnText,setBtnText]=useState("Enable dark mode");
    const toggleStyle=()=>{
        if(myStyle.color==='black'){
           setMyStyle({
            color:'white',
            backgroundColor:'black'
           })
           setBtnText("Enable light Mode");
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor:'white',
                border:'2px solid white'
               })
               setBtnText("Enable dark mode");      
        }
    }
    
  return (
    <div className="container"style={myStyle}>
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button" 
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             About TextUtils
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>TextUtils is a versatile text manipulation tool designed to make editing text simple and efficient. Whether you're preparing content for a document, coding, or just need to format some text, TextUtils offers a variety of features to meet your needs:</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             Features of TextUtils
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Uppercase Conversion: Instantly transform all the text into uppercase letters, ideal for titles or emphasis.

Lowercase Conversion: Easily convert all the text to lowercase, perfect for standardizing text formats.

Reset Text: Clear the text input with a single click, allowing you to start fresh without manual deletion.

Copy to Clipboard: Quickly copy the formatted text to your clipboard, ready to be pasted wherever you need it.

Dark/Light Mode Toggle: Switch between a dark mode for a comfortable viewing experience in low-light environments and a light mode for bright conditions, ensuring a user-friendly interface at all times.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Conclusion
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>TextUtils is built to be user-friendly, providing all the essential tools you need to manipulate text effectively, all within a simple and clean interface.</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      <button onClick={toggleStyle} type="button" className="btn btn-outline-primary my-3">{btnText}</button>
      </div>
    </div>
  );
}
