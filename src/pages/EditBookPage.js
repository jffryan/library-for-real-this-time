import React from "react";

const EditBookPage = (props) => {
  return (
    <div>
      <h1>Edit Book ID {props.match.params.id}</h1>
    </div>
  );
};

export default EditBookPage;
