import "../styles/Education.css";
import { useState, useRef } from "react";
import { Trash } from "lucide-react";
import { Edit } from "lucide-react";

export default function EducationSection( {modifiers, data }) {
    return (
        <section id="education-section">
            <hr />
                <div className="add-education-section">
                    <h2>Education</h2>
                    <button className="add-education">+</button>
                </div>
            <hr />
            <EducationComponent modifiers={modifiers} data={data}/>
        </section>
    )
}

function EducationComponent({ modifiers, data }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const removeSchool = (e) => {
        let array = [...data.schools];
        let filteredArray = array.filter(school => school.id !== e.target.id);
        modifiers.setSchools(filteredArray);
    }

    return (
        <div className="education-cont-side">
            {data.schools.map((school) => {
                return (
                    <div key={school.id} className="school-cont">
                        { activeIndex === school.id ? (
                            <EducationForm 
                                data={data} 
                                modifiers={modifiers} 
                                onChange={setActiveIndex}
                                schoolObj={school}
                            />
                        ) : (
                            <>
                                <p>{school.schoolName}</p>
                                <div>
                                    <Edit 
                                        onClick={() => setActiveIndex(school.id)}
                                        className="edit-btn"
                                    />
                                    <Trash 
                                        id={school.id}
                                        onClick={removeSchool}
                                        className="delete-btn"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

function EducationForm({ data, modifiers, onChange, schoolObj }) {
    let schoolName = schoolObj.schoolName;
    let schoolDegree = schoolObj.degree;
    let startDate = schoolObj.startDate;
    let endDate = schoolObj.endDate;
    const prevState = useRef(data.schools);

    const handleCancel = () => {
        modifiers.setSchools(prevState.current);
        onChange(0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        prevState.current = data.schools;
        onChange(0);
    };
    
    return (
        <form 
            onSubmit={handleSubmit}
            onKeyDown={e => {
                if(e.key === "Enter") e.preventDefault();
            }} 
        >
            <div>
                <label>School: </label>
                <input 
                    type="text"
                    value={
                        data.schools.find(el => el.schoolName === schoolName).schoolName
                    }
                    onInput={(e) => {
                        const updatedSchools = handleObjChange(
                            data.schools,
                            'schoolName',
                            schoolName,
                            e.target.value,
                        );
                        modifiers.setSchools(updatedSchools);
                    }}
                />
            </div>

            <div>
                <label>Degree: </label>
                <input 
                    type="text"
                    value={
                        data.schools.find(el => el.degree === schoolDegree).degree
                    }
                    onInput={(e) => {
                        const updatedSchools = handleObjChange(
                            data.schools,
                            'degree',
                            schoolDegree,
                            e.target.value,
                        );
                        modifiers.setSchools(updatedSchools);
                    }}
                />
            </div>

            <div>
                <label>Start Date: </label>
                <input 
                    type="text"
                    value={
                        data.schools.find(el => el.startDate === startDate).startDate
                    }
                    onInput={(e) => {
                        const updatedSchools = handleObjChange(
                            data.schools,
                            'startDate',
                            startDate,
                            e.target.value,
                        );
                        modifiers.setSchools(updatedSchools);
                    }}
                />
            </div>

            <div>
                <label>End Date: </label>
                <input 
                    type="text"
                    value={
                        data.schools.find(el => el.endDate === endDate).endDate
                    }
                    onInput={(e) => {
                        const updatedSchools = handleObjChange(
                            data.schools,
                            'endDate',
                            endDate,
                            e.target.value,
                        );
                        modifiers.setSchools(updatedSchools);
                    }}
                />
            </div>

            <div>
                <button className="close-btn" onClick={handleCancel}>Close</button>
                <button type="submit" className="submit-btn">Submit</button>
            </div>

        </form>
    )
}

function handleObjChange(array, propertyName, propertyValue, value) {
    const newObj = array.map(el => 
        el[propertyName] === propertyValue ? { ...el, [propertyName]: value } : el
    );
    return newObj;
}