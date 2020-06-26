import CodeView from "./codeview";
import React, { useState } from "react";
import ErrorView from "./errorconsoleview";
import ResultView from "./resultview";
import SplitPane from "react-split-pane";
import ConsoleExtension from "../common/consoleextension";

const Editor: React.FunctionComponent = () => {
  const [result, setResult] = useState<any[]>([]);
  const [error, setError] = useState(undefined);

  const onEditorChange = (editor: any, data: any, value: string) => {
    try {
      setResult([]);
      let code = editor.getValue();
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
  };

  // add log to state
  const addLogs = (log: any) => {
    setResult((state) => [...state, log]);
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
        <CodeView onChange={onEditorChange} />
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
