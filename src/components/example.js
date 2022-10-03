import React from "react";

function Example(props) {
    return (
      <div>
        {props.exampleProp}
        {/* using the children prop to render any elements inside the opening and closing tag of Example */}
        {props.children}
      </div>
    );
  }

  export default Example;