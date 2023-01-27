import React from 'react';

export default function Information(props) {
  return (
    <div className="p-5 text-white bg-gradient-to-b from-stratos-300 to-blue-500">
      <h1 className="py-4 text-2xl text-center ">Personal Information</h1>
      <div className="grid items-center justify-center grid-cols-4 grid-rows-3 text-center ">
        <label className="col-start-2 " htmlFor="Name">
          Name:{' '}
        </label>
        <input
          className="m-4 text-black rounded focus:ring-stratos-500"
          type="text"
          name="Name"
          id="Name"
          onChange={props.handleInfoChange}
          value={props.formData.Name}
        />
        <label className="col-start-2" htmlFor="Email">
          E-mail:{' '}
        </label>
        <input
          className="m-4 text-black rounded focus:ring-stratos-500"
          type="email"
          id="Email"
          name="Email"
          onChange={props.handleInfoChange}
          value={props.formData.Email}
        />
        <label className="col-start-2" htmlFor="Telephone">
          Phone Number:{' '}
        </label>
        <input
          className="m-4 text-black rounded focus:ring-stratos-500"
          id="Telephone"
          type="tel"
          name="Telephone"
          value={props.formData.Telephone}
          onChange={props.handleInfoChange}
        />
      </div>
    </div>
  );
}
