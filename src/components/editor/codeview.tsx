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
          viewBox="0 0 24 24"
          fill="white"
          width="18px"
          height="18px"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M3 19h18v2H3zM3 7h12v2H3zm0-4h18v2H3zm0 12h12v2H3zm0-4h18v2H3z" />
        </svg>
        &nbsp;Fromat
      </button>
    );

    let deleteButton = (
      <button type="button" className="codeview-controls" title="Clear code">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M8 9h8v10H8z" opacity=".3" />
          <path
            d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"
            fill="white"
          />
        </svg>
        Clear
      </button>
    );

    return [playButton, formatButton, deleteButton];
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
