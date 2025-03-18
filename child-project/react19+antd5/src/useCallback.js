import React, { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);
  
  // 使用 useCallback 来 memoize handleClick 函数
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
  }, []);  // 空依赖数组表示函数只会创建一次
  
//   const handleClick = () => {
//     console.log('Button clicked!');
//   }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <Child onClick={handleClick} />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const Child = React.memo(({ onClick }) => {
    console.log('Child render');  // 这里会打印两次
    return <button onClick={onClick}>Increment</button>;
  });

export default Parent;
