import "../styles/Editor.css";
import PersonalDetailsSection from "./PersonalDetails";
import EducationSection from "./Education";

export default function Editor({ modifiers, data }) {
    return (
        <div id="editor">
            <h1>CV Builder</h1>
            <PersonalDetailsSection modifiers={modifiers} data={data}/>
            <EducationSection modifiers={modifiers} data={data} />
        </div>
    );
}