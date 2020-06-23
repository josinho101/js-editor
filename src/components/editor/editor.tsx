import React from "react";
import CodeView from "./codeview";
import ConsoleView from "./consoleview";
import ResultView from "./resultview";
import SplitPane from "react-split-pane";

const Editor: React.FunctionComponent = () => {
  return (
    <SplitPane
      className="root-pane"
      split="vertical"
      defaultSize="70%"
      minSize={400}
      maxSize={1000}
    >
      <CodeView />
      <SplitPane
        split="horizontal"
        defaultSize={"60%"}
        minSize={200}
        maxSize={400}
      >
        <ResultView />
        <ConsoleView />
      </SplitPane>
    </SplitPane>
  );
};

export default Editor;
