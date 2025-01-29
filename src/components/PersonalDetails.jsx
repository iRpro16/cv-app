import "../styles/PersonalDetails.css";

export default function PersonalDetailsSection( {modifiers, data} ) {
    return (
        <section id="personal-details-section">
            <hr />
            <h2>Personal Details </h2>
            <hr />
            <PersonalDetailsForm modifiers={modifiers} data={data}/>
        </section>
    )
}

function PersonalDetailsForm( {modifiers, data} ) {
    return (
        <div id="form">
            <label>Phone Number: </label>
            <input 
                type="text"
                name="phoneNumber"
                value={data.phone}
                onInput={(e) => modifiers.handlePhoneChange(e.target.value)}
            />
        </div>
    )
}