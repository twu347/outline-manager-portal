import React from "react";

const Table4 = () => {
    const data = [
        {
        indicator: "D 1: Demonstrate ability to frame a complex, open-ended design problem in engineering terms.",
        unacceptable: "Problem statement, objectives and constraints are missing or entirely incorrect.",
        below: "Problem statement is partially incorrect or incomplete OR\nObjectives and constraints are partially or incorrectly expressed in engineering terms.",
        meets: "Problem statement is sufficient AND\nObjectives and constraints are correctly defined in engineering terms.",
        exceeds: "Meets expectations, plus:\n\nSignificance and nature of problem identified in context of societal and cultural considerations."
        },
        {
        indicator: "D 2: Demonstrate ability to generate a diverse set of candidate engineering design solutions.",
        unacceptable: "No alternative solutions are developed.",
        below: "One or more alternatives are ignored OR developed concepts are based on a limited set of physical principles.",
        meets: "Multiple alternative solutions are generated AND solutions are based on the principles embodied by the design objectives and constraints.",
        exceeds: "Multiple concepts comprise a complete range of physical embodiments, some of them encompassing innovative “out of the box” solutions."
        },
        {
        indicator: "D 3: Demonstrate ability to select candidate engineering design solutions for further development.",
        unacceptable: "The solution is chosen without any justification.",
        below: "Some justification is provided, but\nwithout consideration for ONE OF\nthe following:\nTechnical soundness,\nenvironmental impact, economics,\npublic/user health & safety.",
        meets: "Merit of alternative solutions is\nappropriately evaluated, leading to\nselection of preferred concept\nconsidering the following:\nTechnical soundness, environmental\nimpact, economics, public/user\nhealth & safety.",
        exceeds: "Meets expectations, plus:\n\nMerits of alternative solutions is\nevaluated using higher-order system\nperformance metrics."
        },
        {
        indicator: "D 4: Demonstrate ability to advance an engineering design to a defined end state – completion.",
        unacceptable: "The design is not developed to a defined end state because little or no engineering analysis is conducted.",
        below: "The design is developed toward a defined end state but is incomplete OR based on flawed engineering analysis and/or judgment.",
        meets: "The design is developed to the defined end state based on sound engineering analysis and judgment. Design performance assessed in the context of problem definition to identify potential improvements.",
        exceeds: "Meets expectations, plus:\n\nAdvanced validation conducted using analysis, testing, simulation.  Compliance with relevant codes & standards is demonstrated."
        },
    ];

    return (
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

export default Table4;
