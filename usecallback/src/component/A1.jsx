import React from "react";

const A1 = ({ fun }) => {
  console.log("child is rendered again");
  return (
    <>
      <h1>child is component</h1>
    </>
  );
}

export default React.memo(A1);


