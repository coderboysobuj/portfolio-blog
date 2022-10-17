import React, { useState } from "react";
import hljs from "highlight.js";

import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";


const modules = {
  syntax: {
    highlight: (text: string) => hljs.highlightAuto(text).value,
  },
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
    ["code-block"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",

  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const Editor: React.FC = () => {
  const [value, setValue] = useState<string>("");

  console.log(value);

  return (
    <ReactQuill
      modules={modules}
      formats={formats}
      theme="snow"
      value={value}
      onChange={setValue}
    />
  );
};

export default Editor;
