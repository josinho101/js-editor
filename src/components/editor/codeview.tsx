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

  const getHeaderControls = () => {
    let playButton = (
      <button type="button" className="codeview-controls" title="Execute">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M8 5v14l11-7z" fill="#51de51" className="playbtn" />
        </svg>
        Play
      </button>
    );

    let formatButton = (
      <button type="button" className="codeview-controls" title="Format code">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="15"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"
            fill="white"
          />
        </svg>
        &nbsp;Fromat
      </button>
    );

    return [playButton, formatButton];
  };

  return (
    <React.Fragment>
      <ViewHeader title="JavaScript" controls={getHeaderControls()} />
      <CodeMirror
        className="codemirror-wrapper"
        options={options}
        onChange={props.onChange}
      />
    </React.Fragment>
  );
};

export default CodeView;
