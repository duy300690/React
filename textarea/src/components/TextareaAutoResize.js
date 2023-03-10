import React, { useEffect, useRef, useState } from "react";

const TextareaAutoResize = () => {
  const [text, setText] = useState();
  const textareaRef = useRef();
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");
  const handleChange = (event) => {
    console.log(event.target.value);
    setTextareaHeight("auto");
    setText(event.target.value);
  };
  useEffect(() => {
    setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
    setParentHeight(`${textareaRef?.current?.scrollHeight}px`);
  }, [text]);
  return (
    <div
      className="p-5"
      style={{
        minHeight: parentHeight,
      }}
    >
      <textarea
        className="transition-all overflow-hidden w-full max-w-[400px] p-5 rounded-lg border border-gray-300 focus:border-blue-400 resize-none"
        placeholder="Please enter your content..."
        value={text}
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextareaAutoResize;
