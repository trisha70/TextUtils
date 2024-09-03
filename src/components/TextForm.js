import React, {useState} from 'react'
//import Alert from './components/Alert';

export default function TextForm(props) {
    const[text,setText]=useState('');
    const handleupclick=()=>{
       let newText=text.toUpperCase();
       setText(newText);
       props.showAlert("Converting to Uppercase","success");
    }
    const handlelowclick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converting to lowercase","success");
     }
     const handleres=()=>{
      let newText="";
      setText(newText);
      props.showAlert("clear text","success");
    }
    const handlecopy=()=>{
      let text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
     } 

  return (
    <>
    <div>
        <div className="container">
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
     </div>
     <button className="btn btn-dark" onClick={handleupclick}>Convert to Uppercase</button>
     <button className="btn btn-dark mx-2" onClick={handlelowclick}>Convert to Lowercase</button>
     <button className="btn btn-dark mx-2 " onClick={handleres}>Reset</button>
     <button className="btn btn-dark mx-2 " onClick={handlecopy}>Copy Text</button>
    </div>
    </div>
    <div className="container">
        <h2>your text summary</h2>
        <p><b>There is {(text.trim().length > 0) ? text.trim().split(/\s+/).length : 0}</b> no of Words and <b>{text.replace(/\s/g, '').length}</b> no of Character </p>
        <p><b>{(text.length > 0) ? (0.008 * text.split(" ").length).toFixed(2) : 0}</b> Minutes read</p>
        <h3>Preview</h3>
        <p>{(text.length > 0) ? text : "Enter your Text to Preview it here"}</p>
    </div>
    </>
  );
}
