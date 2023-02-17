import React from 'react';

const Table3 = () => {
    const data = [
        {
        indicator: "I 1: Demonstrate ability to define and plan the investigation successfully (whether experimental or analytical).",
        unacceptable: "No meaningful implementation plan.",
        below: "Implementation plan contains significant flaws concerning proposed methods, tools, design OR assumptions. ",
        meets: "Implementation plan proposes appropriate methods, tools, design, AND assumptions. ",
        exceeds: "Meets expectations, plus: Limitations and implications are completely identified."
        },
        {
        indicator: "I 2: Demonstrate ability to conduct an investigation successfully.",
        unacceptable: "Standard protocols ignored, leading to safety concerns. ",
        below: "Standard protocols not appropriately implemented, raising safety concerns",
        meets: "Investigation conducted safely using standard protocols where available. ",
        exceeds: "Meets expectations, plus: Successfully develops new protocols to ensure possible safety concerns are addressed"
        },
        {
        indicator: "I 3: Demonstrate ability to analyse and interpret data to reach valid conclusions.",
        unacceptable: "No meaningful analysis of data, leading to invalid conclusions",
        below: "Conclusions are not justified by the data analysis presented OR experimental error and its impact not quantified.",
        meets: "Conclusions justified by appropriate data analysis AND quantification of experimental error and its impact.",
        exceeds: "Meets expectations, plus: Conclusions are framed in the context of prior knowledge and recommendations for future work are provided."
        }
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

export default Table3;
