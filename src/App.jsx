// import { useState } from 'react'
import PersonalInfo from './PersonalInfo'
import './App.css'
import './styles/main.css'
import { useState } from 'react'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
  })

  const PersInfoStyle = {
    backgroundColor: "gray",
    borderStyle: "solid",
    boxShadow: "1px 1px",
    color: "black",
  }

  const handlePersonalInfoUpdate = (fieldName, value) => {
    setPersonalInfo(prevInfo => ({...prevInfo, [fieldName]: value}))
  }

  return (
    <>
    <div className="application">
      <div className="userInputs">
        <PersonalInfo personalInfo={personalInfo} onInputChange={handlePersonalInfoUpdate}></PersonalInfo>
      </div>
        <div className="renderedResume" style={PersInfoStyle}>
          <h1>{personalInfo.fullName}</h1>
          <h2>{personalInfo.email}</h2>
          <h2>{personalInfo.phone}</h2>
        </div>
    </div>
    </>
  )
}

export default App
