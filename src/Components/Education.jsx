import React from 'react';

export default function Education(props) {
  return (
    <div className="p-5">
      <h1 className="py-4 text-2xl text-center ">Educational History</h1>
      <button
        onClick={props.removeEducation}
        className="justify-center px-2 py-1 rounded ring-red-400 ring-offset-2 hover:bg-red-500 hover:ring-1"
      >
        Remove
      </button>
      <div className="flex items-center justify-center flex-grow ">
        <label htmlFor="School">School: </label>
        <input
          name="School"
          id="School"
          className="m-4 rounded focus:ring-stratos-500"
          type="text"
          value={props.School}
          onChange={props.handleEducationChange}
        />
        <label htmlFor="Degree">Degree: </label>
        <input
          name="Degree"
          id="Degree"
          className="m-4 rounded focus:ring-stratos-500"
          type="text"
          value={props.Degree}
          onChange={props.handleEducationChange}
        />
        <label htmlFor="Graduation">Graduation: </label>
        <input
          name="Graduation"
          id="Graduation"
          className="m-4 rounded focus:ring-stratos-500"
          type="month"
          value={props.Graduation}
          onChange={props.handleEducationChange}
        />
      </div>

      <button
        onClick={props.createNewEducation}
        className="justify-center px-2 py-1 rounded ring-stratos-500 hover:ring-2"
      >
        Add Education
      </button>
    </div>
  );
}
