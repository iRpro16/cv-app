import { useState } from 'react';
import "../src/App.css";

import {
  defaultEmployments, 
  defaultSchools, 
  defaultSkills, 
  defaultLanguages
} from "./data/defaults.js";

import Editor from './components/Editor.jsx';
import Preview from './components/Preview.jsx';
import getInitials from './utils/intials.js';

function App() {
  const [firstName, setFirstName] = useState("Isidoro");
  const [lastName, setLastName] = useState("Rumeo");
  const [jobRole, setJobRole] = useState("Economics Undergraduate");
  const [email, setEmail] = useState("rumeoisidoro16@gmail.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [address, setAddress] = useState("Caracas, Venezuela");
  const [portfolio, setPortfolio] = useState("https://github.com/iRpro16");;
  const [about, setAbout] = useState(
    "An economics undergraduate dedicated to learning programming."
  );
  const initials = getInitials(firstName, lastName);

  const [employments, setEmployments] = useState(defaultEmployments);
  const [skills, setSkills] = useState(defaultSkills);
  const [schools, setSchools] = useState(defaultSchools);
  const [languages, setLanguages] = useState(defaultLanguages);

  const modifiers = {
    handleFirstNameChange: (name) => {
      setFirstName(name.trim());
    },
    handleLastNameChange: (name) => {
      setLastName(name.trim());
    },
    handleJobRoleChange: (role) => {
      setJobRole(role.trim());
    },
    handleEmailChange: (email) => {
      setEmail(email.trim());
    },
    handlePhoneChange: (phoneNumber) => {
      setPhone(phoneNumber.trim());
    },
    handleAddressChange: (address) => {
      setAddress(address.trim());
    },
    handlePortfolioChange: (url) => {
      setPortfolio(url.trim());
    },
    handleAboutChange: (desc) => {
      setAbout(desc.trim());
    },
  };

  const data = {
    firstName,
    lastName,
    jobRole,
    email,
    phone,
    address,
    portfolio,
    about,
    initials,
    employments,
    skills,
    schools,
    languages
  };

  return (
    <>
      <Editor 
        modifiers={{
          ...modifiers,
          setEmployments,
          setSkills,
          setSchools,
          setLanguages,
        }}

        data={data}
      />
      <Preview data={data} />
    </>
  );
}

export default App;
