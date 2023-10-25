import React, { useState } from 'react'

export default function About(props) {
     
    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // }) 
    let myStyle = {
        color: props.mode === 'dark' ? 'white':'#042743',
        backgroundColor: props.mode === 'dark' ? '#042743':'white'
    }
    return (
    <div className='container' style={{color: props.mode === 'dark' ? 'white':'#042743'}}>
        <h1 className='my-2'>About Us</h1>
    <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze Your Text</strong>  
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            Uncover the true essence of your text with our powerful "Analyze Your Text" feature. From sentiment analysis to readability scores, this tool empowers you to delve deep into your written content. Whether you're refining an essay, composing a professional email, or crafting engaging social media posts, our text analysis provides valuable insights that enhance clarity, tone, and impact. Elevate your writing with precision, thanks to a comprehensive analysis that covers grammar, style, and more.    
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            Experience the full potential of text analysis without breaking the bank. Our application is committed to being "Free to Use" because we believe everyone should have access to advanced linguistic tools. Say goodbye to subscription fees or hidden charges. Enjoy unlimited access to a range of analysis features that help you refine your writing, all without any cost. Elevate your communication game without worrying about the financial aspect – it's our way of supporting your journey towards more impactful writing.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatibility</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            Seamless and accessible – our text utilities application is designed with "Browser Compatibility" in mind. Whether you prefer Chrome, Firefox, Safari, or any other modern browser, you can enjoy the full functionality of our tools without the need for downloads or installations. Our responsive design ensures that you get the same smooth experience across various devices and screen sizes. Write, analyze, and refine on the go, at your convenience, with the confidence that our application will work flawlessly across your preferred browser.
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}
