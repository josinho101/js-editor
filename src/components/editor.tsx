import React from "react";
import CodeView from "./codeview";
import ErrorView from "./errorview";
import ResultView from "./resultview";
import SplitPane from "react-split-pane";

const Editor: React.FunctionComponent = () => {
  return (
    <div>
      <SplitPane className="splitpane-root" split="vertical">
        <CodeView />
        <SplitPane split="horizontal">
          <ResultView />
          <ErrorView />
        </SplitPane>
      </SplitPane>
    </div>
  );
};

export default Editor;
