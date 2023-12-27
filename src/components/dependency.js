import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');

    console.log(`Count value changed: ${count}`);

    return () => {
      console.log('Component will unmount');
    };
  }, [count]); // Dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
    </div>
  );
}

export default ExampleComponent;
