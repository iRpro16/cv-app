import "../styles/Editor.css";
import PersonalDetailsSection from "./PersonalDetails";

export default function Editor({ modifiers, data }) {
    return (
        <div id="editor">
            <h1>CV Builder</h1>
            <PersonalDetailsSection modifiers={modifiers} data={data}/>
        </div>
    );
}