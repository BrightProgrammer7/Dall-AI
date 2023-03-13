import React, { useEffect } from "react";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./TextGenerator.css";
import Output from "./Output";
import FlipMove from "react-flip-move";
import { db } from "./firebase";
import {
  onSnapshot,
  collection,
  query,
  serverTimestamp,
  addDoc,
  orderBy,
} from "firebase/firestore";


function TextGenerator() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState('');
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
    // organization: 'org-kP8I1QdiKMtEzQcX9TT3hlnc',
    // organization: 'personal-11396',
  });


  // console.log(configuration);

  const openai = new OpenAIApi(configuration);


  // Add Post
  const generateOutput = async (e) => {
    e.preventDefault();
    // alert(input)
    const response;
    try {
      if (prompt.trim().length === 0) {
        response.status(400).json({
          error: {
            message: "Please enter a valid term",
          },
        });
        return;
      }
      if (response.statusCode !== 200) {
        throw (
          response.data.error ||
          new Error(`Request failed with status  ${response.statusCode}`)
        );
      }
      console.log(response);
      const res = response.data.choices[0].output;
      setOutput(res);
      setPrompt("");
    } catch (error) {
      // Consider implementing an error handling logic
      // console.error(error);
      alert(error.message);
    }

    // const response = await openai.listModels();
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      // stop: ["\n"],
    });
    const res = response.data.choices[0].text;
    setOutput(res);

  };

  return (
    <div className="outputGenerator">
      <form onSubmit={generateOutput}>
        <p className="">Hello ABDELILAH, How can I help you ?</p>
        <input
          className="ipt"
          type="text"
          // value={prompt}
          placeholder="Type something to generate a Text.. "
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
        />
        <button type="submit" className="btn" onClick={generateOutput}>
          Generate a Text
        </button>
      </form>

      <FlipMove>
        {/* {output.map(({ id, data: { request, response } }) => ( */}
        <Output
          // key={id}
          request={prompt}
          response={output}
        />
        {/* ))} */}
      </FlipMove>
      {/* <Output
        request=""
        response="Hello ABDELILAH, How can I help you ?"
      /> */}
    </div>
  );
}

export default TextGenerator;