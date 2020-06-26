import React from "react";
import ViewHeader from "./viewheader";

interface Props {
  result: any[];
}

const ResultView: React.FunctionComponent<Props> = (props) => {
  const getLogElements = () => {
    if (props.result && props.result.length > 0) {
      return props.result.map((item) => {
        return <p>{item}</p>;
      });
    }

    return null;
  };

  return (
    <React.Fragment>
      <div className="view-wrapper">
        <ViewHeader title="Result" />
        <div className="view result">{getLogElements()}</div>
      </div>
    </React.Fragment>
  );
};

export default ResultView;
