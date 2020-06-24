import React from "react";
import ViewHeader from "./viewheader";

const ResultView: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <div className="view-wrapper">
        <ViewHeader title="Result" />
        <div className="view result"></div>
      </div>
    </React.Fragment>
  );
};

export default ResultView;
