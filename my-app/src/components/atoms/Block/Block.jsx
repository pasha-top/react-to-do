import React from 'react';

const Block = ({children, className}) => {
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
};

export default Block;