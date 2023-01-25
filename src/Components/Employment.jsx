import React from 'react';

export default function Employment(props) {
  return (
    <div className="p-5">
      <h1 className="py-4 text-2xl text-center">Employment History</h1>

      <button
        onClick={props.removeEmployment}
        className="justify-center px-2 py-1 rounded ring-red-400 hover:ring-1"
      >
        Remove
      </button>
      <div className="flex items-center justify-center flex-grow ">
        <label htmlFor="Company">Company: </label>
        <input
          name="Company"
          id="Company"
          className="m-4 rounded focus:ring-stratos-500"
          type="text"
          value={props.Company}
          onChange={props.handleEmploymentChange}
        />
        <label htmlFor="Title">Job Title: </label>
        <input
          name="Title"
          id="Title"
          className="m-4 rounded focus:ring-stratos-500"
          type="text"
          value={props.Title}
          onChange={props.handleEmploymentChange}
        />
        <label htmlFor="Start">Start Dates: </label>
        <input
          name="Start"
          id="Start"
          className="m-4 rounded focus:ring-stratos-500"
          type="month"
          value={props.Start}
          onChange={props.handleEmploymentChange}
        />
        <label htmlFor="End">End Date: </label>
        <input
          name="End"
          id="End"
          className="m-4 rounded focus:ring-stratos-500"
          value={props.End}
          type="month"
          onChange={props.handleEmploymentChange}
        />
      </div>
      <div className="flex justify-center w-full">
        <label className="mx-4 " htmlFor="Description">
          Description:
        </label>
        <textarea
          name="Description"
          rows="5"
          cols="25"
          className=" w-3/6 rounded-lg border border-gray-300 p-2.5 text-sm text-stratos-900 focus:ring-stratos-500"
          value={props.Description}
          onChange={props.handleEmploymentChange}
        ></textarea>
      </div>

      <button
        onClick={props.createNewEmployment}
        className="justify-center px-2 py-1 rounded ring-stratos-500 hover:ring-2"
      >
        Add Employment
      </button>
    </div>
  );
}
