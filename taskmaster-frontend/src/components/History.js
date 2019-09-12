import React, { useState, useEffect, Fragment } from 'react';

import '../styling/reset.scss';
import '../styling/history.scss';

function History(props) {
  return (
    <Fragment>
      <ol className="historySummaries">
        {props.history.map((record, index) => {
          return (
            <li key={index} className="summaryItems">
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