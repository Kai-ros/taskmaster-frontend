import React, { useState, useEffect, Fragment } from 'react';

function History(props) {
  return (
    <Fragment>
      <ol>
        {props.history.map((record, index) => {
          return (
            <li key={index}>
              <span>{record.date}</span>
              <span>{record.actionTaken}</span>
            </li>
          )
        })}
      </ol>
    </Fragment>
  )
}

export default History;