import React from "react";
import ViewHeader from "./viewheader";

interface Props {
  error: string | undefined;
}

const ErrorView: React.FunctionComponent<Props> = (props) => {
  return (
    <React.Fragment>
      <ViewHeader title="Error console" />
      <div className="view console">{props.error}</div>
    </React.Fragment>
  );
};

export default ErrorView;
