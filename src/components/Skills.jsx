import "../styles/Skills.css";
import handleObjChange from "../utils/handleObjectChange";
import { CirclePlus } from "lucide-react";

export default function SkillsSection ({ modifiers, data }) {
    return (
        <section id="skills-section">
            <hr />
                <h2>Skills</h2>
            <hr />
            <SkillsComponent modifiers={modifiers} data={data}/>
        </section>
    )
}

function SkillsComponent ({ modifiers, data }) {
    return (
        <div className="skills-cont-side">
            {data.skills.map(skill => {
                return (
                    <input 
                    type="text" 
                    key={skill.id}
                    defaultValue={skill.skill}
                    onInput={(e) => {
                        let newObject = handleObjChange(
                            data.skills,
                            'skill',
                            skill.skill,
                            e.target.value
                        )
                        modifiers.setSkills(newObject);
                    }}
                />
                )
            })}
        </div>
    )
}