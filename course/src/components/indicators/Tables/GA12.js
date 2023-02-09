import React from 'react';

const Table12 = () => {
    const data = [
        {
            indicator: "LL 1: Ability to assess limitations in knowledge and skills",
            unacceptable: "No recognition of the need to to identify and address gaps in knowledge.",
            below: "Ineffective at objective identification of personal strengths and weaknesses.",
            meets: "Successfully able to identify andaddress personal strengths and weaknesses.",
            exceeds: "Meets expectations, plus: Independently displays curiosity about new technical developments and practices."
        },
        {
            indicator: "LL 2: Learn independently",
            unacceptable: "Unable to learn independently.",
            below: "Ineffective when trying to learn independently.",
            meets: "Able to learn independently within fields that have previously been learned at a less-challenging level.",
            exceeds: "Meets expectations, plus: Able to learn independently within new fields that have not previously been learned."
        },
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
            {data.map(row => (
                <tr key={row.indicator}>
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


export default Table12;
