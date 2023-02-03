import React from 'react';

const Table5 = () => (
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
            <td>ET 1 – Demonstrates ability to identify and select appropriate engineering tool(s) and resources</td>
            <td>Applicability of an ET to a problem not recognized: ET not used!</td>
            <td>Improper ET selected because underlying mathematical AND/OR engineering fundamentals not recognized.</td>
            <td>ET selection justified by comprehension of the underlying mathematical AND/OR engineering fundamentals.</td>
            <td>Meets expectation, plus: Limitations of the selected tool are identified and assessed.</td>
        </tr>
        <tr>
            <td>ET 2 – Demonstrates ability to apply appropriate engineering tool(s) and resources</td>
            <td>ET solution is wildly wrong</td>
            <td>ET solution is wrong AND/OR not checked by independent calculation.</td>
            <td>ET solution is correct AND checked by independent calculation</td>
            <td>Meets expectation, plus: Proficient in use of advanced engineering tool.</td>
        </tr>
        <tr>
            <td>ET 3 – Demonstrates ability to create/develop/adapt appropriate engineering tools</td>
            <td>Unable to create simple Engineering tools or modify existing tools to a new purpose.</td>
            <td>Creation/adaption of ET is incomplete AND/OR yields incorrect results.</td>
            <td>Creation/adaptation of ET is adequate AND yields correct results.</td>
            <td>Meets expectations, plus: ET created/adapted is sufficiently documented (or intuitive) that others can use it readily.</td>
        </tr>
        </tbody>
    </table>
);

export default Table5;
