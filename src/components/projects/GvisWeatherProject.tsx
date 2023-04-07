import { Project } from "../../types";

type PropType = {
  project: Project;
};

export default function GvisWeatherProject(props: PropType) {
  const { project } = props;
  return (
    <>
      <h1>{project.title}</h1>
      <h2>Motivation & context</h2>
      <p>
        I developed this project to learn microservice architecture for full
        stack web development. The project aims to display weather information
        over geographical map at your current location. It also shows the
        weather details of the regions you select on the map.
      </p>
      <img src={project.poster} alt="poster" />

      <h2>Demo</h2>
      <p>
        I deactivated the microservices because I ran out of my free Azure
        credit. But you can watch how my project works in the following video:
      </p>
      <iframe
        height="400"
        src="https://www.youtube.com/embed/1j52mi_Hodc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h2>Implementation</h2>
      <h3>Architecture</h3>
      <p>
        The project consists of the following services:
        <ul>
          <li>Website: To display weather data on map</li>
          <li>Apollo server: To provide flexible GraphQl weather data</li>
          <li>
            Weather service: REST API server to load weather data from rapid API
          </li>
          <li>
            Map service: REST API to provide{" "}
            <a
              href="https://developer.here.com/documentation/here-lanes/dev_guide/topics/tile-tiling-scheme.html"
              target="_blank"
              rel="noreferrer"
            >
              HERE tile{" "}
            </a>{" "}
            calculation on map from requested latitude and longitudes
          </li>
          <li>
            Cache server: REST API to cache weather rapid API response for 1
            hour
          </li>
          <li>
            MongoDb: Database to save the cached weather rapid API response
          </li>
        </ul>
      </p>
      <img src="https://i.imgur.com/6CcxcbY.png" alt="Architecture" />
      <h3>Tools and frameworks</h3>
      <ul>
        {project.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </>
  );
}
