import { Project } from "../../types";

type PropType = {
  project: Project;
};

export default function BscThesisProject(props: PropType) {
  const { project } = props;
  return (
    <>
      <h1>Bachelor thesis: {project.subtitle}</h1>
      <h2>Motivation & context</h2>
      <p>
        This project was submitted as a Bachelor Thesis to Faculty of Computer
        Science, University of Dhaka in 2017. We have implemented 4 different
        failover mechanisms in traditional and SDN networks and performed
        comparative analysis of their failover recovery times. The thesis book
        can be found{" "}
        <a
          href="https://firebasestorage.googleapis.com/v0/b/minraufoon.appspot.com/o/Thesis%20Book.pdf?alt=media&token=fd727f7f-0f8d-45fc-95d8-2330586cfd4b"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <h2>Presentation</h2>
      <iframe
        title="Presentation"
        style={{
          minHeight: "700px",
        }}
        src="https://firebasestorage.googleapis.com/v0/b/minraufoon.appspot.com/o/bsc-thesis.pdf?alt=media&token=ea77e7fb-696e-486c-abf0-8a082f0b9fc0"
      ></iframe>
      <h2>Implementation</h2>
      <p>
        All the source code can be found{" "}
        <a
          href={project.links.find((item) => item.type === "github")?.url}
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
        <ul>
          {project.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </p>
    </>
  );
}
