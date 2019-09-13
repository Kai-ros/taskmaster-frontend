import React, { useState, useEffect, Fragment } from 'react';

import '../styling/reset.scss';
import '../styling/task.scss';

export default function Task(props) {
  return (
    <Fragment >
      <div className="taskAssignee">Assignee - {props.task.assignee}</div>
      <div className="taskDescription">Description - {props.task.description}</div>
    </Fragment>
  )
}

