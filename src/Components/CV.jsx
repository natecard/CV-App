import React from 'react';

export default function CurriculumVerite(props) {
  return (
    <div className="flex justify-center bg-stratos-200 p-5">
      <div className="flex h-full w-4/5 flex-col self-center bg-white text-stratos-900">
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

        <div className="px-14 pt-5 text-2xl">Employment</div>
        <div className="flex justify-between px-12 pt-5 text-2xl ">
          {props.employmentData.Company}
          <div className="flex justify-end px-12 text-lg ">
            {props.employmentData.Title}
          </div>
        </div>
        <div className="flex justify-end px-24 pb-8 text-base ">
          {props.employmentData.Start}-{props.employmentData.End}
        </div>
        <div className="flex justify-start px-14 pb-8 text-base ">
          {props.employmentData.Description}
        </div>

        {/* EDUCATION */}

        <div className="px-14 pb-5 text-2xl">Education</div>
        <div className="flex justify-between px-14 text-xl">
          {props.educationData.School}
          <div className="flex px-14 text-lg">{props.educationData.Degree}</div>
        </div>
        <div className="flex justify-end px-28 pb-28 text-base">
          {props.educationData.Graduation}
        </div>
      </div>
    </div>
  );
}
