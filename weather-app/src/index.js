import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay";
import Loading from "./components/Loading";
import useLocation from "./useLocation";
const App = () => {
  const latitude = useLocation().latitude;
  const errorMsg = useLocation().errorMsg;
  let content;
  if (errorMsg) {
    content = (
      <div className="ui container">
        <div className="ui negative message">
          <div className="header">{errorMsg}</div>
        </div>
      </div>
    );
  } else if (latitude) {
    content = <SeasonDisplay latitude={latitude} />;
  } else {
    content = <Loading message={"Please accept location request."} />;
  }

  return <div>{content}</div>;
};

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
