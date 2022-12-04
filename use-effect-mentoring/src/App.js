import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  // useEffect(callback, dependency);

  // Trường hợP 1: Không truyền dependecy
  // => useEffect được chạy sau mỗi lần render
  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);
  // useEffect(() => {
  //   console.log("Có chạy vào useEffect");  // Rồi dòng này mới chạy
  // });                                      // Với việc sử dụng useEffect hooks,chúng ta đã nói với React rằng hãy thực thi thêm công việc này sau khi component được render. 
  // console.log("Có chạy Component App");    // Dòng này chạy trước

  // Trường hợp 2: Có truyền dependency []
  // => useEffect sẽ được chạy 1 lần sau render lần đầu tiên
  // useEffect(() => {
  //   console.log("Có chạy vào useEffect");
  // }, [])

  // Trường hợp 3: Có truyền dependency
  // => useEffect chạy sau lần render đầu tiên và được chạy sau mỗi lần dependency thay đổi
  // Truyền nhiều dependency [var1, var2,...] mỗi lần có dependency bất kỳ thay đổi thì useEffect sẽ thay đổi

  // useEffect(() => {
  //   console.log("Có chạy vào useEffect");
  // }, [count2]);
  // console.log("Render");

  // const decrease1 = () => {
  //   setCount1(count1 - 1);
  // }

  // const increase1 = () => {
  //   setCount1(count1 + 1);
  // }

  // const decrease2 = () => {
  //   setCount2(count2 - 1);
  // }

  // const increase2 = () => {
  //   setCount2(count2 + 1);
  // }

  // const [count, setCount] = useState(0);
  // const [status, setStatus] = useState('increase');

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("update count")
  //     setCount(count + 1)
  //   }, 1000)
	// 	return () => {
	// 		clearInterval(timer);
	// 	}
  // }, [count])

  const [count, setCount]= useState(0);
  let check=0;
  useEffect(()=>{
    const updateCount= setInterval(()=>{
      if(Math.floor((check/10))%2==0){
        setCount(prev=>prev+1);
        check++;
      }
      else{
        setCount(prev=>prev-1);
        check++;
      }
      
    },1000);
  },[])

  return (
    <React.Fragment>
      {/* <div>
        <button onClick={decrease1}>-</button>
        <h1>{count1}</h1>
        <button onClick={increase1}>+</button>
      </div>
      <br />
      <div>
        <button onClick={decrease2}>-</button>
        <h1>{count2}</h1>
        <button onClick={increase2}>+</button>
      </div> */}
      <h1>This is count: {count}</h1>
    </React.Fragment>
  );
}

export default App;
