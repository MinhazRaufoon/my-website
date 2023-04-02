import archImg from "../../assets/raspnet/architecture.png";

export function RaspnetProject() {
  return (
    <>
      <h1>RaspNet - Raspberry pi communication protocol</h1>
      <h2>Motivation & context</h2>
      <p>
        This project contains the solutions of the lab tasks for the course
        "Embedded Software Lab (565040)". The goal of this project is to
        implement Layer 1 to Layer 4 of the{" "}
        <a
          href="https://osg.informatik.tu-chemnitz.de/lehre/emblab/protocol.pdf"
          target="_blank"
          rel="noreferrer"
        >
          RaspNet
        </a>
        , a communication protocol for Raspberry Pi in a unidirectional
        token-ring infrastructure.
      </p>

      <h2>Software architecture</h2>
      <img src={archImg} alt="Raspnet software architecture" />

      <h2>Hardware requirements</h2>
      <ul>
        <li>Raspberry Pi B+</li>
        <li>Gertboard v2.0 with ATMega 328p microcontroller</li>
      </ul>
    </>
  );
}
