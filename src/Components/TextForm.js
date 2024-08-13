import React, {useState} from 'react'

export default function TextForm(props) {
        const handleUpClick = () =>{
          let newText= text.toUpperCase();
          setText(newText);
          props.showAlert("Converted to Upper case","success");
        }
        const handleDownClick = () =>{
            let newText= text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to Lower case","success");
          }
          const handleCopy = () =>{
           let text=document.getElementById("myBox");
           text.select();
           navigator.clipboard.writeText(text.value);
           props.showAlert("Text copied to clipboard","success");
          }
          const handleClearText = () =>{
            let newText='';
            setText(newText);
            props.showAlert("Text has been cleared","success");
          }
          const handleExtraSpaces = () =>{
            let newText=text.trim().split(/[\s,\t,\n]+/).join(' ');
            setText(newText);
            props.showAlert("Extra spaces had been removed","success");
          }
        const handleOnChange=(event)=>{
           setText(event.target.value);
        }
    const [text , setText]=useState('');

  return (
  <div>
<div className="mb-3">
  <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
    <button className='btn btn-primary'onClick={handleUpClick}>Convert to upper</button>
    <button className='btn btn-primary ms-3'onClick={handleDownClick}>Convert to Lower</button>
    <button className='btn btn-primary ms-3'onClick={handleClearText}>Clear Text</button>
    <button className='btn btn-primary ms-3'onClick={handleCopy}>Copy Text</button>
    <button className='btn btn-primary ms-3'onClick={handleExtraSpaces}>Extra Spaces</button>
    <div className='container'>
        <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>Your text summary</h1>
        <p className={`text-${props.mode==='light'?'dark':'light'}`}> {text.split(" ").length} words and {text.length} characters</p>
        <p className={`text-${props.mode==='light'?'dark':'light'}`}> {0.008 * text.split(" ").length} Minutes to read</p>
        <div className="container">
        <div className="jumbotron bg-dark text-light">
  <h1 className="container">Preview</h1>
  <p className="lead">{text.length>0?text:"Enter something to preview it here"}</p>
</div>
        </div>
        </div>
        </div>

  );
}
