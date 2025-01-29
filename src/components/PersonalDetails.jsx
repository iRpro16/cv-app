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
            <div>
                <label>First Name: </label>
                <input 
                    type="text"
                    name="firstName"
                    value={data.firstName}
                    onInput={(e) => modifiers.handleFirstNameChange(e.target.value)}
                />
            </div>

            <div>
                <label>Last Name: </label>
                <input 
                    type="text"
                    name="lastName"
                    value={data.lastName}
                    onInput={(e) => modifiers.handleLastNameChange(e.target.value)}
                />
            </div>

            <div>
                <label>Phone Number: </label>
                <input 
                    type="text"
                    name="phoneNumber"
                    value={data.phone}
                    onInput={(e) => modifiers.handlePhoneChange(e.target.value)}
                />
            </div>

            <div>
                <label>Email: </label>
                <input 
                    type="text"
                    name="email"
                    value={data.email}
                    onInput={(e) => modifiers.handleEmailChange(e.target.value)}
                />
            </div>

            <div>
                <label>Address: </label>
                <input 
                    type="text"
                    name="address"
                    placeholder="San Francisco, United States"
                    value={data.address}
                    onInput={(e) => modifiers.handleAddressChange(e.target.value)}
                />
            </div>

            <div>
                <label>Portfolio: </label>
                <input 
                    type="text"
                    name="portfolio"
                    value={data.portfolio}
                    onInput={(e) => modifiers.handlePortfolioChange(e.target.value)}
                />
            </div>

            <div className="about-area">
                <label>Summary: </label>
                <textarea 
                value={data.about} 
                onInput={(e) => modifiers.handleAboutChange(e.target.value)}
                className="text-area"
                ></textarea>

            </div>
        </div>
    )
}