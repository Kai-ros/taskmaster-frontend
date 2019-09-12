import React, { useState, useEffect, Fragment } from 'react';

function Task(props) {
  return (
    <Fragment>
      <div>Assignee - {props.task.assignee}</div>
      <div>Description - {props.task.description}</div>
    </Fragment>
  )
}

export default Task;