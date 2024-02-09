// FormComponent.js
import React, { useEffect, useState } from 'react';
import MyDocument from './MyDocument';
import { PDFViewer } from '@react-pdf/renderer';
import { IoAddOutline } from "react-icons/io5";
import ColorPicker from '../ColorPicker';
import { MdDeleteForever } from "react-icons/md";

const FormComponent = ({degree,dateG,Schooldescription,school,aboutMe,firstName, lastName, phoneN, Eaddress, onFirstNameChange,
   onLastNameChange, handlePhoneChange, handleEaddressChange,handleaboutMeChange,
   handleschoolChange,handlelDescriptionChange,handlelDegreeChange,handlelDateGChange}) => {
    
    const [color, setColor] = useState("#7c6ed5");
    const [skills, setSkills] = useState([""]);
    const[ProjectDescription,setProjectDescription]=useState('')
    const[projectName,setProjectName]=useState('')
    const[projects,setProjects]=useState([
      {
        name:'',
        description:'',
      }
    ])
    const handleAddProject = () => {
      if (projectName.trim() !== "" && ProjectDescription.trim() !== "") { 
        const newProject = { name: projectName, description: ProjectDescription };
        setProjects([...projects, newProject]); 
        setProjectName('');
        setProjectDescription(''); 
      }
    };

    const deleteInputSkills = (index) => {
      // Make a copy of the inputs array
      const Skills = [...skills];
      // Remove the item at the specified index using splice
      Skills.splice(index, 1);
      // Update the state with the modified Inputs array
      setSkills(Skills);
    }
    const addInput = () => {
      setSkills([...skills, '']);
    };
    const handleSkillsChange = (index, value) => {
      const newSkills = [...skills];
      newSkills[index] = value;
      setSkills(newSkills);  
    };
    const handleColorChange = (Ncolor) => {
      setColor(Ncolor)
    };
  return (
    <div className='flex w-screen m-auto p-2  '>
      <div className="w-1/2 px-3 ">
        
      <ColorPicker onColorChange={handleColorChange}/>
        {/* **************************** */}
      <div className=" px-6 p- bg-white relative justify-center items-center w-1/2  mx-auto h-1/4 sm:h-1/4 md:w-1/4 md:h-1/4 lg:w-full lg:  lg:h-auto rounded-3xl filter drop-shadow-2xl"> 
  <div className="mt-3  sm:mt-5">
    <h1 className="text-xl text-gray-600 tracking-wider text-sm sm:text-md font-black py-2">
    Personal Details
    </h1>
  </div>

  <div className="mt-1 sm:mt-8 p-3">
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
  className="px-6 p- bg-white relative justify-center items-center w-1/2  mx-auto h-1/4 sm:h-1/4 md:w-1/4 md:h-1/4 lg:w-full lg:  lg:h-auto rounded-3xl filter drop-shadow-2xl">
    
  <div className="mt-3  sm:mt-5 ">
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
<div className=" px-6 p- bg-white relative justify-center items-center w-1/2  mx-auto h-1/4 sm:h-1/4 md:w-1/4 md:h-1/4 lg:w-full lg:  lg:h-auto rounded-3xl filter drop-shadow-2xl"> 
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
  className="px-6 p- bg-white relative justify-center items-center w-1/2  mx-auto h-1/4 sm:h-1/4 md:w-1/4 md:h-1/4 lg:w-full lg:h-auto rounded-3xl filter drop-shadow-2xl">
    
  <div className="mt-3  sm:mt-5">
    <h1 className="text-xl text-gray-600 tracking-wider text-sm sm:text-md font-black py-2">
    Skills
    </h1>
  </div>
    {skills.map((input,index)=>(
        <div className="mt-1 sm:mt-8  " key={index}>
        <form action="" className="flex-col flex">
        <label htmlFor="lastname"
            className="text-gray-700 mt-1 sm:mt-5 text-xs sm:text-md">
            Add skills
          </label>
          <div className='flex items-end justify-end'>
            <MdDeleteForever onClick={()=>deleteInputSkills(index)} className='relative top-5 cursor-pointer hover:bg-red-400' />
            </div> 
          <input  name="lastname" type="text"
          value={input} onChange={(e)=>handleSkillsChange(index, e.target.value)}
            className="m-t-9 w-full h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-300 outline-none"/>    
        </form>
      </div>
    ))}


  <div className=" flex my-3 ">
        <IoAddOutline  className='my-3 cursor-pointer ' />
        <span className='m-2 cursor-pointer font-bold text-gray-600 hover:text-green-800 hover:font-bold' onClick={addInput}>Add more skills </span>
        </div>
</div>
{/* *************Work experience*************** */}
<div
  className="px-6 p- bg-white relative justify-center items-center w-1/2  mx-auto h-1/4 sm:h-1/4 md:w-1/4 md:h-1/4 lg:w-full lg:  lg:h-auto rounded-3xl filter drop-shadow-2xl">
    
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
      value={""} onChange={""}
        className="w-full h-4 sm:h-9 border-b-2 border-gray-300 focus:border-blue-300 outline-none"/>
            <label htmlFor="lastname"
        className="text-gray-700 mt-1 sm:mt-5 text-xs sm:text-md">
        Describe your project
      </label>
            <textarea className="my-4 border-2 border-gray-300 w-full  rounded-xl outline-none" 
            value={""} onChange={""}
            name="" id="" cols="30" rows="5"></textarea>
        <div className=" flex my-3 ">
        <IoAddOutline onClick={''} className='my-3 cursor-pointer ' />
        <span className='m-2'>Add more Work experience </span>
        </div>
    </form>
  </div>
</div>
</div>

    <div className=" preview flex   w-1/2 overflow-hidden ">
    
        <div className="preview  fixed  ">
        <PDFViewer style={{width: '100vh',height: '100vh',border: '2px solid #bbb1b1',borderRadius: '8px',}}>
          <MyDocument firstName={firstName} lastName={lastName} Eaddress={Eaddress} phoneN={phoneN} dateG={dateG} 
          degree={degree} Schooldescription={Schooldescription} school={school} aboutMe={aboutMe} 
          skills={skills}  color={color}
           />
        </PDFViewer>

        
  </div>  
  </div> 
    
    </div>
  );

};

export default FormComponent;