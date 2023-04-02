import archImg from "../../assets/raspnet/architecture.png";
import { Project } from "../../types";

type PropType = {
  project: Project;
};

export function RaspnetProject(props: PropType) {
  const { project } = props;

  return (
    <>
      <h1>RaspNet - Raspberry pi communication protocol</h1>

      <h2>Motivation & context</h2>
      <p>
        This project contains the solutions of the{" "}
        <a
          href="https://drive.google.com/drive/folders/1UBUKR_UbXWZtBBsz3VJRgxTLIHHtU2pt?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          lab tasks
        </a>{" "}
        for the course "Embedded Software Lab (565040)" in Faculty of Computer
        Science, TU Chemnitz in 2021. The goal of this project is to implement
        Layer 1 to Layer 4 of the{" "}
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
      <img src={project.poster} alt="poster" />

      <h2>Hardware requirements</h2>
      <ul>
        <li>Raspberry Pi B+</li>
        <li>Gertboard v2.0 with ATMega 328p microcontroller</li>
      </ul>

      <h2>Implementation</h2>
      <h4>Tools and frameworks</h4>
      <ul>
        {project.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <h4>Software architecture</h4>
      <img src={archImg} alt="Raspnet software architecture" />

      <h2>How to use</h2>
      <h3>Environment setup</h3>
      <p>
        <ul>
          <li>
            Connect Gertboard v2.0 with ATMega 328p to the Raspberry Pi B+
            according to{" "}
            <a
              href="https://www.farnell.com/datasheets/1683444.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Gertboard User Manual
            </a>
          </li>
          <li>
            Install the following tools in the Raspberry Pi:
            <ul>
              <li>
                <a
                  href="https://download.savannah.gnu.org/releases/avrdude/"
                  target="_blank"
                  rel="noreferrer"
                >
                  avrdude
                </a>
              </li>
              <li>
                <a
                  href="https://www.nongnu.org/avr-libc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  avr-libc
                </a>
              </li>
              <li>
                <a
                  href="https://www.doxygen.nl/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  doxygen
                </a>
              </li>
              <li>
                <a
                  href="https://graphviz.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  graphviz
                </a>
              </li>
            </ul>
          </li>
          <li>
            Edit <b>"/opt/avdude/etc/avrdude.conf"</b> according to the
            following:
            <ul>
              <li>
                Uncomment the programmer definition having id <b>"linuxgpio"</b>
              </li>
              <li>
                Set the properties: <b>reset=8, sck=11, mosi=10, miso=9.</b>
              </li>
              <li>Save the file</li>
            </ul>
          </li>
          <li>Close this project (email me for source code)</li>
        </ul>
      </p>

      <h3>Build and execute source code</h3>
      <p>
        <ul>
          <li>Open a terminal at the project's root directory.</li>
          <li>
            Enter the following command to build the solution of a task and
            generate hex file. The build files will be written to the directory{" "}
            <b>"build/"</b>.
            <br />
            <br />
            <code>make lab=LAB_NUMBER task=TASK_NUMBER</code>
          </li>

          <li>
            Enter the following command to upload the hex code file to the
            Gertboard.
            <br />
            <br />
            <code>make upload</code>
            <br />
            <br />
            The code will start execution in the Gertboard with ATMega328p.
          </li>
          <li>
            Optionally, to disable the debug messages, comment out the line{" "}
            <b>"src/debug.h:5"</b>
          </li>
        </ul>
      </p>

      <h3>Interact with the program</h3>
      <p>
        The communication between Gertboard and Raspberry Pi is realized through
        UART. To interact with the program executing in the Gertboard, the
        following steps should be taken.
        <ul>
          <li>
            Execute any program by uploading the build files to the Gertboard.
            As an example, the solution of lab 4 task 5 contains all the
            features of the RaspNet protocol. To execute this program, enter the
            following commands.
            <br />
            <br />
            <code>make task=4 lab=5</code>
            <br />
            <code>make upload</code>
          </li>
          <li>
            Open a terminal and run minicom at 77 bps bandwidth to connect to
            the UART device. (<b>ama0</b>)<br />
            <br />
            <code>minicom -b 77 ama0</code>
          </li>
          <li>
            In the beginning, set the Raspnet layer 3 address, frequency (bps),
            and resend timeout (second). The following is an example where an
            address 120, frequency 1 bps, and timeout 1 second are set with
            commands <b>"A"</b>, <b>"F"</b>, and <b>"T"</b> respectively. The
            program will respond with <b>"OK"</b> for success and <b>"NOK"</b>{" "}
            for failure.
            <br />
            <br />
            <code>A120</code>
            <code>&gt;OK</code>
            <code>F00001</code>
            <code>&gt;OK</code>
            <code>T00001</code>
            <code>&gt;OK</code>
          </li>
          <li>
            The RaspNet protocol will initialize successfully when all the above
            3 parameters are set.
          </li>
          <li>
            To inquire if RaspNet is ready to accept data for transmission, the
            command <b>"S"</b> should be used. If the program responds with
            <b>"OK"</b>, it is ready to accept data from the Raspberry Pi.
            <br />
            <br />
            <code>S</code>
            <code>&gt;OK</code>
          </li>
          <li>
            If <b>"OK"</b> was received from above step, the data can be sent
            from minicom terminal to the RaspNet for transmission using command
            <b>"P"</b>. The following is an example of the command to send a
            datagram message <b>"HELLO"</b> of length <b>5</b> to the
            destination address <b>120</b>. The RaspNet will reply with{" "}
            <b>"OK"</b> if it accepted the input. After transmitting the input
            frame completely, it will reply <b>"SUCCESS"</b> with the layer 4 id
            (0-255) of the packet.
            <br />
            <br />
            <code>P1-120-005-HELLO</code>
            <code>&gt;OK</code>
            <code>...</code>
            <code>SUCCESS0</code>
          </li>
          <li>
            Similary, to send the above message as a non-datagram (with
            retransmission mechanism), the message should start with <b>P0</b>{" "}
            instead of <b>P1</b>.<br />
            <br />
            <code>P0-120-005-HELLO</code>
          </li>
          <li>
            When a message (e.g. <b>"HELLO"</b>) is received from another
            Raspberry Pi device, it will be displayed in the minicom terminal in
            the following way.
            <br />
            <br />
            <code>&gt;R005HELLO</code>
          </li>
        </ul>
      </p>
    </>
  );
}
