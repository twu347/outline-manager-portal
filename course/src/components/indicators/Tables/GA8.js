import React from 'react';
const Table8 = () => {
    const data = [
        {
            indicator: 'PR1: Familiarity with provincial engineering legislation and other relevant standards. (Individual)',
            unacceptable: 'Cannot recall the general content of the Professional Engineers Act.',
            below: 'Recalls some of the content of the Professional Engineers Act.',
            meets: 'Recalls AND comprehends content of the Professional Engineers Act.',
            exceeds: 'Meets expectations, plus:\n\nIs proactive in anticipating and resolving possible conflicts involving Professional Engineers Act in specific engineering circumstances.'
        },
        {
            indicator: 'PR2: Recognizes role of protection of public. (Public)',
            unacceptable: 'Unaware of role of protection of the public and public interest in decision making.',
            below: 'Recalls some aspects of role of protection of the public and public interest in decision making.',
            meets: 'Recalls AND comprehends role of protection of the public and public interest in decision making.',
            exceeds: 'Meets expectations, plus:\n\nIs proactive in applying role of protection of the public and public interest in specific engineering circumstances.'
        },
        {
            indicator: 'PR3: Shows an awareness of the PEO and the role of licensing.',
            unacceptable: 'Unaware of the PEO and the role of licensing.',
            below: 'Recalls some aspects of the PEO and the role of licensing.',
            meets: 'Recalls AND comprehends role of PEO and licensing.',
            exceeds: 'Meets expectations, plus:\n\nIs able to articulate the importance of licensure in a self-regulating profession.'
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

export default Table8;

