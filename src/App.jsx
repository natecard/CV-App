import Information from './Components/Information';
import Education from './Components/Education';
import Employment from './Components/Employment';
import Header from './Components/Header';
import CurriculumVerite from './Components/CV';
import Footer from './Components/Footer';
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

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

  return (
    <div className="flex flex-col h-full">
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
          <Employment
            key={employmentData.id}
            employmentData={employmentData}
            handleEmploymentChange={handleEmploymentChange}
            createNewEmployment={createNewEmployment}
            removeEmployment={removeEmployment}
          />
          <Education
            key={educationData.id}
            educationData={educationData}
            handleEducationChange={handleEducationChange}
            createNewEducation={createNewEducation}
            removeEducation={removeEducation}
          />
        </div>
      ) : (
        <div>
          <CurriculumVerite
            infoData={infoData}
            employmentData={employmentData}
            educationData={educationData}
          />
        </div>
      )}
      <Footer />
    </div>
  );
}
