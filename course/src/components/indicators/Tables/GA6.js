import React from "react";

const Table6 = () => {
    const data = [
        {
            indicator: "ITW 1- Demonstrates ability to perform responsibly",
            unacceptable: "Student NEITHER accepts responsibilities NOR follows through on commitments, resulting in major delays to team progress.",
            below: "Student accepts responsibilities but tasks are incomplete or incorrectly performed, requiring remediation by other team members.",
            meets: "Student accepts responsibilities AND completes required tasks effectively and on time.",
            exceeds: "Meets expectations, plus: Student takes initiative in supporting other team members to achieve their responsibilities."
        },
        {
            indicator: "ITW 2- Demonstrates ability to contribute to team goals",
            unacceptable: "No contribution made to establishing team goals AND/OR member responsibilities in the context of diversity of learning and working preferences.",
            below: "Limited contribution made to establishing team goals AND/OR member responsibilities. Unable to consistently recognize diversity of learning OR working preferences",
            meets: "Active participation in establishing team goals AND member responsibilities that recognizes the diversity of learning and working preferences.",
            exceeds: "Meets expectations, plus: Student takes initiative in identifying areas for improvement of team dynamics by, e.g. generating ideas, providing constructive feedback to team members, etc."
        },
        {
            indicator: "ITW3-Demonstrate ability to evaluate peer and self performance based on team effectiveness",
            unacceptable: "Does not participate in peer evaluation or provides inadequate judgement of self/peer performance",
            below: "Participates in peer/self evaluation, providing inconsistent judgement of self/peer performance",
            meets: "Participates in peer/self evaluation, providing accurate judgement of self/peer performance",
            exceeds: "Meets expectations, plus: Identifies methods to improve team effectiveness based on observed weaknesses."
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

export default Table6;
