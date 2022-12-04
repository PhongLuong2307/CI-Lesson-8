import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import ScrollComponent from './ScrollComponent';

// import ClassComponent from './ClassComponent';
// import FunctionalComponent from './FunctionalComponent';

function App() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    if (count <= 5) {
      console.log("Effects run");
      document.title = `Lesson useEffect ${count}`;
    }
  }, [count]);

  const onIncreaseCount = () => {
    setCount((count) => count + 1);
  }

  const onSetVisible = () => {
    setVisible((prev) => !prev);
  }

  const onToggleScrollComponent = () => {
    setToggle((prev) => !prev);
  }

  console.log('Render');
  return (
    <React.Fragment>
      <div className='body'>
        <h1>useEffect</h1>
        <h1>{count}</h1>
        <button onClick={onIncreaseCount}>Click</button>
        <div>
          {visible && <p>This is hidden content</p>}
          <button onClick={() => onSetVisible()}>Change Visible</button>
        </div>
        <div>
          {toggle && <ScrollComponent />};
          <button onClick={onToggleScrollComponent}>Toggle Scroll Component</button>
        </div>

        {/* <ClassComponent></ClassComponent>
        <FunctionalComponent></FunctionalComponent> */}
      </div>
    </React.Fragment>
  );
}

export default App;

/*
Lifecycle ReactJS:

1. Mounting:
  + Render lần đầu tiên
  + useEffect run sau lần render đầu tiên
    => empty dependencies
    Fetch data

2. Updating:
  + render
  + effect chạy có điều kiện

3.Unmounting
  + effect with clean up


- useEffect được thực thi sau mỗi lần render (without deps)
- useEffect được thực thi sau lần render đầu tiên ([ ])
- useEffect có điều kiện khi [count]
- Lưu ý: cleanup tất cả những hàm như: interval, timeout, listener 
=> trước khi component unmounting
*/