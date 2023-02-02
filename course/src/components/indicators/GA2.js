import React from "react";

const Table2 = () => {
    const data = [
        {
        indicator: "PA 1: Demonstrate ability to define an engineering problem.",
        unacceptable: "Problem is not correctly stated or identified.",
        below: "Dissection of the problem into key components contains inaccuracies or omissions: known or unknown information incorrectly identified, uncertain quantities not recognized, definition includes inappropriate or unnecessary assumptions OR lacks necessary assumptions.",
        meets: "The key components of the problem are identified, including identification of known and unknown information, uncertain quantities. Assumptions are appropriate and justified.",
        exceeds: "Meets expectations plus: Statement of problem demonstrates creativity or insight or synthesis of information from multiple sources."
        },
        {
        indicator: "PA 2: Demonstrate ability to formulate a strategy to solve an engineering problem.",
        unacceptable: "No appropriate engineering principles or solution strategies are used.",
        below: "Engineering principles are incorrectly applied in one or more steps of the problem solution. OR Inappropriate or unnecessary assumptions are made. OR Solution plan is inefficient or not systematic.",
        meets: "Appropriate engineering principles and solution strategies are applied to solve each of the component parts. AND Assumptions are appropriate and justified. AND Solution plan is efficient, systematic.",
        exceeds: "Meets expectations, plus: Limitations of the models and strategies are identified, leading to possible alternatives."
        },
        {
        indicator: "PA 3: Demonstrate ability to reach substantiated conclusions.",
        unacceptable: "No solution or incorrect solution.",
        below: "Correct method has been incorrectly applied leading to incorrect solution. No assessment of reasonableness of conclusion.",
        meets: "Solution is complete AND essentially correct. Valid conclusions are drawn.",
        exceeds: "Meets expectations, plus: Recognizes the limitations of the solution."
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

export default Table2;
