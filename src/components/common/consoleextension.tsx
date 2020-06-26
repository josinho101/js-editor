import * as React from "react";

interface Props {
  addLogs: Function;
}

class ConsoleExtension extends React.Component<Props, any> {
  /**
   * constructor for console
   * @param props props
   * @param state state
   */
  constructor(props: Props, state: any) {
    super(props, state);
    let that = this;

    // override/tweek default console.log
    console.log = function (value: any) {
      let log = "";
      if (typeof value === "object") {
        log = JSON.stringify(value);
      } else {
        log = value;
      }
      that.props.addLogs(log);
    };
  }

  render() {
    return null;
  }
}

export default ConsoleExtension;
