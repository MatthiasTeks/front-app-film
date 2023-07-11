import { FC } from "react";
import { OPTIONS_PROJET } from "../../../../constants/options";
import './Resume.css';

type Props = {
    filter: string,
    setFilter: (value: string) => void,
}

export const Resume: FC<Props> = ({filter, setFilter}) => {
    return (
        <div id="bande-demo-resume" className="flex row">
            <div id="bande-demo-resume-holder" className="flex column start justifyCenter blackText">
                <div className="flex column">
                    <h2 className="is2">Une {filter === "all" ? "bande-demo" : filter}, c'est quoi ?</h2>
                    <div className="select-type">
                        { OPTIONS_PROJET.map((option, index) => {
                            return (
                                <div 
                                    className={filter === option.value ? "active-tab" : "inactive-tab"} 
                                    onClick={() => setFilter(option.value)}
                                    key={`${option.label}_${index}`}
                                >
                                    {option.value}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div id="bande-demo-resume-content" className="flex column">
                    <p>{OPTIONS_PROJET.find(element => element.value === filter)?.description}</p>
                </div>
            </div>
        </div>
    );
};
