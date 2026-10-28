import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Posts } from './components/Posts';
import { Todos } from './components/Todos';

export function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(results => results.json())
      .then(json => setPosts(json))
      .catch(err => alert(err));
  }

  return (
    <div id='app'>
      <h2>Welcome! Select option from the menu.</h2>
      <nav id='nav'>
        <ul>
          <li><Link to='./posts'>Posts</Link></li>
          <li><Link to='./todos'>Todos</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={null} />
        <Route path="/posts" element={<Posts postList={posts} />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  );
}