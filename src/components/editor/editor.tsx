import CodeView from "./codeview";
import React, { useState } from "react";
import ErrorView from "./errorconsoleview";
import ResultView from "./resultview";
import SplitPane from "react-split-pane";
import ConsoleExtension from "../common/consoleextension";

const Editor: React.FunctionComponent = () => {
  const [result, setResult] = useState(undefined);
  const [error, setError] = useState(undefined);

  const onEditorChange = (editor: any, data: any, value: string) => {
    try {
      let code = editor.getValue();
      let result = eval(code);
      if (typeof result !== "function" && typeof result !== "object") {
        setResult(result);
      }
      setError(undefined);
    } catch (e) {
      //setResult(undefined);
      setError(e.message);
    }
  };

  return (
    <React.Fragment>
      <ConsoleExtension />
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
