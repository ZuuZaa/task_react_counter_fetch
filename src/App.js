import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/todos/';

  const increase = () => counter < 50 && setCounter(counter + 1);
  const decrease = () => {
    counter > 0 && setCounter(counter - 1);
    const newPosts = posts.slice(0, counter - 1)
    setPosts(newPosts)
  } 

  const getPost = async (id) => {
    try {
      const res = await fetch(`${url}/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const setRandomPost =  async () => {
      
    const post = await getPost(Math.floor(Math.random() * 200));
    setPosts([...posts, post])
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      increase();
    }, 3000);

    setRandomPost();

    return () => clearInterval(intervalId);
  }, [counter]);

  return (
    <div className="App">
      <div className="counter">Counter: {counter}</div>
      <div className="buttons">
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
      </div>
        <h3>POSTS:{" "}</h3>
        <ul className="posts">
        {
          posts?.map(post => <li className="post" key={nanoid()}>{post?.title}</li>)
        }
        </ul>
      </div>
  );
}

export default App;