import "../styles/Employment.css";
import { useState } from "react";
import { Trash } from "lucide-react";
import { Edit } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { EditEmploymentForm } from "./EmploymentForms";
import { AddEmploymentForm } from "./EmploymentForms";

export default function EmploymentSection( {modifiers, data} ) {
    return (
        <section id="work-experience-section">
            <hr />
                <h2>Work Experience</h2>
            <hr />
            <EmploymentComponent modifiers={modifiers} data={data}/>
        </section>
    )
}

function EmploymentComponent( {modifiers, data }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [formActive, setFormActive] = useState(false);

    const removeEmployment = (e) => {
        let array = [...data.employments];
        let filteredArray = array.filter(employment => employment.id !== e.target.id );
        modifiers.setEmployments(filteredArray);

    }

    return (
        <div className="employment-cont-side">
            {data.employments.map(employment => {
                return (
                    <div key={employment.id} className="employment-cont">
                        { activeIndex === employment.id ? (
                            <EditEmploymentForm 
                                modifiers={modifiers}
                                data={data}
                                onChange={setActiveIndex}
                                employmentObj={employment}
                            />
                        ) : (
                            <>
                                <p>{employment.employer}</p>
                                <div>
                                    <Edit 
                                        onClick={() => setActiveIndex(employment.id)}
                                        className="edit-btn"
                                    />
                                    <Trash 
                                        id={employment.id}
                                        className="delete-btn"
                                        onClick={removeEmployment}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                )
            })}

            {
                <div className="add-employment-section">
                    {formActive ? (
                        <AddEmploymentForm 
                            modifiers={modifiers}
                            data={data}
                            setFormState={setFormActive}
                            />
                    ) : (
                        <div className="add-employment" onClick={() => setFormActive(true)}>
                            <CirclePlus />
                            <p>Add Employment</p>
                        </div>
                    )}
                </div>
            }
            
        </div>
    )
}