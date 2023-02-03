import React from 'react';

const data = [
    {
        indicator: 'EPM 1 – Demonstrate ability to incorporate economics into engineering projects',
        levels: [
        'No recognition of need to quantify economic benefits and costs of an engineering activity.',
        'Economic benefit/cost analysis is based on incomplete or superficial model OR\nPotential uncertainty of specific costs or benefits unrecognized.',
        'Financial benefit/cost analysis is complete and accurate. AND\nUncertainties of specific costs or benefits are identified and quantified.',
        'Meets expectations, plus:\n\nProactive measures taken to quantify accurately uncertain costs or benefits',
        ],
    },
    {
        indicator: 'EPM 2 – Demonstrate ability to manage time, budget and human resources of a project',
        levels: [
        'Unable to logically breakdown the activities and resources of the project.',
        'Project plans do not consider all factors (time, budget, human resources) OR include unrealistic assumptions',
        'Project plans are complete, logically ordered, and realistic. AND\nCritical activities are explicitly identified.',
        'Meets expectations, plus:\n\nProject plan includes contingency planning for unexpected factors.',
        ],
    },
    {
        indicator: 'EPM 3 – Demonstrate ability to incorporate risk management into engineering',
        levels: [
        'Unaware of risk management techniques',
        'Insufficient awareness of risk management techniques to be able to apply them effectively.',
        'Sufficient awareness of risk management techniques to be able to apply them effectively.',
        'Insightful awareness of risk management techniques and instinctive use of their application.',
        ],
    },
    {
        indicator: 'EPM 4 – Demonstrate ability to incorporate change management into engineering',
        levels: [
        'Unaware of change management techniques',
        'Insufficient awareness of change management techniques to be able to apply them effectively.',
        'Sufficient awareness of change management techniques to be able to apply them effectively.',
        'Insightful awareness of change management techniques and instinctive use of their application.',
        ],
    },
    ];

    const Table11 = () => {
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
                {row.levels.map((level, levelIndex) => (
                <td key={levelIndex}>{level}</td>
                ))}
            </tr>
            ))}
        </tbody>
        </table>
    );
};

export default Table11;
