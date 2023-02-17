import React from "react";

const Table7 = () => {
        const data = [  
                {
                        indicator: 'CS 1: Demonstrate ability to follow instructions (listening and reading for comprehension).',    
                        unacceptable: 'Unable to discern main message of reading material',    
                        below: 'Comprehends main message of reading material, but unable to provide specific relevant details of the material read',
                        meets: 'Demonstrates comprehension of the primary message through appropriate action and/or response.',
                        exceeds: 'Meets expectations, plus:\n\nDemonstrates effective synthesis of material read into current project or initiative.'  
                },  
                {    
                        indicator: 'CS 2: Demonstrate the ability to communicate orally using\nappropriate materials, language, non-verbal communication and effective graphical tools.',
                        unacceptable: 'Poor quality presentation with\nineffective materials; graphical\ntools not used; poor quality of\nspoken delivery',
                        below: 'Presentation not of a\nprofessional standard with\nmarginal material; graphical\ntools only partially effective;\nmarginal spoken delivery.',    
                        meets: 'Presentation of a\nprofessional standard using\nappropriate material that is\ntailored to target audience;\neffective use of graphics;\nprofessional quality spoken\ndelivery.',    
                        exceeds: 'Meets expectations, plus:\n\nPresentation is enlightening and\nengaging.'  
                },  
                {    
                        indicator: 'CS 3 – Demonstrate ability to articulate ideas in writing using appropriate technical language, and effective graphical tools.',    
                        unacceptable: 'Technical language is unclear,\nwith much jargon, presentation\nis incoherent, spelling grammar\nand syntax mostly incorrect,\ngraphical tools not used where\nappropriate.',    
                        below: 'Technical language is\nsometimes unclear or\ninappropriate to the audience,\nideas and arguments are\nunpersuasive; spelling grammar\nand syntax interfere with\nunderstanding; graphical tools\nused but only partly effective.',    
                        meets: 'Technical language is clear,\nand appropriate to the\naudience, ideas are\npersuasive, spelling,\ngrammar and syntax are\nmostly correct, graphical\ntools are used effectively.',    
                        exceeds: 'Meets expectations plus:\n\nWritten document is sufficiently\nengaging to be understood and\ninteresting to readers from other\ndisciplines'  
                }
        ];
        return(
                <table>
                <thead>
                        <tr>
                        <th>Indicator</th>
                        <th>Unacceptable</th>
                        <th>Below Expectations</th>
                        <th>Meets Expectations</th>
                        <th>Exceeds Expectations</th>
                        </tr>
                </thead>
                <tbody>
                        {data.map((row, index) => (
                        <tr key={index}>
                        <td>{row.indicator}</td>
                        <td>{row.unacceptable}</td>
                        <td>{row.below}</td>
                        <td>{row.meets}</td>
                        <td>{row.exceeds}</td>
                        </tr>
                        ))}
                </tbody>
                </table>
        );
};

export default Table7;
