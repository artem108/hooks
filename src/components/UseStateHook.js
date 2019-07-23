import React, { useState, useEffect } from 'react';

function UseStateHook() {
  const [count, setCount] = useState(0)


  useEffect(() => {

  })

  return (
    <section>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        click
      </button>
    </section>
  );
}

export default UseStateHook;
