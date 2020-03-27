import React from "react";
import useResources from "./useResources";

const UserList = ({ resource }) => {
  const resources = useResources(resource);

  const renderList = resources => {
    return resources.map(resource => {
      return <li key={resource.id}>{resource.name}</li>;
    });
  };
  console.log(resources[0]);
  return (
    <div>
      <h2>
        {resources.length} {resource}
      </h2>
      {renderList(resources)}
    </div>
  );
};

export default UserList;