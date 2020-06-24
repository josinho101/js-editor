import React from "react";

interface Props {
  title: string;
}

const ViewHeader: React.FunctionComponent<Props> = (props) => {
  return <div className="viewHeader">{props.title}</div>;
};

export default ViewHeader;
