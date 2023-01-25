import React from 'react';

export default function CurriculumVerite(props) {
  return (
    <div className="flex justify-center p-5 bg-stratos-200">
      <div className="flex flex-col self-center w-4/5 h-full bg-white text-stratos-900">
        {/* RESUME INFORMATION */}

        <div className="flex self-center pt-12 text-4xl">
          {props.infoData.Name}
        </div>
        <div className="flex self-center text-lg ">
          E-mail: {props.infoData.Email}
        </div>
        <div className="flex self-center text-lg ">
          Phone: {props.infoData.Telephone}
        </div>

        {/* EMPLOYMENT */}

        <div className="pt-5 text-2xl px-14">Employment</div>
        <div className="flex justify-between px-12 pt-5 text-2xl ">
          {props.employmentData.Company}
          <div className="flex justify-end px-12 text-lg ">
            {props.employmentData.Title}
          </div>
        </div>
        <div className="flex justify-end px-24 pb-8 text-base ">
          {props.employmentData.Start}-{props.employmentData.End}
        </div>
        <div className="flex justify-start pb-8 text-base px-14 ">
          {props.employmentData.Description}
        </div>

        {/* EDUCATION */}

        <div className="pb-5 text-2xl px-14">Education</div>
        <div className="flex justify-between text-xl px-14">
          {props.educationData.School}
          <div className="flex text-lg px-14">{props.educationData.Degree}</div>
        </div>
        <div className="flex justify-end text-base px-28 pb-28">
          {props.educationData.Graduation}
        </div>
      </div>
    </div>
  );
}
