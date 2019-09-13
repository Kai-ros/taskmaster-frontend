import React, { Fragment } from 'react';

import '../styling/reset.scss';
import '../styling/addImage.scss';

let form = new FormData();

export default function AddImage(props) {
  let API = `${props.api}/tasks/${props.task.id}/images`;

  const handleChange = event => {
    event.preventDefault();
    let value = event.target.files ? event.target.files[0] : event.target.value;
    form.set(event.target.name, value);
  }

  const uploadData = event => {
    event.preventDefault();

    fetch(API, {
      method: 'POST',
      mode: 'no-cors',
      body: form
    })
      .then(response => response.json())
      .catch(error => console.error('Error: ', error))
      .then(response => console.log('Success: ', response))
      .then(() => props.reload());
  }

  return (
    <Fragment>
      <form onSubmit={uploadData} action={API} method="POST" encType="multipart/form-data">
        <label>
          <span>Upload Image</span>
          <input onChange={handleChange} name="imageURL" type="file" />
        </label>
        <button>Save</button>
      </form>
    </Fragment>
  )
}