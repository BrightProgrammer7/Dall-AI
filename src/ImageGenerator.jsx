"User-Agent"

import React from "react";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./ImageGenerator.css";

function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
    organization: import.meta.env.VITE_ORGANIZATION_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    setLoading(true);
    const response = await openai.createImage({
      // prompt: "a white siamese cat",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    // image_url = response.data.data[0].url;
    setLoading(false);
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
{loading ? 'LOADING' : <img className="img" src={image || ""} alt="" /> }
      
    </div>
  );
}

export default ImageGenerator;
