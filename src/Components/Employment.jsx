import React from 'react';

export default function Employment(props) {
  const employmentElements = props.employmentData.map((element, index) => (
    <div key={element.id} className="" index={index}>
      <div className="grid items-center justify-center grid-cols-6 grid-rows-4 text-center ">
        <label className="col-span-1" htmlFor="Company">
          Company:{' '}
        </label>
        <input
          name="Company"
          id="Company"
          className="col-span-2 m-4 text-black rounded focus:ring-stratos-500"
          type="text"
          value={props.employmentData[index].Company}
          onChange={() => props.handleEmploymentChange(event, index)}
        />
        <label className="col-span-1" htmlFor="Start">
          Start Date:
        </label>
        <input
          name="Start"
          id="Start"
          className="col-span-2 m-4 text-black rounded focus:ring-stratos-500"
          type="month"
          value={props.employmentData[index].Start}
          onChange={() => props.handleEmploymentChange(event, index)}
        />
        <label className="col-span-1 col-start-1" htmlFor="Title">
          Job Title:
        </label>
        <input
          name="Title"
          id="Title"
          className="col-span-2 m-4 text-black rounded focus:ring-stratos-500"
          type="text"
          value={props.employmentData[index].Title}
          onChange={() => props.handleEmploymentChange(event, index)}
        />

        <label className="col-span-1" htmlFor="End">
          End Date:
        </label>
        <input
          name="End"
          id="End"
          className="col-span-2 m-4 text-black rounded focus:ring-stratos-500"
          value={props.employmentData[index].End}
          type="month"
          onChange={() => props.handleEmploymentChange(event, index)}
        />
        <label className="col-start-1" htmlFor="Description">
          Description:
        </label>
        <textarea
          name="Description"
          className="col-span-4 row-span-2 mx-4 h-48 w-11/12 rounded-lg border border-gray-300 p-2.5 text-sm text-black focus:ring-stratos-500"
          value={props.employmentData[index].Description}
          onChange={() => props.handleEmploymentChange(event, index)}
        ></textarea>
        <button
          onClick={() => props.removeEmployment(event, element.id)}
          className="justify-center col-start-6 row-span-1 row-start-4 px-2 py-1 m-4 rounded hover:bg-red-200 hover:ring-2 hover:ring-red-500 hover:ring-offset-2"
        >
          Remove Employment
        </button>
        <button
          onClick={() => props.createNewEmployment(event)}
          className="justify-center col-start-6 row-start-3 px-2 py-1 m-4 rounded hover:bg-green-200 hover:ring-2 hover:ring-green-500"
        >
          Add Employment
        </button>
      </div>
    </div>
  ));
  return (
    <div className="p-5 text-white bg-gradient-to-b from-blue-500 to-blue-600 ">
      <h1 className="py-4 text-2xl text-center">Employment History</h1>
      {employmentElements}
      <div className="flex justify-center"></div>
    </div>
  );
}
