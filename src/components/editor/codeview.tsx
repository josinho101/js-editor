import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import ViewHeader from "./viewheader";

require("codemirror/lib/codemirror.css");
require("codemirror/theme/material.css");
require("codemirror/mode/javascript/javascript.js");

interface Props {
  onChange: (editor: any, data: any, value: string) => void;
}

const CodeView: React.FunctionComponent<Props> = (props) => {
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
        onChange={props.onChange}
      />
    </React.Fragment>
  );
};

export default CodeView;
