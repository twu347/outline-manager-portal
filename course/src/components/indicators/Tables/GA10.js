import React from "react";

const Table10 = () => {
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
            <td>EE 1 - Demonstrates knowledge of professional ethics.</td>
            <td>
                Unable to articulate professional ethics.
                <br />
                (Less than 50% on Ethics assessment questions testing Knowledge Base.)
            </td>
            <td>
                Recollection of professional ethics is inaccurate – fundamentals clearly wrong.
                <br />
                (50% to 59% on Ethics assessment questions testing Knowledge Base.)
            </td>
            <td>
                Competent in the essential aspects of professional ethics.
                <br />
                (60% to 84 on Ethics assessment questions testing Knowledge Base.)
            </td>
            <td>
                Meets expectations plus: Recognizes nuances of professional ethics to be able to critically evaluate current academic literature in this light.
                <br />
                (85% to 100% on Ethics assessment questions testing Knowledge Base)
            </td>
            </tr>
            <tr>
            <td>EE 2 – Application of Ethical Behaviour.</td>
            <td>Does not recognize an ethical dilemma.</td>
            <td>
                Vaguely recognizes an ethical dilemma but is inconsistent when applying ethical principles to specific engineering case studies.
            </td>
            <td>
                Recognizes ethical dilemmas AND applies to specific engineering case studies.
            </td>
            <td>
                Is proactive anticipating potential ethical dilemmas AND devising means to mitigate them
            </td>
            </tr>
            <tr>
            <td>EE 3 – Apply the principles of professional accountability.</td>
            <td>Actively avoids accepting responsibility for actions.</td>
            <td>Accepts responsibility only after repeated urging.</td>
            <td>Accepts responsibility voluntarily or when asked to do so.</td>
            <td>
                Meets expectations, plus:
                <br />
                Does not accept responsibility for things (s)he has no control over.
            </td>
            </tr>
            <tr>
            <td>EE 4 – Awareness of the principles of equity.</td>
            <td>
                Demonstrates complete lack of sensitivity to cultural AND/OR gender issues.
            </td>
            <td>
                Recognizes when actions by others are inappropriate from a cultural or gender perspective, but is passive in addressing these lapses.
            </td>
            <td>
                Actively steps in to resolve instances when actions by others are inappropriate from a cultural or gender perspective.
            </td>
            <td>
                Proactively sets “ground rules” to discourage gender- or culturally inappropriate actions by others.
            </td>
            </tr>
        </tbody>
        </table>
    );
};

export default Table10;


