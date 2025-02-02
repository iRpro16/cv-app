import "../styles/Editor.css";
import PersonalDetailsSection from "./PersonalDetails";
import EducationSection from "./Education";
import EmploymentSection from "./Employment";

export default function Editor({ modifiers, data }) {
    return (
        <div id="editor">
            <PersonalDetailsSection modifiers={modifiers} data={data}/>
            <EducationSection modifiers={modifiers} data={data} />
            <EmploymentSection modifiers={modifiers} data={data}/>
        </div>
    );
}