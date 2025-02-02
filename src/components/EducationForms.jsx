import { useState, useRef } from "react";

function EditEducationForm({ data, modifiers, onChange, schoolObj }) {
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
                <label htmlFor="school-name-edit">School Name: </label>
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
                    id="school-name-edit"
                />
            </div>

            <div>
                <label htmlFor="degree-edit">Degree: </label>
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
                    id="degree-edit"
                />
            </div>

            <div>
                <label htmlFor="start-date-edit">Start Date: </label>
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
                    id="start-date-edit"
                />
            </div>

            <div>
                <label htmlFor="end-date-edit">End Date: </label>
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
                    id="end-date-edit"
                />
            </div>

            <div>
                <button className="close-btn" onClick={handleCancel}>Close</button>
                <button type="submit" className="submit-btn">Submit</button>
            </div>

        </form>
    )
}

function AddEducationForm({ modifiers, data, setFormState }) {
    const [newObject, setNewObject] = useState({
        id: crypto.randomUUID(),
        schoolName: "",
        degree: "",
        startDate: "",
        endDate: ""
    })

    const handleSchoolNameChange = (e) => {
        setNewObject({
            ...newObject,
            schoolName: e.target.value
        });
    };

    const handleDegreeChange = (e) => {
        setNewObject({
            ...newObject,
            degree: e.target.value
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

    const handleCancel = () => {
        setFormState(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // push object
        let schoolsArray = [...data.schools]
        schoolsArray.push(newObject);
        modifiers.setSchools(schoolsArray);
        
        // close form
        setFormState(false);
    }

    return (
        <form
            onSubmit={handleSubmit} 
            className="add-school-form"
            onKeyDown={e => {
                if(e.key === "Enter") e.preventDefault();
            }}
            >

            <div>
                <label htmlFor="school-name-add">School Name: </label>
                <input 
                    type="text" 
                    value={newObject.schoolName} 
                    onInput={handleSchoolNameChange}
                    id="school-name-add"
                />
            </div>

            <div>
                <label htmlFor="degree-add">Degree: </label>
                <input 
                    type="text" 
                    value={newObject.degree} 
                    onInput={handleDegreeChange}
                    id="degree-add"
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

            <section className="buttons-cont">
                <button className="close-btn-edu-form" onClick={handleCancel}>Close</button>
                <button type="submit" className="submit-btn-edu-form">Submit</button>
            </section>

        </form>
    )
}

function handleObjChange(array, propertyName, propertyValue, value) {
    const newObj = array.map(el => 
        el[propertyName] === propertyValue ? { ...el, [propertyName]: value } : el
    );
    return newObj;
}

export {
    EditEducationForm,
    AddEducationForm
}