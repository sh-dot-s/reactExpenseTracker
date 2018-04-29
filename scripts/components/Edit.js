import React from 'react';

const Edit = (props) => {
  return (
    <div>
      Editing page of id: {props.match.params.key || `undefined`}
      {console.log(props)}
    </div>
  );
};

export default Edit;
