import React, { useState, useEffect, Fragment } from 'react';

import Banner from './components/Banner';
import Task from './components/Task';
import History from './components/History';
import AddImage from './components/AddImage';

import './styling/reset.scss';
import './styling/app.scss';

const API = 'http://taskmaster-env.5p2evkjp2m.us-west-2.elasticbeanstalk.com/api/v1';
const getRoute = '/tasks';


export default function App() {

  const [tasks, setTasks] = useState([]);

  function getTasks() {
    fetch(API + getRoute)
      .then(data => data.json())
      .then(fetchedTasks => setTasks(fetchedTasks));
  }

  useEffect(getTasks, []);

  return (
    <Fragment className="app">
      <Banner />
      <ul id="taskList">
        {tasks.map((task, index) => {
          return (
            <Fragment className="taskContainers">
              <li key={task.id} className="tasks">
                <img src={task.imageURL}></img>
                <Task task={task} />
                <details className="summaries">
                  <summary> Summary of history: </summary>
                  <History history={task.history} />
                </details>
                <AddImage api={API} task={task} reload={getTasks}></AddImage>
              </li>

            </Fragment>
          )
        })}
      </ul>
    </Fragment>
  );
}

