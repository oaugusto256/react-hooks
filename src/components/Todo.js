import React, { useState } from 'react';
import ResourceList from './ResourceList';

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
        <ResourceList resource={resource} />
      </div>
    </>
  );
};

export default Todo;
