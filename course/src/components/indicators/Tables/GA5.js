import React from 'react';
const Table5 = () => {
    const data = [
        {
            indicator: 'ET 1: Demonstrates ability to identify and select appropriate engineering tool(s) and resources',
            unacceptable: 'Applicability of an ET to a problem not recognized: ET not used!',
            below: 'Improper ET selected because underlying mathematical AND/OR engineering fundamentals not recognized.',
            meets: 'ET selection justified by comprehension of the underlying mathematical AND/OR engineering fundamentals.',
            exceeds: 'Meets expectation, plus: Limitations of the selected tool are identified and assessed.'
        },
        {
            indicator: 'ET 2: Demonstrates ability to apply appropriate engineering tool(s) and resources',
            unacceptable: 'ET solution is wildly wrong',
            below: 'ET solution is wrong AND/OR not checked by independent calculation.',
            meets: 'ET solution is correct AND checked by independent calculation',
            exceeds: 'Meets expectation, plus: Proficient in use of advanced engineering tool.'
        },
        {
            indicator: 'ET 3: Demonstrates ability to create/develop/adapt appropriate engineering tools',
            unacceptable: 'Unable to create simple Engineering tools or modify existing tools to a new purpose.',
            below: 'Creation/adaption of ET is incomplete AND/OR yields incorrect results.',
            meets: 'Creation/adaptation of ET is adequate AND yields correct results.',
            exceeds: 'Meets expectations, plus: ET created/adapted is sufficiently documented (or intuitive) that others can use it readily.'
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

export default Table5;

