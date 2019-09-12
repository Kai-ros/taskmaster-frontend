import React, { useState, useEffect, Fragment } from 'react';

import Banner from './components/Banner';
import Task from './components/Task';
import History from './components/History';

import './styling/reset.scss';
import './styling/app.scss';

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
      <Banner />
      <ul id="taskList">
        {tasks.map((task, index) => {
          return (
            <Fragment className="taskContainers">
              <li key={task.id} className="tasks">
                <Task task={task} />
                <details className="summaries">
                  <summary> Summary of history: </summary>
                  <History history={task.history} />
                </details>
              </li>
            </Fragment>
          )
        })}
      </ul>
    </Fragment>
  );
}

export default App;