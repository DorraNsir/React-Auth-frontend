import React, { useState } from 'react'
import FormComponent from './FormComponent'
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

          // Add more event handlers as needed
        />
      </div>
    </div>
  )
})
export default PdfViewer;
