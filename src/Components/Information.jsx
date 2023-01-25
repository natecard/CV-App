import React from 'react';

export default function Information(props) {
  return (
    <div className="p-5">
      <h1 className="py-4 text-2xl text-center">Personal Information</h1>
      <div className="flex items-center justify-center flex-grow ">
        <label htmlFor="Name">Name: </label>
        <input
          className="m-4 rounded focus:ring-stratos-500"
          type="text"
          name="Name"
          id="Name"
          onChange={props.handleInfoChange}
          value={props.Name}
        />
        <label htmlFor="Email">E-mail: </label>
        <input
          className="m-4 rounded focus:ring-stratos-500"
          type="email"
          id="Email"
          name="Email"
          onChange={props.handleInfoChange}
          value={props.Email}
        />
        <label htmlFor="Telephone">Phone Number: </label>
        <input
          className="m-4 rounded focus:ring-stratos-500"
          id="Telephone"
          type="tel"
          name="Telephone"
          value={props.Telephone}
          onChange={props.handleInfoChange}
        />
      </div>
    </div>
  );
}
