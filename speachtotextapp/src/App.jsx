import React, { useState } from 'react'
import "./App.css"
import 'regenerator-runtime/runtime'
import useClipboard from "react-use-clipboard";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
export default function App() {
  const [texttocopy,settexttocopy]=useState();
  const [isCopied, setCopied] = useClipboard(texttocopy);
  const startlistening =()=> SpeechRecognition.startListening({ continuous: true ,language:'en-IN'})
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null
  }
  return (
    <>
    <div className="container">
      <h2>speech to text converter</h2>
      <br/>
      <p>A react hook that converts speech the microsphen too text and makes it availbele to u</p>
    <div className="main-content" onClick={()=> settexttocopy(transcript)}>
      {transcript}
    </div>
    </div>
    <div className="btn-style">
    <button onClick={setCopied}>
       {isCopied ? "Yes! 👍" : "Nope! 👎"}
    </button>
      <button onClick={startlistening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
    </div>
    </>
  )
}
