import React from "react";
import ViewHeader from "./viewheader";

interface Props {
  result: string | undefined;
}

const ResultView: React.FunctionComponent<Props> = (props) => {
  return (
    <React.Fragment>
      <div className="view-wrapper">
        <ViewHeader title="Result" />
        <div className="view result">{props.result}</div>
      </div>
    </React.Fragment>
  );
};

export default ResultView;
