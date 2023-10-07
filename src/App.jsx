import { useState, useEffect } from 'react'
import { BsFillMicFill } from 'react-icons/bs';
import './App.css'

function App() {
  const [text, setText] = useState("text");
  const [utterance, setUtterance] = useState(null);
  const [volume, setVolume] = useState("0.5");

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    console.log(volume);
    u.volume = volume;
    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [text, volume]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    synth.speak(utterance);

  };
  return (
    <>
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <button onClick={handlePlay}><BsFillMicFill size="40px" /></button>
        <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Speech Narrator</h5>
        </a>
        <div>
            <p className=" w-64 mb-3 font-normal text-gray-500 dark:text-gray-400 break-words">{text}</p>
        </div>
        <label htmlFor="small-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Volume - {volume}</label>
        <input id="small-range" type="range" step=".1" defaultValue={volume} onChange={(e)=>setVolume(e.target.value)} max="2" min=".5" className="w-48 h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"></input>
    </div>
    <textarea id="message" rows="4" onChange={(e)=>setText(e.target.value)} className="mt-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your text here..."></textarea>

    </>
  )
}

export default App
