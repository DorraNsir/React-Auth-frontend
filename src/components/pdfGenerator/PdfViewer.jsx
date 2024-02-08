import React, { useState } from 'react'
import FormComponent from './FormComponent'
import MyDocument from './MyDocument';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';

const PdfViewer= React.memo(()=> {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneN, setPhoneN] = useState('');
  const [Eaddress, setEaddress] = useState('');
  const [aboutMe, setaboutMe] = useState('');
  const [school, setSchool] = useState('');
  const [Schooldescription, setSchooldescription] = useState('');
  const [degree, setDegree] = useState('');
  const [dateG, setDateG] = useState('');
  const[skill,setSkill]=useState('');
  const [skills, setSkills] = useState([]);
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

  const handleAddSkill = () => {
    if (skill.trim() !== "") { // Check if the skill is not empty
      setSkills([...skills, skill]); // Add the skill to the list of skills
      setSkill(''); // Clear the input field
    }
  };
  const handlelprojectNameChange = (e) => {
    setProjectName(e.target.value);
  };
  const handlelProjectDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
  };
  const handlelSkillChange = (e) => {
    setSkill(e.target.value);
  };
  const handlelDegreeChange = (e) => {
    setDegree(e.target.value);
  };
  const handlelDateGChange = (e) => {
    setDateG(e.target.value);
  };
  const handlelDescriptionChange = (e) => {
    setSchooldescription(e.target.value);
  };
  const handleschoolChange = (e) => {
    setSchool(e.target.value);
  };
  const handleaboutMeChange = (e) => {
    setaboutMe(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhoneN(e.target.value);
  };

  const handleEaddressChange = (e) => {
    setEaddress(e.target.value);
  };
  // Add more event handlers as needed
  const cookies = new Cookies();
  const cookie = cookies.get('jwt');

  return (
    <div>
      {
           !cookie &&(
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
                  <h2 className="text-2xl font-bold mb-4">Login Required</h2>
                  <p className="text-gray-600 mb-4">Please login to continue.</p>
                  <Link to="/login" className="bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-slate-700 text-center">
                    Login
                  </Link>
                </div>
              </div>)
      }

            <div className="form-container">
        <FormComponent
          firstName={firstName}
          lastName={lastName}
          phoneN={phoneN}
          Eaddress={Eaddress}
          aboutMe={aboutMe}
          school={school}
          degree={degree}
          dateG={dateG}
          skill={skill}
          skills={skills}
          projectName={projectName}
          projects={projects}
          ProjectDescription={ProjectDescription}
          Schooldescription={Schooldescription}
          onFirstNameChange={handleFirstNameChange}
          onLastNameChange={handleLastNameChange}
          handlePhoneChange={handlePhoneChange}
          handleEaddressChange={handleEaddressChange}
          handleaboutMeChange={handleaboutMeChange}
          handleschoolChange={handleschoolChange}
          handlelDescriptionChange={handlelDescriptionChange}
          handlelDegreeChange={handlelDegreeChange}
          handlelDateGChange={handlelDateGChange}
          handlelSkillChange={handlelSkillChange}
          handleAddSkill={handleAddSkill}
          handlelProjectDescriptionChange ={handlelProjectDescriptionChange }
          handlelprojectNameChange={handlelprojectNameChange}
          handleAddProject={handleAddProject}
          // Add more event handlers as needed
        />
      </div>
      {/* <PDFDownloadLink document={<MyDocument firstName={firstName} lastName={lastName} phoneN={phoneN} address={Eaddress}/>} fileName='myResume'>
        Download a PDF
      </PDFDownloadLink> */}
    </div>
  )
})
export default PdfViewer;
