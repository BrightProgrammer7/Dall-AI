import React, { useEffect } from "react";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./TextGenerator.css";
import Output from "./Output";
// import FlipMove from "react-flip-move";
// import { db } from "./firebase";
// import {
//   onSnapshot,
//   collection,
//   query,
//   serverTimestamp,
//   addDoc,
//   orderBy,
// } from "firebase/firestore";


function TextGenerator() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState('');
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
    organization: import.meta.env.VITE_ORGANIZATION_KEY,
  });


  // console.log(configuration);

  const openai = new OpenAIApi(configuration);


  // Add Post
  const generateOutput = async (e) => {
    e.preventDefault();

    // const response = await openai.listModels();
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 200,
      top_p: 1.0,
      n: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stream: false,
      logprobs: null,
      // stop: ["\n"],
    });
    const res = response.data.choices[0].text;
    setOutput(res);

    // const response = await openai.ChatCompletion.create({
    //   model: "gpt-3.5-turbo",
    //   // prompt: prompt,
    //   messages: [{"role": "user", "content": prompt}],
    //   prompt: [
    //     {"role": "system", "content": `You are chatting with an AI with ${req.session.personality} personality.`},
    //     {"role": "user", "content": `Hello, my name is ${req.session.name}.`}
    //   ].join('\n'),
    //   temperature: 0.5,
    //   maxTokens: 500,
    // })
    // .then(function(response) {
    //   const res = response.choices[0].message.content.trim();
    //   setOutput(res);
    // })
    // .catch(function(error) {
    //   console.error(error);
    // });
    // const bot = response.choices[0].message.content.trim();
    // response.session.prompt += `${bot}`;
    // twiml.message(bot);
    // const res = response.type('text/xml').send(twiml.toString());
    // console.log(response);
    // const res = response.choices[0].message.content;
    // setOutput(res);
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

      {/* <FlipMove> */}
      {/* {output.map(({ id, data: { request, response } }) => ( */}
      <Output
        // key={id}
        // request={prompt}
        response={output}
      />
      {/* ))} */}
      {/* </FlipMove> */}
    </div>
  );
}

export default TextGenerator;
