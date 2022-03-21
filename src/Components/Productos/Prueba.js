import React, { useState, useEffect } from "react";


const App = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const counter = count + 1;
      setCount(counter);
      console.log('hola '+count)

    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);
  
  return (
    <section>
      <div>count = {count}</div>
    </section>
  );
};

export default App;
