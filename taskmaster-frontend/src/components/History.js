import React, { useState, useEffect, Fragment } from 'react';

import '../styling/reset.scss';
import '../styling/history.scss';

export default function History(props) {
  let history = props.history || [];
  return (
    <Fragment>
      <ol className="historySummaries">
        {history.map((record, index) => {
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

