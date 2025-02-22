import React from "react";
import {useRef} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

/**
 * A functional component that renders a text editor
 * using the React Quill library.
 *
 * @param {object} props - The component props.
 * @param {string} props.value - The initial value of the editor.
 * @param {function} props.onChange - A callback that is called
 *   when the value of the editor changes.
 * @returns {JSX.Element} The component.
 */
function TextEditor({value, onChange}) {
  const quillRef = useRef(null);
  /**
   * An array of objects representing the toolbar options.
   * Each object must contain at least one property with a valid
   * value type. The property name determines the type of the
   * toolbar item.
   */
  const tooBarOptions = [
    [
      "bold", // toggled buttons
      "italic",
      "underline",
    ],
    ["blockquote", "code-block"],
    ["link", "formula"],
    [{list: "ordered"}, {list: "bullet"}, {list: "check"}],
    [{script: "sub"}, {script: "super"}], // superscript/subscript
    [{indent: "-1"}, {indent: "+1"}], // outdent/indent

    [{header: [1, 2, 3, 4, 5, 6, false]}],

    [{color: []}, {background: []}], // dropdown with defaults from theme
    [{font: []}],
    [{align: []}],
  ];

  return (
    <ReactQuill
      ref={quillRef}
      theme="snow"
      modules={{toolbar: tooBarOptions}}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextEditor;