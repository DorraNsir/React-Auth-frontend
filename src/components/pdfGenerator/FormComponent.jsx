// FormComponent.js
import React, { useEffect } from 'react';
import MyDocument from './MyDocument';
import { PDFViewer } from '@react-pdf/renderer';
import { useMemo } from 'react';
import { CgAddR } from "react-icons/cg";


const FormComponent = ({projects, ProjectDescription,projectName, skills, skill,degree,dateG,Schooldescription,school,aboutMe,firstName, lastName, phoneN, Eaddress, onFirstNameChange,
   onLastNameChange, handlePhoneChange, handleEaddressChange,handleaboutMeChange,
   handleschoolChange,handlelDescriptionChange,handlelDegreeChange,handlelDateGChange,
   handlelSkillChange,handleAddSkill,handlelProjectDescriptionChange,handlelprojectNameChange ,handleAddProject}) => {

  return (
    <div className='flex w-screen m-auto p-2  '>
      <div className="w-1/2 px-3 ">
        
      <div className=" px-6 p- bg-white relative justify-center items-center w-1/2  mx-auto h-1/4 sm:h-1/4 md:w-1/4 md:h-1/4 lg:w-full lg:  lg:h-1/4 rounded-3xl filter drop-shadow-2xl"> 
  <div className="mt-3  sm:mt-5">
    <h1 className="text-xl text-gray-600 tracking-wider text-sm sm:text-md font-black py-2">
    Personal Details
    </h1>
  </div>

  <div className="mt-1 sm:mt-8">
    <form action="" className="flex-col flex">

      <label htmlFor="name" className="text-gray-700 text-xs sm:text-md">
      FirstName
      </label>
      <input name="name"type="text"
      value={firstName} onChange={onFirstNameChange}
        className=" w-full  h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-300 outline-none"/>

      <label htmlFor="lastname"
        className="text-gray-700 mt-1 sm:mt-5 text-xs sm:text-md">
        LastName
      </label>
      <input name="lastname" type="text"
      value={lastName} onChange={onLastNameChange }
        className="w-full h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-300 outline-none"/>
      <label htmlFor="email"className="text-gray-700 mt-1 sm:mt-5 text-xs sm:text-md">
        Email
      </label>
      <input name="email"type="email"
      value={Eaddress} onChange={handleEaddressChange}
      className="w-full h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-3 outline-none"/>

      <label htmlFor="phone"className="text-gray-700 mt-1 sm:mt-5 text-xs sm:text-md">
        Phone
      </label>
      <input name="phone"type="text"
      value={phoneN} onChange={handlePhoneChange}
      className="w-full h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-3 outline-none"/>
    </form>
  </div>
</div>
{/* **************************** */}
<div
  className="px-6 p- bg-white relative justify-center items-center w-1/2  mx-auto h-1/4 sm:h-1/4 md:w-1/4 md:h-1/4 lg:w-full lg:  lg:h-1/4 rounded-3xl filter drop-shadow-2xl">
    
  <div className="mt-3  sm:mt-5">
    <h1 className="text-xl text-gray-600 tracking-wider text-sm sm:text-md font-black py-2">
    Professional Summary
    </h1>
    <p class="text-xs sm:text-sm text-gray-400 mt-2">
    Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.
        </p>
  </div>

  <div className="mt-1 sm:mt-8">
    <form action="" className="flex-col flex">
    <textarea
    value={aboutMe} onChange={handleaboutMeChange}
     className=" border-2 border-gray-300 w-full  rounded-xl outline-none" name="" id="" cols="30" rows="9"></textarea>

    </form>
  </div>
</div>
{/* **************Education************** */}
<div className=" px-6 p- bg-white relative justify-center items-center w-1/2  mx-auto h-1/4 sm:h-1/4 md:w-1/4 md:h-1/4 lg:w-full lg:  lg:h-1/3 rounded-3xl filter drop-shadow-2xl"> 
  <div className="mt-3  sm:mt-5">
    <h1 className="text-xl text-gray-600 tracking-wider text-sm sm:text-md font-black py-2">
    Education
    </h1>
    <p className='class="text-xs sm:text-sm text-gray-400 mt-2'>
      A varied eduction on your resume sums up the value that your learnings and background will bring to job.
    </p>
  </div>

  <div className="mt-1 sm:mt-8">
    <form action="" className="flex-col flex">
      <label htmlFor="name" className="text-gray-700 text-xs sm:text-md">
      institute /University
      </label>
      <input name="name"type="text"
      value={school} onChange={handleschoolChange}
        className=" w-full  h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-300 outline-none"/>
        <label htmlFor="lastname"
        className="text-gray-700 mt-1 sm:mt-5 text-xs sm:text-md">
        Degree
      </label>
      <input name="lastname" type="text"
      value={degree} onChange={handlelDegreeChange}
        className="w-full h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-300 outline-none"/>
        <label htmlFor="lastname"
        className="text-gray-700 mt-1 sm:mt-5 text-xs sm:text-md">
        Year of Gradution
      </label>
      <input name="lastname" type="date"
      value={dateG} onChange={handlelDateGChange}
        className="w-full h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-300 outline-none"/>
                <label htmlFor="lastname"
        className="text-gray-700 mt-1 sm:mt-5 text-xs sm:text-md">
        Description
      </label>
        <textarea 
        value={Schooldescription} onChange={handlelDescriptionChange}
        className=" my-3 border-2 border-gray-300   rounded-xl" name="" id="" cols="30" rows="3"></textarea>

    </form>
  </div>
</div>
{/* *************SKILLS*************** */}
<div
  className="px-6 p- bg-white relative justify-center items-center w-1/2  mx-auto h-1/4 sm:h-1/4 md:w-1/4 md:h-1/4 lg:w-full lg:  lg:h-1/6 rounded-3xl filter drop-shadow-2xl">
    
  <div className="mt-3  sm:mt-5">
    <h1 className="text-xl text-gray-600 tracking-wider text-sm sm:text-md font-black py-2">
    Skills
    </h1>
  </div>

  <div className="mt-1 sm:mt-8 ">
    <form action="" className="flex-col flex">
    <label htmlFor="lastname"
        className="text-gray-700 mt-1 sm:mt-5 text-xs sm:text-md">
        Add skills
        
      </label>
      <input name="lastname" type="text"
      value={skill} onChange={handlelSkillChange}
        className="m-t-9 w-full h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-300 outline-none"/>
        <CgAddR onClick={handleAddSkill} className=' absolute top-1/3 right-2 transform -translate-y-1/2 cursor-pointer ' />
        
    </form>
  </div>
</div>
{/* **************************** */}
<div
  className="px-6 p- bg-white relative justify-center items-center w-1/2  mx-auto h-1/4 sm:h-1/4 md:w-1/4 md:h-1/4 lg:w-full lg:  lg:h-1/4 rounded-3xl filter drop-shadow-2xl">
    
  <div className="mt-3  sm:mt-5">
    <h1 className="text-xl text-gray-600 tracking-wider text-sm sm:text-md font-black py-2">
    Work experience

    </h1>
    <p class="text-xs sm:text-sm text-gray-400 mt-2">
    Mention all your projects 
        </p>
  </div>

  <div className="mt-1 sm:mt-8">
    <form action="" className="flex-col flex">

    <label htmlFor="lastname"
        className="text-gray-700 mt-1 sm:mt-5 text-xs sm:text-md">
        Project name
      </label>
      <input name="lastname" type="text"
      value={projectName} onChange={handlelprojectNameChange}
        className="w-full h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-300 outline-none"/>
            <label htmlFor="lastname"
        className="text-gray-700 mt-1 sm:mt-5 text-xs sm:text-md">
        Describe your project
      </label>
            <textarea className="my-4 border-2 border-gray-300 w-full  rounded-xl outline-none" 
            value={ProjectDescription} onChange={handlelProjectDescriptionChange}
            name="" id="" cols="30" rows="5"></textarea>
            <CgAddR onClick={handleAddProject} className=' absolute top-28 right-2 transform -translate-y-1/2 cursor-pointer ' />
    </form>
  </div>
</div>
</div>

    <div className=" preview flex   w-1/2 overflow-hidden ">
    
        <div className="preview  fixed  ">

          
  
        <PDFViewer style={{width: '100vh',height: '100vh',border: '2px solid #bbb1b1',borderRadius: '8px',}}>
          <MyDocument firstName={firstName} lastName={lastName} Eaddress={Eaddress} phoneN={phoneN} dateG={dateG} 
          degree={degree} Schooldescription={Schooldescription} school={school} aboutMe={aboutMe}
          skills={skills} skill={skill} projectName={projectName} ProjectDescription={ProjectDescription} projects={projects}
           />
        </PDFViewer>

        
  </div>  
  </div> 
    
    </div>
  );

};

export default FormComponent;