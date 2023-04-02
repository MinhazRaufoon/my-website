import { Project } from "../../types";

type PropType = {
  project: Project;
};

export function FtpProject(props: PropType) {
  const { project } = props;

  return (
    <>
      <h1>FTP Server and Client</h1>

      <h2>Motivation & context</h2>
      <p>
        This project has two applications: FTP server and FTP client. They were
        developed as academic project in the course "Computer Networking Lab" in
        Faculty of Computer Science, University of Dhaka in 2015.
      </p>
    </>
  );
}
