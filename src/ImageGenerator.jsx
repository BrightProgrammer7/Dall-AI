import React from "react";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./ImageGenerator.css";

function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
    // organization: 'personal-11396',
    // organization: 'org-kP8I1QdiKMtEzQcX9TT3hlnc',
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    // await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: "Say this is a test",
    //   temperature: 0,
    //   max_tokens: 7,
    // });
    const response = await openai.createImage({
      // prompt: "a white siamese cat",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    // image_url = response.data.data[0].url;
    setImage(response.data.data[0].url);
  };
  return (
    <div className="imageGenerator">
      <input className="ipt"
        type="text"
        placeholder="Type something to generate an Image.. "
        onChange={(e) => {
          setPrompt(e.target.value);
        }}
      />
      <button className="btn" onClick={generateImage}>Generate an Image</button>
      <img className="img" src={image || ""} alt="" />
    </div>
  );
}

export default ImageGenerator;
