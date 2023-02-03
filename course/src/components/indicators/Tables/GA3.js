import React from 'react';

const Table3 = () => {
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
            <tr>
            <td>I 1: Demonstrate ability to define and plan the investigation successfully (whether experimental or analytical).</td>
            <td>No meaningful implementation plan.</td>
            <td>Implementation plan contains significant flaws concerning proposed methods, tools, design OR assumptions.</td>
            <td>Implementation plan proposes appropriate methods, tools, design, AND assumptions.</td>
            <td>Meets expectations, plus: 

    Limitations and implications are completely identified.</td>
            </tr>
            <tr>
            <td>I 2: Demonstrate ability to conduct an investigation successfully.</td>
            <td>Standard protocols ignored, leading to safety concerns.</td>
            <td>Standard protocols not appropriately implemented, raising safety concerns.</td>
            <td>Investigation conducted safely using standard protocols where available.</td>
            <td>Meets expectations, plus: 

    Successfully develops new protocols to ensure possible safety concerns are addressed.</td>
            </tr>
            <tr>
            <td>I 3: Demonstrate ability to analyse and interpret data to reach valid conclusions.</td>
            <td>No meaningful analysis of data, leading to invalid conclusions.</td>
            <td>Conclusions are not justified by the data analysis presented OR
    experimental error and its impact not quantified.</td>
            <td>Conclusions justified by appropriate data analysis AND quantification of experimental error and its impact.</td>
            <td>Meets expectations, plus:

    Conclusions are framed in the context of prior knowledge and recommendations for future work are provided.</td>
            </tr>
        </tbody>
        </table>
    );
};

export default Table3;
