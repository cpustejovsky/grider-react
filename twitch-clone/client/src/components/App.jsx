import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
//   return <div>PageOne <button><a href="/pagetwo">Page Two</a></button></div>;
  return <div>PageOne <button><Link to="/pagetwo">Page Two</Link></button></div>;
};

const PageTwo = () => {
//   return <div>PageTwo <button><a href="/">Page One</a></button></div>;
  return <div>PageTwo <button><Link to="/">Page One</Link></button></div>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" exact component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
