import React from "react";

const Table10 = () => {
    const data = [
        {
            indicator: "EE 1: Demonstrates knowledge of professional ethics.",
            unacceptable: "Unable to articulate professional ethics.\n\n(Less than 50% on Ethics assessment questions testing Knowledge Base.)",
            below: "Recollection of professional ethics is inaccurate – fundamentals clearly wrong.\n\n(50% to 59% on Ethics assessment questions testing Knowledge Base.)",
            meets: "Competent in the essential aspects of professional ethics.\n\n(60% to 84 on Ethics assessment questions testing Knowledge Base.)",
            exceeds: "Meets expectations plus:  Recognizes nuances of professional ethics to be able to critically evaluate current academic literature in this light.\n\n(85% to 100% on Ethics assessment questions testing Knowledge Base)"
        },
        {
            indicator: "EE 2: Application of Ethical Behaviour.",
            unacceptable: "Does not recognize an ethical dilemma.",
            below: "Vaguely recognizes an ethical dilemma but is inconsistent when applying ethical principles to specific engineering case studies.",
            meets: "Recognizes ethical dilemmas AND applies to specific engineering case studies.",
            exceeds: "Is proactive anticipating potential ethical dilemmas AND devising means to mitigate them"
        },
        {
            indicator: "EE 3: Apply the principles of professional accountability.",
            unacceptable: "Actively avoids accepting responsibility for actions.",
            below: "Accepts responsibility only after repeated urging.",
            meets: "Accepts responsibility voluntarily or when asked to do so.",
            exceeds: "Meets expectations, plus:\n\nDoes not accept responsibility for things (s)he has no control over."
        },
        {
            indicator: "EE 4: Awareness of the principles of equity.",
            unacceptable: "Demonstrates complete lack of sensitivity to cultural AND/OR gender issues.",
            below: "Recognizes when actions by others are inappropriate from a cultural or gender perspective, but is passive in addressing these lapses.",
            meets: "Actively steps in to resolve instances when actions by others are inappropriate from a cultural or gender perspective.",
            exceeds: "Proactively sets “ground rules” to discourage gender- or culturally inappropriate actions by others."
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

export default Table10;


