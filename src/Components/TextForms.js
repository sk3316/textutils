import React, { useState } from 'react'

export default function TextForms() {
  const handleUpClick = () =>{
    // console.log(text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value)
  }
  const[text,setText]= useState("Enter text here");
  return (
    <div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example text area</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>primary button</button>
        </div>

    </div>
  )
}
