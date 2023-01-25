import Information from './Components/Information';
import Education from './Components/Education';
import Header from './Components/Header';
import CurriculumVerite from './Components/CV';
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Employment from './Components/Employment';

export default function App() {
  const [isPreview, setIsPreview] = useState(true);

  const [employmentData, setEmploymentData] = useState(
    () =>
      JSON.parse(localStorage.getItem('employmentData')) || [
        {
          id: nanoid(),
          Company: '',
          Title: '',
          Start: '',
          End: '',
          Description: '',
        },
      ]
  );

  const [educationData, setEducationData] = useState(
    () =>
      JSON.parse(localStorage.getItem('educationData')) || [
        {
          id: nanoid(),
          School: '',
          Degree: '',
          Graduation: '',
        },
      ]
  );
  const [infoData, setInfoData] = useState(
    () =>
      JSON.parse(localStorage.getItem('infoData')) || [
        {
          id: nanoid(),
          Name: '',
          Email: '',
          Telephone: '',
        },
      ]
  );
  function createNewEducation() {
    const newEducation = {
      id: nanoid(),
      School: '',
      Degree: '',
      Graduation: '',
    };
    setEducationData((prevEducationData) => [
      ...prevEducationData,
      newEducation,
    ]);
  }

  function createNewEmployment() {
    const newEmployment = {
      id: nanoid(),
      Company: '',
      Title: '',
      Description: '',
      Start: '',
      End: '',
    };
    setEmploymentData((prevEmploymentData) => [
      ...prevEmploymentData,
      newEmployment,
    ]);
  }
  useEffect(() => {
    localStorage.setItem('infoData', JSON.stringify(infoData));
  }, [infoData]);

  useEffect(() => {
    console.log(educationData);
    localStorage.setItem('educationData', JSON.stringify(educationData));
  }, [educationData]);

  useEffect(() => {
    localStorage.setItem('employmentData', JSON.stringify(employmentData));
  }, [employmentData]);

  function handleEmploymentChange(event, index) {
    const { name, value } = event.target;
    setEmploymentData((prevData) => {
      const newData = [...prevData];
      newData[index] = {
        ...newData[index],
        [name]: value,
      };
      return newData;
    });
  }
  function handleEducationChange(event, index) {
    const { name, value } = event.target;
    setEducationData((prevData) => {
      const newData = [...prevData];
      newData[index] = {
        ...newData[index],
        [name]: value,
      };
      return newData;
    });
  }
  function handleInfoChange(event) {
    setInfoData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }
  function removeEmployment(event, elementId) {
    event.stopPropagation();
    if (employmentData.length > 1) {
      setEmploymentData((prevData) =>
        prevData.filter((element) => element.id !== elementId)
      );
    } else {
      return employmentData;
    }
  }
  function removeEducation(event, elementId) {
    event.stopPropagation();
    if (educationData.length > 1) {
      setEducationData((prevData) =>
        prevData.filter((element) => element.id !== elementId)
      );
    } else {
      return educationData;
    }
  }
  function handlePreview(event) {
    setIsPreview((prevPreview) => !prevPreview);
  }
  const employmentElements = employmentData.map((element, index) => (
    <Employment
      key={element.id}
      index={index}
      className=""
      formData={employmentData}
      handleEmploymentChange={() => handleEmploymentChange(event, index)}
      createNewEmployment={() => createNewEmployment(event)}
      removeEmployment={() => removeEmployment(event, element.id)}
    />
  ));
  const educationElements = educationData.map((element, index) => (
    <Education
      key={element.id}
      index={index}
      formData={educationData}
      handleEducationChange={() => handleEducationChange(event, index)}
      createNewEducation={() => createNewEducation(event)}
      removeEducation={() => removeEducation(event, element.id)}
    />
  ));
  const employmentCVElements = employmentData.map((element, index) => (
    <div key={element.id}>
      <div className="flex justify-between px-12 pt-5 text-2xl ">
        {element.Company}
        <div className="flex justify-end px-12 text-lg ">{element.Title}</div>
      </div>
      <div className="flex justify-end px-24 pb-8 text-base ">
        {element.Start}-{element.End}
      </div>
      <div className="flex justify-start pb-8 text-base px-14 ">
        {element.Description}
      </div>
    </div>
  ));
  const educationCVElements = educationData.map((element, index) => (
    <div key={element.id}>
      <div className="flex justify-between text-xl px-14">
        {element.School}
        <div className="flex text-lg px-14">{element.Degree}</div>
      </div>
      <div className="flex justify-end text-base px-28 pb-28">
        {element.Graduation}
      </div>
    </div>
  ));
  // console.log(employmentData);
  // console.log(educationData);
  // console.log(infoData);
  return (
    <div className="flex flex-col h-full bg-stratos-200">
      <Header
        className=""
        preview={isPreview}
        handlePreview={() => handlePreview(event)}
      />

      {isPreview === true ? (
        <div>
          <Information
            className=""
            formData={infoData}
            handleInfoChange={() => handleInfoChange(event)}
          />

          <div>{employmentElements}</div>
          <div>{educationElements}</div>
        </div>
      ) : (
        <div>
          {/* <CurriculumVerite
            infoData={infoData}
            employmentData={employmentData}
            educationData={educationData}
          /> */}
          <div className="pt-5 text-2xl px-14">Employment</div>
          <div>{employmentCVElements}</div>
          <div className="pb-5 text-2xl px-14">Education</div>
          <div>{educationCVElements}</div>
        </div>
      )}
    </div>
  );
}
