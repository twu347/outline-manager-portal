import React from "react";

const Table6 = () => {
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
            <td>ITW 1- Demonstrates ability to perform responsibly</td>
            <td>
                Student NEITHER accepts responsibilities NOR follows through on
                commitments, resulting in major delays to team progress.
            </td>
            <td>
                Student accepts responsibilities but tasks are incomplete or
                incorrectly performed, requiring remediation by other team members.
            </td>
            <td>
                Student accepts responsibilities AND completes required tasks
                effectively and on time.
            </td>
            <td>
                Meets expectations, plus: Student takes initiative in supporting
                other team members to achieve their responsibilities.
            </td>
            </tr>
            <tr>
            <td>ITW 2- Demonstrates ability to contribute to team goals</td>
            <td>
                No contribution made to establishing team goals AND/OR member
                responsibilities in the context of diversity of learning and working
                preferences.
            </td>
            <td>
                Limited contribution made to establishing team goals AND/OR member
                responsibilities. Unable to consistently recognize diversity of
                learning OR working preferences
            </td>
            <td>
                Active participation in establishing team goals AND member
                responsibilities that recognizes the diversity of learning and working
                preferences.
            </td>
            <td>
                Meets expectations, plus: Student takes initiative in identifying
                areas for improvement of team dynamics by, e.g. generating ideas,
                providing constructive feedback to team members, etc.
            </td>
            </tr>
            <tr>
            <td>
                ITW3-Demonstrate ability to evaluate peer and self performance based
                on team effectiveness
            </td>
            <td>
                Does not participate in peer evaluation or provides inadequate
                judgement of self/peer performance
            </td>
            <td>
                Participates in peer/self evaluation, providing inconsistent
                judgement of self/peer performance
            </td>
            <td>
                Participates in peer/self evaluation, providing accurate judgement
                of self/peer performance
            </td>
            <td>
                Meets expectations, plus: Identifies methods to improve team
                effectiveness based on observed weaknesses.
            </td>
            </tr>
        </tbody>
        </table>
    );
};

export default Table6;
