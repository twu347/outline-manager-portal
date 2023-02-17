import React from 'react';

const Table11 = () => {
    const data = [
        {
            indicator: "EPM 1: Demonstrate ability to incorporate economics into engineering projects",
            unacceptable: "No recognition of need to quantify economic benefits and costs of an engineering activity.",
            below: "Economic benefit/cost analysis is based on incomplete or superficial model OR\nPotential uncertainty of specific costs or benefits unrecognized.",
            meets: "Financial benefit/cost analysis is complete and accurate. AND\nUncertainties of specific costs or benefits are identified and quantified.",
            exceeds: "Meets expectations, plus:\n\nProactive measures taken to quantify accurately uncertain costs or benefits"
        },
        {
            indicator: "EPM 2: Demonstrate ability to manage time, budget and human resources of a project",
            unacceptable: "Unable to logically breakdown the activities and resources of the project.",
            below: "Project plans do not consider all factors (time, budget, human resources) OR include unrealistic assumptions",
            meets: "Project plans are complete, logically ordered, and realistic. AND\nCritical activities are explicitly identified.",
            exceeds: "Meets expectations, plus:\n\nProject plan includes contingency planning for unexpected factors."
        },
        {
            indicator: "EPM 3: Demonstrate ability to incorporate risk management into engineering",
            unacceptable: "Unaware of risk management techniques",
            below: "Insufficient awareness of risk management techniques to be able to apply them effectively.",
            meets: "Sufficient awareness of risk management techniques to be able to apply them effectively.",
            exceeds: "Insightful awareness of risk management techniques and instinctive use of their application."
        },
        {
            indicator: "EPM 4: Demonstrate ability to incorporate change management into engineering",
            unacceptable: "Unaware of change management techniques",
            below: "Insufficient awareness of change management techniques to be able to apply them effectively.",
            meets: "Sufficient awareness of change management techniques to be able to apply them effectively.",
            exceeds: "Insightful awareness of change management techniques and instinctive use of their application."
        },
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
            {data.map(row => (
                <tr key={row.indicator}>
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


export default Table11;

