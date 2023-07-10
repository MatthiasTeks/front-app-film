import React, { FC, useState } from "react";
import './Resume.css';

interface TabPanelProps {
    children: React.ReactNode;
    value: number;
    index: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && <div>{children}</div>}
        </div>
    );
}

const tabContent = [
  "La bande démo c'est ton CV visuel. C'est la même chose qu'un book photo mais mis en image. C'est la première image que l'on voit de toi lors d'un casting. La bande démo c'est ton CV visuel. C'est la même chose qu'un book photo mais mis en image. C'est la première image que l'on voit de toi lors d'un casting.",
  "La self-tape c'est ton CV visuel. C'est la même chose qu'un book photo mais mis en image. C'est la première image que l'on voit de toi lors d'un casting. La bande démo c'est ton CV visuel. C'est la même chose qu'un book photo mais mis en image. C'est la première image que l'on voit de toi lors d'un casting."
];

export const Resume: FC = () => {
    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.MouseEvent<HTMLDivElement>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div id="bande-demo-resume" className="flex row">
            <div id="bande-demo-resume-holder" className="flex column start justifyCenter blackText">
                <div className="flex column">
                    <h2 className="is2">Une { value === 0 ? "bande démo" : "self-tape"}, c'est quoi ?</h2>
                    <div className="select-type">
                        <div className={value === 0 ? "active-tab" : "inactive-tab"} onClick={(e) => handleChange(e, 0)}>BANDE-DEMO</div>
                        <div className={value === 1 ? "active-tab" : "inactive-tab"} onClick={(e) => handleChange(e, 1)}>SELF-TAPE</div>
                    </div>
                </div>
                <div id="bande-demo-resume-content" className="flex column">
                    <TabPanel value={value} index={0}>{tabContent[0]}</TabPanel>
                    <TabPanel value={value} index={1}>{tabContent[1]}</TabPanel>
                </div>
            </div>
        </div>
    );
};
