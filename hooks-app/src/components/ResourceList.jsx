import React from "react";
import useResources from "./useResources";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  const renderList = resources => {
    return resources.map(resource => {
      return <li key={resource.id}>{resource.title}</li>;
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

export default ResourceList;
