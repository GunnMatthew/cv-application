import { useState } from "react"

export default function PersonalInfo({personalInfo, onInputChange}) {
    const [localPersonalInfo, setLocalPersonalInfo] = useState(personalInfo || {
        fullName: "",
        email: "",
        phone: "",
      });

    const inputStyle = {
        backgroundColor: "white",
        color: "black"
    }

    const handleInputChange = (e, fieldName) => {
        const value = e.target.value
        const updatedInfo = {...localPersonalInfo, [fieldName]: value}
        setLocalPersonalInfo(updatedInfo)
        onInputChange(fieldName, value)
    }

    return(
        <div>
            <h2>Personal Information:</h2>
            <div>
                <label htmlFor="fullName">Full Name:</label>
                <input style={inputStyle} type="text" id="fullName" name = "fullName" value={personalInfo.fullName} onChange={(e) => handleInputChange(e, "fullName")}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input style={inputStyle} type="text" id="email" name = "email" value={personalInfo.email} onChange={(e) => handleInputChange(e, "email")}/>
            </div>
            <div>
                <label htmlFor="phone">Phone Number:</label>
                <input style={inputStyle} type="text" id="phone" name = "phone" value={personalInfo.phone} onChange={(e) => handleInputChange(e, "phone")}/>
            </div>
        </div>
    )
}