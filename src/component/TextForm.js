import React,{useState} from 'react';


export default function TextForm(props) {
  

const handleUpClick=()=>{
   // console.log("Uppercase Was Clicked"+ text);
    let newText = text.toUpperCase();

    setText(newText)
}
    const handleLoClick=()=>{
      //  console.log("Lowercase Was Clicked"+ text);
        let newText = text.toLowerCase();
    
        setText(newText)
}
const handleClearClick=()=>{
   let newText = '';

    setText(newText)
}
const downloadTxtFile=()=>{
const element = document.createElement("a");
const file =new Blob([text],{type:"text/plain"});
element.href =  URL.createObjectURL(file);
element.download = "myFile.txt";
element.click();

}
const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);
}

const[text,setText] = useState('');
// setText=("new Text");
  return (
  <>
  <div className="container">
      <h1>{props.heading}</h1>
    <div className="mb-3">
 
        <textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
         <button className="btn btn-primary mx-1"onClick={handleUpClick}>Convert To Upper Case</button>
         <button className="btn btn-primary mx-1"onClick={handleLoClick}>Convert To Lower Case</button>
         <button className="btn btn-primary mx-1"onClick={handleClearClick}>Clear Text</button>
         <button className="btn btn-primary mx-l"onClick={downloadTxtFile}>Download File</button>
    
    </div>
    <div className = "container my-3">
        <h2>Your Text Summery</h2>
        <p>{text.split(" ").length} Words And {text.length} Character</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    
    </>
  )
}
