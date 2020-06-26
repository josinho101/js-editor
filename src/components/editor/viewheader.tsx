import React from "react";

interface Props {
  title: string;
  classname?: string;
  controls?: JSX.Element[];
}

const ViewHeader: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="viewHeader">
      {props.title}
      {props.controls}
    </div>
  );
};

export default ViewHeader;
