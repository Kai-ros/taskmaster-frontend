import React from 'react';

import '../styling/reset.scss';
import '../styling/delete.scss';

export default function Delete(props) {
  function deleteTask() {
    let API = `${props.api}/${props.data.id}`;

    fetch(API, {
      method: 'DELETE',
      mode: 'cors'
    }).then(() => props.reload());
  }

  return (
    <button onClick={deleteTask}>Delete Task</button>
  )
}

