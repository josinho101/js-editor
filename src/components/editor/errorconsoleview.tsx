import React from "react";
import ViewHeader from "./viewheader";

const ErrorView: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <ViewHeader title="Error console" />
      <div className="view console"></div>
    </React.Fragment>
  );
};

export default ErrorView;
