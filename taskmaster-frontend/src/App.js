import React, { useState, useEffect, Fragment } from 'react';
import History from './components/History';
import Task from './components/Task';

import './app.scss';

const API = 'http://localhost:5000';
const getRoute = '/api/v1/tasks';


function App() {

  const [tasks, setTasks] = useState([]);

  function getTasks() {
    fetch(API + getRoute)
      .then(data => data.json())
      .then(fetchedTasks => setTasks(fetchedTasks));
  }

  function deleteTask(id) {
    fetch()
      .method()
      .then()
  }
  // onClick={deleteTask}>{task.title}

  useEffect(getTasks, []);

  return (
    <Fragment className="app">
      <h1>TASKS</h1>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={task.id}>
              <details>
                <Task task={task} />
                <summary>
                </summary>
                <History history={task.history} />
              </details>
            </li>
          )
        })}
      </ul>
    </Fragment>
  );
}

export default App;