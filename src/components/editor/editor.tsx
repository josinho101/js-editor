import CodeView from "./codeview";
import React, { useState } from "react";
import ErrorView from "./errorconsoleview";
import ResultView from "./resultview";
import SplitPane from "react-split-pane";
import ConsoleExtension from "../common/consoleextension";

var beautify = require("js-beautify").js;

const Editor: React.FunctionComponent = () => {
  const [result, setResult] = useState<any[]>([]);
  const [error, setError] = useState(undefined);
  const [code, setCode] = useState("");

  // add log to state
  const addLogs = (log: any) => {
    setResult((state) => [...state, log]);
  };

  const onFormatClick = (code?: string) => {
    if (code) {
      let formatted = beautify(code, {
        indent_size: 2,
        space_in_empty_paren: true,
      });
      setCode(formatted);
    }
  };

  const onCodeChange = (data?: string) => {
    if (data) {
      setCode(data);
      try {
        // eval(data);
        // setError(undefined);
      } catch (e) {
        //setError(e.message);
      }
    }
  };

  const onExecuteClick = (code?: string) => {
    if (code) {
      try {
        setResult([]);
        setCode(code);
        let result = eval(code);
        if (
          result &&
          typeof result !== "function" &&
          typeof result !== "object"
        ) {
          addLogs(result);
        }
        setError(undefined);
      } catch (e) {
        setError(e.message);
      }
    }
  };

  const onClearClick = () => {
    setCode("");
    setResult([]);
  };

  return (
    <React.Fragment>
      <ConsoleExtension addLogs={addLogs} />
      <SplitPane
        className="root-pane"
        split="vertical"
        defaultSize="70%"
        minSize={400}
        maxSize={1000}
      >
        <CodeView
          code={code}
          onCodeChange={onCodeChange}
          onClearClick={onClearClick}
          onFormatClick={onFormatClick}
          onExecuteClick={onExecuteClick}
        />
        <SplitPane
          split="horizontal"
          defaultSize={"60%"}
          minSize={200}
          maxSize={400}
        >
          <ResultView result={result} />
          <ErrorView error={error} />
        </SplitPane>
      </SplitPane>
    </React.Fragment>
  );
};

export default Editor;
