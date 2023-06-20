import React, { useState } from 'react'

export default function TextForms() {
  const handleUpClick = () =>{
    // console.log(text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = () =>{
    // console.log(text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = () =>{
    // console.log(text);
    let newText = " ";
    setText(newText)
  }
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value)
  }
  const[text,setText]= useState("Enter text here");
  return (
  
    <>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example text area</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
        
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button>
        
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Lowercase</button>

        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        
      <div className="container">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
   
    </>
  )
}
