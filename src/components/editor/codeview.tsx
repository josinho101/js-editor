import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import ViewHeader from "./viewheader";

require("codemirror/lib/codemirror.css");
require("codemirror/theme/material.css");
require("codemirror/mode/javascript/javascript.js");

const CodeView: React.FunctionComponent = () => {
  let options = {
    mode: "javascript",
    theme: "material",
    lineNumbers: true,
  };

  return (
    <React.Fragment>
      <ViewHeader title="JavaScript" />
      <CodeMirror
        className="codemirror-wrapper"
        options={options}
        onChange={(editor, data, value) => {
          try {
            let d = editor.getValue();
            let val = eval(d);
            console.log(val);
          } catch (e) {
            console.error(e);
          }
        }}
      />
    </React.Fragment>
  );
};

export default CodeView;
