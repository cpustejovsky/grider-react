import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";
const App = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div className="container">
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      <hr/>
      <div className="columns">
        <ResourceList resource={resource} className="column" />
        <UserList resource={"users"} className="column" />
      </div>
    </div>
  );
};

export default App;
