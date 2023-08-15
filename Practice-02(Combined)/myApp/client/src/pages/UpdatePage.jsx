import React from "react";
import { useParams } from "react-router-dom";

const UpdatePage = () => {
  // Get the id parameter from the URL
  const { id } = useParams();

  // Now you can use the id in your component
  // For example, you can fetch data related to this id

  return (
    <div>
      <h1>Update Page</h1>
      <p>Updating item with ID: {id}</p>
      {/* Your update form and logic go here */}
    </div>
  );
};

export default UpdatePage;
