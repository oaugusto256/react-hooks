import React, { useState } from 'react';

const Todo = () => {
  const [resource, setResource] = useState('posts');

  return (
    <>
      <h1>React Hooks</h1>
      <div>
        <div>
          <button onClick={() => setResource('posts')}>Todos</button>
          <button onClick={() => setResource('todos')}>Posts</button>
        </div>
        {resource}
      </div>
    </>
  );
};

export default Todo;
