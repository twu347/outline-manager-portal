import React from 'react';

const Table12 = () => {
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
            <td>LL 1 – Ability to assess limitations in knowledge and skills</td>
            <td>No recognition of the need to to identify and address gaps in knowledge.</td>
            <td>Ineffective at objective identification of personal strengths and weaknesses.</td>
            <td>Successfully able to identify and address personal strengths and weaknesses.</td>
            <td>Meets expectations, plus:<br />Independently displays curiosity about new technical developments and practices.</td>
            </tr>
            <tr>
            <td>LL 2 – Learn independently</td>
            <td>Unable to learn independently.</td>
            <td>Ineffective when trying to learn independently.</td>
            <td>Able to learn independently within fields that have previously been learned at a less-challenging level.</td>
            <td>Meets expectations, plus:<br />Able to learn independently within new fields that have not previously been learned.</td>
            </tr>
        </tbody>
        </table>
    );
};

export default Table12;
