import "../styles/Languages.css";
import handleObjChange from "../utils/handleObjectChange";

export default function LanguagesSection ({ modifiers, data }) {
    return (
        <section id="languages-section">
            <hr />
                <h2>Languages</h2>
            <hr />
            <LanguagesComponent modifiers={modifiers} data={data}/>
        </section>
    )
}

function LanguagesComponent ({ modifiers, data }) {
    return (
        <div className="languages-cont-side">
            {data.languages.map(language => {
                return (
                    <input 
                    type="text" 
                    key={language.id}
                    defaultValue={language.language}
                    onInput={(e) => {
                        let newObject = handleObjChange(
                            data.languages,
                            'language',
                            language.language,
                            e.target.value
                        )
                        modifiers.setLanguages(newObject);
                    }}
                />
                )
            })}
        </div>
    )
}