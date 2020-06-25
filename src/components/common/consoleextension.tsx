import * as React from "react";

class ConsoleExtension extends React.Component {
  /**
   * constructor for console
   * @param props props
   * @param state state
   */
  constructor(props: any, state: any) {
    super(props, state);

    // override/tweek default console.log
    let log = console.log;
    console.log = function (value: any) {
      log(value);
      return value;
    };
  }

  render() {
    return null;
  }
}

export default ConsoleExtension;
