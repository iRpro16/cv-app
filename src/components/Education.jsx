import "../styles/Education.css";
import { useState } from "react";
import { Trash } from "lucide-react";
import { Edit } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { EditEducationForm } from "./EducationForms";
import { AddEducationForm } from "./EducationForms";

export default function EducationSection( {modifiers, data }) {
    return (
        <section id="education-section">
            <hr />
                    <h2>Education</h2>
            <hr />
            <EducationComponent modifiers={modifiers} data={data}/>
        </section>
    )
}

function EducationComponent({ modifiers, data }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [formActive, setFormActive] = useState(false);

    const removeSchool = (e) => {
        let array = [...data.schools];
        let filteredArray = array.filter(school => school.id !== e.target.id);
        modifiers.setSchools(filteredArray);
    }

    return (
        <div className="education-cont-side">
            {data.schools.map(school => {
                return (
                    <div key={school.id} className="school-cont">
                        { activeIndex === school.id ? (
                            <EditEducationForm 
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

            {
                <div className="add-education-section">
                    {formActive ? (
                        <AddEducationForm 
                            modifiers={modifiers}
                            data={data}
                            setFormState={setFormActive}
                            />
                    ) : (
                        <div className="add-education" onClick={() => setFormActive(true)}>
                            <CirclePlus />
                            <p>Add Education</p>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}