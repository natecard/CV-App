import React from 'react';

export default function Education(props) {
  const educationElements = props.educationData.map((element, index) => (
    <div
      key={element.id}
      index={index}
      // educationData={educationData}
      className="p-5 bg-stone-300"
    >
      <div className="grid items-center justify-center grid-cols-6 grid-rows-2 text-center ">
        <label htmlFor="School">School: </label>
        <input
          name="School"
          id="School"
          className="col-span-2 m-4 rounded focus:ring-stratos-500"
          type="text"
          value={props.educationData[index].School}
          onChange={() => props.handleEducationChange(event, index)}
        />
        <label htmlFor="Graduation">Graduation: </label>
        <input
          name="Graduation"
          id="Graduation"
          className="col-span-2 m-4 rounded focus:ring-stratos-500"
          type="month"
          value={props.educationData[index].Graduation}
          onChange={() => props.handleEducationChange(event, index)}
        />
        <label htmlFor="Degree">Degree: </label>
        <input
          name="Degree"
          id="Degree"
          className="col-span-2 m-4 rounded focus:ring-stratos-500"
          type="text"
          value={props.educationData[index].Degree}
          onChange={() => props.handleEducationChange(event, index)}
        />

        <button
          onClick={() => props.removeEducation(event, element.id)}
          className="col-span-1 col-start-5 px-2 py-1 m-4 rounded hover:bg-red-200 hover:ring-2 hover:ring-red-500 hover:ring-offset-2"
        >
          Remove Education
        </button>
        <button
          onClick={() => props.createNewEducation(event)}
          className="justify-center px-2 py-1 m-4 rounded hover:bg-green-200 hover:ring-2 hover:ring-green-500"
        >
          Add Education
        </button>
      </div>
    </div>
  ));
  return (
    <div className=" bg-stone-300">
      <h1 className="py-4 text-2xl text-center ">Educational History</h1>
      {educationElements}
      <div className="flex justify-center"></div>
    </div>
  );
}
