import React, { useEffect, useState } from 'react';

function CleanupExample() {
  const [count, setCount] = useState(0);

  // useEffect with cleanup function
  useEffect(() => {
    console.log('Effect ran!');

    // Cleanup function
    return () => {
      console.log('Cleanup function ran!');
    };
  }, []); // Empty dependency array

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default CleanupExample;
