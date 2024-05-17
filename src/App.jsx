import { useState} from "react";
import './App.css'
import axios from 'axios';
import { Nav } from '../src/Components/Nav'; 
import MDEditor from '@uiw/react-md-editor';
function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  async function myyanswer(e) {
    e.preventDefault();
    setAnswer("Processing...");
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyApW-_pY_kxDDADZkgYasXEl7cSchzegQQ",
        method: "post",
        data: {
          contents: [
            { parts: [{ text: question }] },
          ],
        },
      });
      setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
    }
    catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }
  }
  return (
    <>
    <Nav/>
    <div className="text-center text-3xl font-bold leading-none tracking-tight p-7">
       <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-300"> Welcome to the Chat!</span>
    </div>
      <section className=''>
        <textarea className="bg-purple-100" value={question} onChange={(e) => setQuestion(e.target.value)} cols="100" rows="10" placeholder="Drop in your question!"></textarea>
      </section>
      <section className="py-5">
      <button className="bg-purple-300 hover:bg-purple-400 font-bold py-2 px-4 rounded-full disabled" onClick={myyanswer}>Fetch My Answer
      </button>
      </section>
      <div className="overflow-y-auto h-64 py-10">
      <article className='text-center sm:text-left sm:text-wrap leading-1'>
        <MDEditor.Markdown source={answer} style={{ whiteSpace: 'pre-wrap', padding: 16 }} />
      </article>
      </div>
    </>
  );
}
export default App
