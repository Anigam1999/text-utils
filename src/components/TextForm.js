import React, {useState} from 'react'
export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")    
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")    
    }
    const handleClearClick = () => {
        setText("")
        props.showAlert("Text Cleared!", "success")    
    }
    const handleReverseClick = () => {
        let newText = text.split('').reverse().join('');
        setText(newText)
        props.showAlert("Text Reversed!", "success")    
 
    }
    const copyText = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Text copied to Clipboard!", "success")    
    }
    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces handled!", "success")    
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return ( 
    <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>Reverse Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Handle Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text===""?0:text.trim().split(/\s+/).length} words, {text.length} characters</p>
            <p>{text===""?0:text.trim().split(' ').length*0.008} to read.</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        </div>
    </>
  )
}
