import React from "react";

const Table9 = () => {
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
            <td>IESE 1 Ability to analyse the interactions of engineering with economic, social, health, safety, legal and cultural aspects of society.</td>
            <td>No awareness of impact of engineering on economic aspects of society.</td>
            <td>Unable to analyse effectively the impact of engineering on the society and environment.</td>
            <td>Able to quantify accurately the impact of engineering on the society and environment.</td>
            <td>Meets expectations plus:

    Analysis takes into account the uncertainty of prediction of interaction with society and environment.</td>
            </tr>
            <tr>
            <td>IESE 2 – Demonstrate understanding of the concept of sustainable design and development.</td>
            <td>Sustainability ignored when making engineering decisions.</td>
            <td>Proposed engineering solutions address a small subset of the relevant sustainable design and development issues.</td>
            <td>Sustainability of proposed solutions is appropriately quantified and addressed.</td>
            <td>Meets expectations, plus:

    Aspects of proposed engineering solutions encompass innovative “green”/sustainable design principles, materials and/or technologies.</td>
            </tr>
            <tr>
            <td>IESE 3 – Demonstrate understanding of the concept of environmental stewardship.</td>
            <td>Environmental stewardship ignored when making engineering decisions.</td>
            <td>Proposed engineering solutions address a small subset of the relevant environmental stewardship considerations.</td>
            <td>Environmental stewardship is appropriately quantified and addressed in engineering solutions.</td>
            <td>Meets expectations, plus:

    Aspects of proposed engineering solutions encompass innovative environmental stewardship initiatives.</td>
            </tr>
        </tbody>
        </table>
    );
};

export default Table9;
