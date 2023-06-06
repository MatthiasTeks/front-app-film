import React, { useState } from "react";
import './Resume.css';

interface TabPanelProps {
    children: React.ReactNode;
    value: number;
    index: number;
}

const Resume = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.MouseEvent<HTMLDivElement>, newValue: number) => {
        setValue(newValue);
    };

    function TabPanel(props: TabPanelProps) {
        const { children, value, index } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
            >
                {value === index && (
                    <div>
                        {children}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div id="bande-demo-resume" className="flex row">
            <div id="bande-demo-resume-holder" className="flex column start justifyCenter blackText" style={{height: "100%", width:"100%"}}>
                <div className="flex column" style={{ width: "100%" }}>
                    <h2 className="is2">Une { value === 0 ? "bande démo" : "self-tape"}, c'est quoi ?</h2>
                    <div className="select-type" style={{ borderBottom: "1px solid black", width: "100%" }}>
                        <div className={value === 0 ? "active-tab" : "inactive-tab"} onClick={(e) => handleChange(e, 0)}>BANDE-DEMO</div>
                        <div className={value === 1 ? "active-tab" : "inactive-tab"} onClick={(e) => handleChange(e, 1)}>SELF-TAPE</div>
                    </div>
                </div>
                <div id="bande-demo-resume-content" className="flex column">
                    <TabPanel value={value} index={0}>
                        La bande démo c'est ton CV visuel.
                        C'est la meme chose qu'un book photo mais mis en image.
                        C'est la premiere image que l'on voit de toi lors d'un casting.
                        La bande démo c'est ton CV visuel. C'est la meme chose qu'un book photo mais mis en image.
                        C'est la premiere image que l'on voit de toi lors d'un casting. La bande démo c'est ton CV visuel.
                        C'est la meme chose qu'un book photo mais mis en image. C'est la premiere image que l'on voit de toi lors d'un casting.
                        La bande démo c'est ton CV visuel. C'est la meme chose qu'un book photo mais mis en image.
                        C'est la premiere image que l'on voit de toi lors d'un casting. La bande démo c'est ton CV visuel.
                        C'est la meme chose qu'un book photo mais mis en image. C'est la premiere image que l'on voit de toi lors d'un casting.
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        La self-tape c'est ton CV visuel.
                        C'est la meme chose qu'un book photo mais mis en image.
                        C'est la premiere image que l'on voit de toi lors d'un casting.
                        La bande démo c'est ton CV visuel. C'est la meme chose qu'un book photo mais mis en image.
                        C'est la premiere image que l'on voit de toi lors d'un casting. La bande démo c'est ton CV visuel.
                        C'est la meme chose qu'un book photo mais mis en image. C'est la premiere image que l'on voit de toi lors d'un casting.
                        La bande démo c'est ton CV visuel. C'est la meme chose qu'un book photo mais mis en image.
                        C'est la premiere image que l'on voit de toi lors d'un casting. La bande démo c'est ton CV visuel.
                        C'est la meme chose qu'un book photo mais mis en image. C'est la premiere image que l'on voit de toi lors d'un casting.
                    </TabPanel>
                </div>
            </div>
        </div>
    )
}

export default Resume;
