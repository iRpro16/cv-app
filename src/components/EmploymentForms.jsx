import { useState, useRef } from "react";
import handleObjChange from "../utils/handleObjectChange";

function EditEmploymentForm( {modifiers, data, onChange, employmentObj }) {
    let employer = employmentObj.employer;
    let role = employmentObj.role;
    let startDate = employmentObj.startDate;
    let endDate = employmentObj.endDate;
    let description = employmentObj.description;
    const prevState = useRef(data.employments);

    const handleCancel = () => {
        modifiers.setEmployments(prevState.current);
        onChange(0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        prevState.current = data.employments;
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
                <label htmlFor="employer-edit">Employer: </label>
                <input 
                    type="text"
                    value={
                        data.employments.find(el => el.employer === employer).employer
                    }
                    onInput={(e) => {
                        const updatedEmployment = handleObjChange(
                            data.employments,
                            'employer',
                            employer,
                            e.target.value,
                        );
                        modifiers.setEmployments(updatedEmployment);
                    }}
                    id="employer-edit"
                />
            </div>

            <div>
                <label htmlFor="role-edit">Role: </label>
                <input 
                    type="text"
                    value={
                        data.employments.find(el => el.role === role).role
                    }
                    onInput={(e) => {
                        const updatedEmployment = handleObjChange(
                            data.employments,
                            'role',
                            role,
                            e.target.value,
                        );
                        modifiers.setEmployments(updatedEmployment);
                    }}
                    id="role-edit"
                />
            </div>

            <div>
                <label htmlFor="start-date-edit">Start Date: </label>
                <input 
                    type="text"
                    value={
                        data.employments.find(el => el.startDate === startDate).startDate
                    }
                    onInput={(e) => {
                        const updatedEmployment = handleObjChange(
                            data.employments,
                            'startDate',
                            startDate,
                            e.target.value,
                        );
                        modifiers.setEmployments(updatedEmployment);
                    }}
                    id="start-date-edit"
                />
            </div>

            <div>
                <label htmlFor="end-date-edit">End Date: </label>
                <input 
                    type="text"
                    value={
                        data.employments.find(el => el.endDate === endDate).endDate
                    }
                    onInput={(e) => {
                        const updatedEmployment = handleObjChange(
                            data.employments,
                            'endDate',
                            endDate,
                            e.target.value,
                        );
                        modifiers.setEmployments(updatedEmployment);
                    }}
                    id="end-date-edit"
                />
            </div>

            <div>
                <label htmlFor="description-edit">Description: </label>
                <textarea
                    value={
                        data.employments.find(el => el.description === description).description
                    }
                    onInput={(e) => {
                        const updatedEmployment =handleObjChange(
                            data.employments,
                            'description',
                            description,
                            e.target.value,
                        );
                        modifiers.setEmployments(updatedEmployment);
                    }}
                    id="desciption-edit"
                >
                
                </textarea> 
            </div>

            <section className="buttons-cont-edit">
                <button className="close-btn" onClick={handleCancel}>Close</button>
                <button type="submit" className="submit-btn">Submit</button>
            </section>

        </form>
    )
}

function AddEmploymentForm({ modifiers, data, setFormState }) {
    const [newObject, setNewObject] = useState({
        id: crypto.randomUUID(),
        employer: "",
        role: "",
        startDate: "",
        endDate: "",
        description: ""
    })

    const handleEmployerChange = (e) => {
        setNewObject({
            ...newObject,
            employer: e.target.value
        });
    };

    const handleRoleChange = (e) => {
        setNewObject({
            ...newObject,
            role: e.target.value
        });
    };

    const handleStartDateChange = (e) => {
        setNewObject({
            ...newObject,
            startDate: e.target.value
        });
    };

    const handleEndDateChange = (e) => {
        setNewObject({
            ...newObject,
            endDate: e.target.value
        });
    };

    const handleDescriptionChange = (e) => {
        setNewObject({
            ...newObject,
            description: e.target.value
        })
    }

    const handleCancel = () => {
        setFormState(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // push object
        let employmentsArray = [...data.employments]
        employmentsArray.push(newObject);
        modifiers.setEmployments(employmentsArray);
        
        // close form
        setFormState(false);
    }

    return (
        <form
            onSubmit={handleSubmit} 
            className="add-employments-form"
            onKeyDown={e => {
                if(e.key === "Enter") e.preventDefault();
            }}
            >

            <div>
                <label htmlFor="employer-add">Employer: </label>
                <input 
                    type="text" 
                    value={newObject.employer} 
                    onInput={handleEmployerChange}
                    id="employer-add"
                />
            </div>

            <div>
                <label htmlFor="role-add">Role: </label>
                <input 
                    type="text" 
                    value={newObject.role} 
                    onInput={handleRoleChange}
                    id="role-add"
                />
            </div>

            <div>
                <label htmlFor="start-date-add">Start Date: </label>
                <input 
                    type="text" 
                    value={newObject.startDate} 
                    onInput={handleStartDateChange}
                    id="start-date-add"
                />
            </div>

            <div>
                <label htmlFor="end-date-add">End Date: </label>
                <input 
                    type="text" 
                    value={newObject.endDate} 
                    onInput={handleEndDateChange}
                    id="end-date-add"
                />
            </div>

            <div>
                <label htmlFor="description-add">Description: </label>
                <textarea 
                    value={newObject.description}
                    onInput={handleDescriptionChange}
                    id="description-add"
                >
                </textarea>
            </div>

            <section className="buttons-cont-add">
                <button className="close-btn-edu-form" onClick={handleCancel}>Close</button>
                <button type="submit" className="submit-btn-edu-form">Submit</button>
            </section>

        </form>
    )
}

export {
    EditEmploymentForm,
    AddEmploymentForm
}