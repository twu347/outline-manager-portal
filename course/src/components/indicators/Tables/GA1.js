import React from "react";

const Table1 = () => {
    const data = [
        {
        Indicator: "KB 1.  Demonstrate competence in mathematics.",
        Unnacceptable: "Less than 50% on Math final examination questions testing Knowledge Base",
        Below: "50% to 59% on Math final examination questions testing Knowledge Base",
        Meets: "60% to 84% on Math final examination questions testing Knowledge Base",
        Exceeds: "85% to 100% on Math final examination questions testing Knowledge Base"
        },
        {
        Indicator: "KB 2.  Demonstrate competence in physical sciences.",
        Unnacceptable: "Less than 50% on Chemistry and Physics final examination questions testing Knowledge Base",
        Below: "50% to 59% on Chemistry and Physics final examination questions testing Knowledge Base",
        Meets: "60% to 84% Chemistry and Physics final examination questions testing Knowledge Base",
        Exceeds: "85% to 100% Chemistry and Physics final examination questions testing Knowledge Base"
        },
        {
        Indicator: "KB 3.  Demonstrate competence in engineering fundamentals appropriate to engineering discipline.",
        Unnacceptable: "Unable to articulate engineering fundamentals.\n\n(Less than 50% on Engineering Sciences assessment questions testing Knowledge Base.)",
        Below: "Recollection of engineering fundamentals is inaccurate – fundamentals clearly wrong.\n\n(50% to 59% on Engineering Sciences assessment questions testing Knowledge Base.)",
        Meets: "Competent in the essential aspects of engineering fundamentals.\n\n(60% to 84% on Engineering Sciences assessment questions testing Knowledge Base.)",
        Exceeds: "Meets expectations plus:  Recognizes nuances of engineering fundamentals to be able to critically evaluate current academic literature in this light.\n\n(85% to 100% on Engineering assessment questions testing Knowledge Base Sciences.)"
        },
        {
        Indicator: "KB 4.  Demonstrate competence in specialized engineering knowledge appropriate to engineering discipline.",
        Unnacceptable: "Unable to articulate specialized discipline-specific engineering knowledge.\n\n(Less than 50% on Engineering Sciences assessment questions testing Knowledge Base.)",
        Below: "Recollection of specialized discipline-specific engineering knowledge is inaccurate – fundamentals clearly wrong.\n\n(50% to 59% on Engineering Sciences assessment questions testing Knowledge Base.)",
        Meets: "Competent in the essential aspects of discipline-specific engineering knowledge.\n\n(60% to 84% on Engineering Sciences assessment questions testing Knowledge Base.)",
        Exceeds: "Meets expectations plus:  Recognizes nuances of discipline-specific engineering knowledge to be able to critically evaluate current academic literature in this light.\n\n(85% to 100% on Engineering Sciences assessment questions testing Knowledge Base.)"
        }
    ];

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
            {data.map((row, index) => (
            <tr key={index}>
                <td>{row.Indicator}</td>
                <td>{row.Unnacceptable}</td>
                <td>{row.Below}</td>
                <td>{row.Meets}</td>
                <td>{row.Exceeds}</td>
            </tr>
            ))}
        </tbody>
        </table>
    );
};

export default Table1;
