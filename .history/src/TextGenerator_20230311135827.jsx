import React, { useEffect } from "react";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./TextGenerator.css";
import { db } from "./firebase";
import Output from "./Output";
import {
  onSnapshot,
  collection,
  query,
  serverTimestamp,
  addDoc,
  orderBy,
} from "firebase/firestore";
// import FlipMove from "react-flip-move";

function TextGenerator() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState([]);
  const configuration = new Configuration({
    organization: 'org-kP8I1QdiKMtEzQcX9TT3hlnc',
    apiKey: import.meta.env.VITE_Open_AI_Key,
    // organization: 'personal-11396',
  });


  // console.log(configuration);

  const openai = new OpenAIApi(configuration);

  // const generateoutput = async (e) => {
  // e.preventDefault();
  // try {

  // if (prompt.trim().length === 0) {
  //   response.status(400).json({
  //     error: {
  //       message: "Please enter a valid term",
  //     },
  //   });
  //   return;
  // }
  // if (response.statusCode  !== 200) {
  //   throw (
  //     response.data.error ||
  //     new Error(`Request failed with status  ${response.statusCode}`)
  //   );
  // }
  // console.log(response);
  // const res = response.data.choices[0].output;
  // setOutput(res);
  // setPrompt("");
  // } catch (error) {
  //   // Consider implementing an error handling logic
  //   // console.error(error);
  //   alert(error.message);
  // }
  // };

  const responseGpt = collection(db, "responses");
  const q = query(responseGpt, orderBy("timestamp", "desc"));

  useEffect(() => {
    const getoutput = onSnapshot(q, (snapshot) => {
      setOutput(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => {
      getoutput();
    };
  }, [q]);

  // Add Post
  const generateoutput = async (e) => {
    e.preventDefault();
    // alert(input)
    // const response = await openai.listModels();
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      // prompt: prompt,
      prompt: "Say this is a test",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    }, configuration);
    const res = response.data.choices[0].text;
    setOutput(res);
    // Add Data to Firebase
    addDoc(responseGpt, {
      request: prompt,
      response: res,
      timestamp: serverTimestamp(),
    });
    setPrompt("");
  };

  return (
    <div className="outputGenerator">
      <form onSubmit={generateoutput}>
        <input
          className="ipt"
          type="output"
          value={prompt}
          placeholder="Type something to generate a output.. "
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
        />
        <button type="submit" className="btn" onClick={generateoutput}>
          Generate a output
        </button>
      </form>
      {/* <p className="rps">{output || "Hello ABDELILAH, How can I help you ?"}</p> */}
      {/* <outputarea name="value" id="outputarea" cols="60" rows="10">{output || ""}</outputarea> */}
       {/* <FlipMove> */}
        {output.map(({ id, data: { request, response } }) => (
          <Output
            key={id}
            request={request}
            response={response}
          />
        ))}
      {/* </FlipMove> */}
      <Output
        request=""
        response="Hello ABDELILAH, How can I help you ?"
      />
    </div>
  );
}

export default TextGenerator;
