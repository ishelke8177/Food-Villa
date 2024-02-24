import React from 'react';

const Shimmer = () => {
  console.log('shimmer');
  return (
    <>
      <div className="card-container">
        {Array(20)
          .fill('')
          .map((e, index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
