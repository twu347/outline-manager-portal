import React from 'react';

const Table9 = () => {
    const data = [
        {
            indicator: 'IESE 1: Ability to analyse the interactions of engineering with economic, social, health, safety, legal and cultural aspects of society.',
            unacceptable: 'No awareness of impact of engineering on economic aspects of society.',
            below: 'Unable to analyse effectively the impact of engineering on the society and environment.',
            meets: 'Able to quantify accurately the impact of engineering on the society and environment.',
            exceeds: 'Meets expectations plus: Analysis takes into account the uncertainty of prediction of interaction with society and environment.'
        },
        {
            indicator: 'IESE 2: Demonstrate understanding of the concept of sustainable design and development.',
            unacceptable: 'Sustainability ignored when making engineering decisions.',
            below: 'Proposed engineering solutions address a small subset of the relevant sustainable design and development issues.',
            meets: 'Sustainability of proposed solutions is appropriately quantified and addressed.',
            exceeds: 'Meets expectations, plus: Aspects of proposed engineering solutions encompass innovative “green”/sustainable design principles, materials and/or technologies.'
        },
        {
            indicator: 'IESE 3: Demonstrate understanding of the concept of environmental stewardship.',
            unacceptable: 'Environmental stewardship ignored when making engineering decisions.',
            below: 'Proposed engineering solutions address a small subset of the relevant environmental stewardship considerations.',
            meets: 'Environmental stewardship is appropriately quantified and addressed in engineering solutions.',
            exceeds: 'Meets expectations, plus: Aspects of proposed engineering solutions encompass innovative environmental stewardship initiatives.'
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

export default Table9;
