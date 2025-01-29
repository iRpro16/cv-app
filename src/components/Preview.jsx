import "../styles/Preview.css";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { Dot } from "lucide-react";

export default function Preview({ data }) {
    return (
        <div id="preview">
            <div id="cv">
                <div className="cv-side">

                    {/* Initials cont */}
                    <div id="initials">
                        <p>{data.initials}</p>
                    </div>
                    
                    {/* Contact cont */}
                    <div className="contact-cont">
                        <h2>Contact</h2>

                        <div className="svg-cont">
                            <Phone />
                            <p>{data.phone}</p>
                        </div>

                        <div className="svg-cont">
                            <Mail />
                            <p>{data.email}</p>
                        </div>

                        <div className="svg-cont">
                            <MapPin />
                            <p>{data.address}</p>
                        </div>

                        <div className="svg-cont">
                            <BriefcaseBusiness />
                            <p>{data.portfolio}</p>
                        </div>
                    </div>

                    {/* Education container */}
                    <div className="education-cont">
                        <h2>Education</h2>
                        <div className="schools-cont">
                            {data.schools.map((school) => {
                                return (
                                    <div key={school.id} className="education">
                                        <p>{school.schoolName}</p>
                                        <p>{school.degree}</p>
                                        <p>{school.startDate} - {school.endDate}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Skills container */}
                    <div className="skills-cont">
                        <h2>Skills</h2>
                        {data.skills.map((skill) => {
                            return (
                                <div key={skill.id} className="skill">
                                    <Dot />
                                    <p>{skill.skill}</p>
                                </div>
                            )
                        })}
                    </div>

                    {/* Languages container*/}
                    <div className="languages-cont">
                        <h2>Languages</h2>
                        <div className="languages">
                            {data.languages.map((language) => {
                                return (
                                    <div key={language.id} className="language">
                                        <Dot />
                                        <p>{language.language}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="main-content">
                    <div className="name-occupation-cont">
                        <p>{data.firstName} {data.lastName}</p>
                        <p>{data.jobRole}</p>
                    </div>

                    <div className="summary-cont">
                        <h2>Summary</h2>
                        <p>{data.about}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}