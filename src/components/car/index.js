import React from "react";
import './index.css'
const Car = (props) => {
  console.log("wheel=",props)
  return (
    <div className="tesla-car">
      <div className="tesla-wheels">
        <div
          className={`tesla-wheel tesla-wheel--front tesla-wheel--}${props}`}
        ></div>
        <div
          className={`tesla-wheel tesla-wheel--rear tesla-wheel--${props}`}
        ></div>
      </div>
    </div>
  );
};
// Car.propTypes = {
//   wheelsize: React.PropTypes.number
// };
export default Car;

// Here we specify propTypes using the React built-in typechecking. In development mode, React checks props passed to the component. (Only in development mode for performance reasons) For each props attribute, React attempts to find it in the component’s propType object to determine whether (1) prop is expected (2) prop is the correct type. In this case, the TeslaCar component expects the props attribute wheelsize and specifies that it is a number type. If the wrong value is provided, a warning appears in the JavaScript console, which is useful for fixing potential bugs in early stage.
